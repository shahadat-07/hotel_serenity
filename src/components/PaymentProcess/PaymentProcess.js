import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IwduGIvmy6ZitmRBcG3ujEJWXz7WB3J5H4K5FtAQX8aaGDZ8YazftVEhu9u5mFZxvmwBjBIW7NWVfASq3sb6eOY00U2frjJD4');

const PaymentProcess = () => {
    return (
        <Elements stripe={stripePromise}>
           <CardForm/>
        </Elements>
    );
};

export default PaymentProcess;