import React from "react";

const CategoriesCard = ({ category }) => {
  const { categoriesName, images } = category;
  return (
    <div className=''>
      <a href="#" className="group block overflow-hidden">
        <img
          alt="Tee"
          src={images}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="relative bg-white pt-4">
          <h3 className="text-xl font-bold my-3 text-gray-700">
            {categoriesName}
          </h3>
        </div>
      </a>
      <button
      className="btn w-full"
      >
        See Details
      </button>
    </div>
  );
};

export default CategoriesCard;
