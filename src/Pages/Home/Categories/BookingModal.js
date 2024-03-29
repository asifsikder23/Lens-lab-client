import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const BookingModal = ({ product, booking }) => {

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookingFromModal = {
            productName: booking.productName,
            price: booking.sellingPrice,
            customerName: name,
            location,
            email,
            phone
        }
        console.log(bookingFromModal);

        fetch('https://lens-lab-server-three.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingFromModal)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Booking Confirmed.');
                    form.reset();
                }
                else {
                    alert(data.message);
                    form.reset();
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{booking?.productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <div className='flex'>
                        <div className='w-4/5'>
                            <img src={booking?.images1} alt="" />
                        </div>
                        <div>
                        <input disabled name='name' type="text" defaultValue={user?.displayName ? user.displayName : 'Unknown'} placeholder="Your Name" className="input w-full input-bordered" />
                        <input disabled name='email' type="text" defaultValue={user?.email ? user.email : 'Unknown'} placeholder="Email Address" className="input w-full input-bordered" />
                        <input disabled name='price' type="text" defaultValue={booking?.sellingPrice} placeholder="Price" className="input w-full input-bordered" />
                        </div>
                        </div>

                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />

                        

                        <input className='w-full btn btn-accent input-bordered' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;