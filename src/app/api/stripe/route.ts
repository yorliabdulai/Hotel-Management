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
 }