import React from "react";

const ReportedItemCard = ({ reported }) => {
  const { productsName, productImg, userName, userEmail, _id } = reported;

  const handleReport = (id) => {
    console.log(id);
    fetch(`https://lens-lab-server.vercel.app/report/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Successfully delete report");
        
      });
  };
  return (
    <div>
      <article class="flex bg-white transition hover:shadow-xl m-10">
        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={productImg}
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 class="font-bold uppercase text-gray-900">{productsName}</h3>
            <div className="my-5">
              <p className="text-sm">{userName}</p>
              <p className="test-sm">{userEmail}</p>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <label
              onClick={()=>handleReport(_id)}
              class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Delete Report
            </label>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ReportedItemCard;
