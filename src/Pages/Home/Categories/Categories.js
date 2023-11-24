import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://lens-lab-server-three.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div></div>
      {loading && (
        <h2 className="flex justify-center my-10">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </h2>
      )}
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <div class="flex items-center rounded bg-gray-100 p-8">
              <div class="mx-auto text-center lg:text-left">
                <h2 class="text-4xl font-bold">All Categories here</h2>

                <p class="mt-4 max-w-[45ch] text-sm text-gray-700">
                  Give second hand goods a new lease of life, help the
                  environment and save cash.
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 items-center lg:py-12">
              {info.map((category) => (
                <CategoriesCard
                  key={category._id}
                  category={category}
                ></CategoriesCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
