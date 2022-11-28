import { useQuery } from "@tanstack/react-query";
import React from "react";
import ReportedItemCard from "../../Layout/DashboardLayout/ReportedItemCard";
import AllSellerData from "./AllSellerData";

const AllSeller = () => {
  const { data: info = [], refetch } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">All Sellers</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {info.map((user, i) => (
              <AllSellerData key={user._id} i={i} user={user}></AllSellerData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
