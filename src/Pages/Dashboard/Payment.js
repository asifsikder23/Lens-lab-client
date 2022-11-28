import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51M94zMJH6ZrVxAHNG3hMBCjjzqoWQzRl00wyPviXCT0T41Vsm2Z9azhdM89kVB96zx0yOKh5tJA0vwWmLUtHAP2s00DWb8c26Z');


const Payment = () => {
  const booking = useLoaderData();
    
    const { productName, price } = booking;
    return (
        <div className=''>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl">Please pay <strong>${price}</strong> for your product</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
