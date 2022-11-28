import React from 'react';

const AllBuyerData = ({user, refetch}) => {
    const { name, email, role, photo, _id } = user;

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://lens-lab-server.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert("Successfully delete user");
            refetch()
          });
      };
    return (
        <div>
            {
              role == "Buyer" &&
              <tr>
                <th>
                    <img className='w-10 h-10 gap-5' src="https://cdn-icons-png.flaticon.com/512/2534/2534310.png" alt="" />
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
                      <div className="font-bold mr-10">{name}</div>
                      <div className="text-sm opacity-50">{email}</div>
                    </div>
                  </div>
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

export default AllBuyerData;