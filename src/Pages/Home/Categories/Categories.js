import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';
import { CirclesWithBar, ThreeDots } from "react-loader-spinner";

const Categories = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data);
        setLoading(false);
      });
  }, []);
    return (
        <div>
            <div className='mt-20'>
                <h1 className='text-4xl text-center font-bold my-3'>Products Category</h1>
                <p className='text-center font-thin'>Give second hand goods a new lease of life, help the environment and save cash.</p>
            </div>
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 md:mx-20 my-10'>
            {
                info.map(category=>(
                    <CategoriesCard
                    key={category._id}
                    category={category}></CategoriesCard>
                ))
            }
            </div>
        </div>
    );
};

export default Categories;