import {  NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST() {
//creat a new customer or check for exisitng
//create new checkout session
//create payment intent
try {
    const session = await stripe.checkout.sessions.create({
        currency: 'usd',
        mode: 'setup',
        ui_mode: 'embedded',
        return_url: 'http://localhost:3000/paymentpage/verified/{CHECKOUT_SESSION_ID}'
      });

  return NextResponse.json({clientSecret: session.client_secret});

} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Stripe session creation error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown Error occurred" }, { status: 500 });
    
}






};