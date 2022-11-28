import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }, [user.email]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">My Orders</h1>

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
            {info.map((booking, i) => (
              <tr key={booking._id}>
                <th>{i + 1}</th>
                <td>{booking.customerName}</td>
                <td>{booking.email}</td>
                <td>{booking.productName}</td>
                <td>{booking.location}</td>
                <td>{booking.phone}</td>
                <td>{booking.price}</td>
                <td>
                  {
                    booking.price && !booking.paid && 
                    <Link to={`/dashboard/payment/${booking._id}`} >
                    <button className="btn btn-ghost btn-xs bg-green-200">
                      Pay
                    </button>
                  </Link>
                  }
                  {
                    booking.price && booking.paid && 
                    <span className="btn btn-ghost btn-xs bg-green-200">
                    Paid
                  </span>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
