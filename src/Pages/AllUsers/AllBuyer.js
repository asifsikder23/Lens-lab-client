import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllBuyerData from "./AllBuyerData";

const AllBuyer = () => {
  const { data: info = [], refetch } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await fetch("https://lens-lab-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">All Buyers</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            
            {info.map((user, i) => (
              <AllBuyerData key={user._id} i={i} user={user} refetch={refetch}></AllBuyerData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
