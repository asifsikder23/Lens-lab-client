
import React, { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../../Context/UserContext";
import MyProductsCard from "./MyProductsCard";

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      fetch(`http://localhost:5000/categories?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setInfo(data);
          setLoading(false);
        });
    }, [user.email]);
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
      {
        info.map(myProduct=>(
            <MyProductsCard
            key={myProduct._id}
            myProduct={myProduct}></MyProductsCard>
        ))
      }
    </div>
  );
};

export default MyProducts;
