import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  const { priceId, amount, mode, quantity } = await req.json(); // Extract details from request body
  try {
    let lineItems: Stripe.Checkout.SessionCreateParams.LineItem[];

    // Check if it's a one-time payment and set line item accordingly
    if (mode === 'payment' && amount) {
      lineItems = [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'One-Time Support',
          },
          unit_amount: amount, // Amount in cents
        },
        quantity: 1,
      }];
    } else {

      lineItems = [{
        price: priceId, // The price ID for subscriptions
        quantity: quantity,
      }];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: mode,
      line_items: lineItems,
      success_url: `${req.nextUrl.origin}/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Stripe session creation error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown Error occurred" }, { status: 500 });
  }
}
