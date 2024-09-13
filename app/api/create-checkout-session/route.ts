import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export async function POST(req: NextRequest) {
  const { priceId, quantity, mode } = await req.json(); // Extract priceId from request body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: mode,
      line_items: [
        {
          price: priceId, // The price ID from the front-end
          quantity: quantity,
        },
      ],
      success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Stripe session creation error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown Error occured" }, { status: 500 });
  }
}
