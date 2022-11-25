import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { categoriesName, images, categoriesId } = category;
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
      <Link to={`/categories/${categoriesId}`}>
      <button
      className="btn w-full"
      >
        See Details
      </button>
      </Link>
    </div>
  );
};

export default CategoriesCard;
