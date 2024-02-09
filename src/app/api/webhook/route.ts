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
        
    } catch (error) {
        
    }
}