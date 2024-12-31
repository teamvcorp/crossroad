import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const PaymentPage = async ({ params }) => {
  const { session_id } = await params;

  const session = await stripe.checkout.sessions.retrieve(session_id,{expand: ['setup_intent']});

  console.log(session.setup_intent.payment_method);

return (
    <div>
        <h1>Payment Page</h1>
        <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
);
};

export default PaymentPage;
