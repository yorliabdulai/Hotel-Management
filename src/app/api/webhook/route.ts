import { createBooking } from "@/libs/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const checkout_session_completed = 'checkout.session.completed';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});
export async function POST(req: Request, res: Response) {
    const reqBody = await req.text();
    const sig = req.headers.get("stripe-signature");
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
    let event: Stripe.Event;
    try {
        if(!sig || !webhookSecret) return;
        event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });   
    }
   
    // load our event
    switch(event.type){
        case checkout_session_completed:
            const session = event.data.object;
            const {
                // ts-ignore
                metadata: {
                    checkinDate,
                    checkoutDate,
                    adults,
                    children,
                    numberOfDays,
                    hotelRoom,
                    user,
                    totalPrice,
                    discount
                }
            } = session;

            // Create a booking
            await createBooking({
                user,
                 hotelRoom,
                 checkinDate,
                 checkoutDate,
                adults: Number(adults),
                children: Number(children),
                numberOfDays: Number(numberOfDays),
                totalPrice: Number(totalPrice),
                discount: Number(discount),
         });
         return NextResponse.json("Booking Successful",
         { status: 200, statusText: "Booking Successful" },)
            
            
        default:
            console.log(`Unhandled event type ${event.type}`);
    };
return NextResponse.json("Event Received",
    { status: 200, statusText: "Event Received" },)
}