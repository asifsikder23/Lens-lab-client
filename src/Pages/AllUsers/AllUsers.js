import { useQuery } from "@tanstack/react-query";
import React, {  useState } from "react";


const AllUsers = () => {
  
  // const [loading, setLoading] = useState(true);


  const { data: info = [], } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
        const res = await fetch("http://localhost:5000/users");
        const data = await res.json();
        return data;
    }
})


  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {info.map((user, i) => (
              <tr key={user.id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-ghost btn-xs bg-blue-200">
                    Verify
                  </button>
                </td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
