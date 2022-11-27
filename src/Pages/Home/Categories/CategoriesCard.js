import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { categoriesName, images, categoriesId } = category;
  return (
    <div className="">
      <div href="#" class="block">
        <img
          alt="Simple Watch"
          src={images}
        />
        <div class="my-5">
          <h3 class="font-medium">{categoriesName}</h3>
        </div>
        <Link to={`/categories/${categoriesId}`}>
      <button
      className="btn w-full"
      >
        See Details
      </button>
      </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
