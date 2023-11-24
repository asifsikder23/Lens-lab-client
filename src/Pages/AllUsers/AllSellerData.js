import React from 'react';

const AllSellerData = ({user}) => {
    const { name, email, role, photo, _id } = user;

    const handleMakeAdmin = (id) => {
      fetch(`https://lens-lab-server-three.vercel.app/users/admin/${id}`, {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Sucessfully Make Admin");
            
          }
        });
    };
  
    const handleDelete = (id) => {
      console.log(id);
      fetch(`https://lens-lab-server-three.vercel.app/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("Successfully delete user");
          
        });
    };
  
    const handleMakeStatus = (id) => {
      fetch(`https://lens-lab-server-three.vercel.app/users/status/${id}`, {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Sucessfully verified");
           
          }
        });
    };
    return (
        <div>
            {
              role == "Seller" &&
              <tr key={_id}>
                
                <th>
                    <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/2039/2039075.png" alt="" />
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm opacity-50">{email}</div>
                    </div>
                  </div>
                </td>
                <td>{role}</td>
                <td>
                  {
                    user?.status !== "verified" ?
                    <button
                  onClick={() => handleMakeStatus(_id)} className="btn btn-ghost btn-xs bg-blue-200">
                    Verify
                  </button>
                  :
                  <button
                  disabled
                   className="btn btn-ghost btn-xs bg-blue-200">
                    Verified
                  </button>
                  }
                </td>
                <td>
                  {user?.role !== "admin" ?
                    <button
                      onClick={() => handleMakeAdmin(_id)}
                      className="btn btn-ghost btn-xs bg-green-200"
                    >
                      Make Admin
                    </button>
                    :
                    <button
                      disabled
                      className="btn btn-ghost btn-xs bg-green-200"
                    >
                      Make Admin
                    </button>

                  }
                </td>
                <th>
                  <button
                  onClick={()=> handleDelete(_id)} className="btn btn-ghost btn-xs bg-red-400">
                    Delete
                  </button>
                </th>
              </tr>
            }
        </div>
    );
};

export default AllSellerData;