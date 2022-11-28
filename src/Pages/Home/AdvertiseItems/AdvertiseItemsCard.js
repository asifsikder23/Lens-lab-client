import React from "react";

const AdvertiseItemsCard = ({advertise}) => {
  const { name, sellerName, location, sellingPrice, img } = advertise;
  return (
    <div>
      <article className="flex flex-col dark:bg-gray-900">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        >
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={img}
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Te nulla oportere reprimique his dolorum"
          ></a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >
            {name}
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {sellerName}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
            <span>{location}</span>
            <span>{sellingPrice}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdvertiseItemsCard;
