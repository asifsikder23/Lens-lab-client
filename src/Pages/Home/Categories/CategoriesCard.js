import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const { categoriesName, images, categoriesId } = category;
  return (
    <div className="">
      <div href="#" class="block">
      <PhotoProvider>
                  <PhotoView src={images}>
                    <img  src={images} alt="" />
                  </PhotoView>
                </PhotoProvider>
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
