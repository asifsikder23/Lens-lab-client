import React from 'react';

const AllUserData = ({user}) => {
    console.log(user);
    const { name, email, role, photo } = user;
    return (
        <div>
            <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>1</label>
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
                <button className="btn btn-ghost btn-xs bg-green-200">
                  Make Admin
                </button>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs bg-red-400">
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
    );
};

export default AllUserData;