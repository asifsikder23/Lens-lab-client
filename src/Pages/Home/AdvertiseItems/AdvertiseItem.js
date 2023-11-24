import React, { useEffect, useState } from "react";
import AdvertiseItemsCard from "./AdvertiseItemsCard";

const AdvertiseItem = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://lens-lab-server-three.vercel.app/advertise")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Advertise</h2>
            <p className="font-serif text-sm dark:text-gray-400">
            Making promises and keeping them is a great way to build a brand.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {info.map(advertise => (
        <AdvertiseItemsCard
          key={advertise._id}
          advertise={advertise}
        ></AdvertiseItemsCard>
      ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AdvertiseItem;
