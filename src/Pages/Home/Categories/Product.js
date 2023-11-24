import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductCard from "./ProductCard";

const Product = () => {
    const params = useParams();
    const id = params.id;

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://lens-lab-server-three.vercel.app/categories/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setInfo(data);
            setLoading(false);
          });
      }, [id]);
    const [booking, setBooking] = useState(null);
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
                setBooking={setBooking}
                ></ProductCard>
            ))
        }
        {
          info.map(product =>(
            <BookingModal
            key={product._id}
            booking={booking}
            product={product}></BookingModal>
        ))
        }
      </div>

    </div>
  );
};

export default Product;
