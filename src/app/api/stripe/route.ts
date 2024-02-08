import { getRoom } from "@/libs/apis";
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});

type RequestData = {
    checkinDate: string;
    checkoutDate: string;
    adults: number;
    children: number;
    numberOfDays: number;
    hotelRoomSlug: string;
}
 export async function POST(req: Request, res: Response) {
    const {checkinDate, checkoutDate, adults, children, numberOfDays, hotelRoomSlug}: RequestData = await req.json();
   if (!checkinDate || !checkoutDate || !adults  || !numberOfDays || !hotelRoomSlug){
    return new NextResponse("Please all fields are required", { status: 400 });
   }
   const origin = req.headers.get("origin");
   const session = await getServerSession(authOptions);
    if (!session) {
         return new NextResponse("Authentication required", { status: 401 });
    }
    const userId = session.user.id;
    const formattedCheckoutDate = checkoutDate.split("T")[0];
    const formattedCheckinDate = checkinDate.split("T")[0];
     try {
        const room: any = await getRoom(hotelRoomSlug)
        const discountPrice = room.price - (room.price / 100) * room.discount;
        const totalPrice = discountPrice * numberOfDays;
        const stripeSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: room.name,
                        images: room.images.map((image: { url: any; }) => image.url),
                    },
                    unit_amount: parseInt((totalPrice * 100).toString())
                },
                quantity: 1,
            }],
            payment_method_types: ["card"],
            success_url: `${origin}/users/${userId}`,
            
        })
        return  NextResponse.json(stripeSession, { status: 200, statusText: "Payment session created" }, );
     } catch (error: any) {
        console.log('Payment failed', error)
        return new NextResponse(error, { status: 500 });
     }
 }