import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {  ThreeDots } from "react-loader-spinner";

const Product = () => {
    const params = useParams();
    const id = params.id;

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    
    console.log(id);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/categories/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setInfo(data);
            setLoading(false);
          });
      }, [id]);
    console.log(info);
  
  return (
    <div>
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
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
        {
            info.map(product =>(
                <ProductCard
                key={product.id}
                product={product}
                ></ProductCard>
            ))
        }
      </div>
    </div>
  );
};

export default Product;
