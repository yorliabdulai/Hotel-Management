import Stripe from "stripe";

const checkout_session_completed = 'checkout.session.completed';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2023-10-16",
});