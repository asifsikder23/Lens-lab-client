
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';


const Dashboard = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1 className='text-3xl my-5'>My Orders</h1>

            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* {
                bookings.map((booking, i) => <tr key={booking._id}>
                <th>{i+1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>)
            } */}

          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Dashboard;