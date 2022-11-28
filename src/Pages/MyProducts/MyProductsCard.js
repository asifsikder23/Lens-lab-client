import React from "react";

const MyProductsCard = ({ myProduct }) => {
  const { productName, images1, location, shortDescription, time, _id } =
    myProduct;

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/categories/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Successfully delete user");
      });
  };

  const handleMakeAdvertise = (id) => {
    fetch(`http://localhost:5000/advertise/${id}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Make Advertise");
        }
      });
  };
  return (
    <div>
      <article class="flex bg-white transition hover:shadow-xl">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
            <span>{time}</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={images1}
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 class="font-bold uppercase text-gray-900">{productName}</h3>
            <p>{location}</p>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
              {shortDescription}
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <button
              onClick={() => handleMakeAdvertise(_id)}
              className="btn btn-ghost btn-xs bg-red-400"
            >
              Make Advertise
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-ghost btn-xs bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MyProductsCard;
