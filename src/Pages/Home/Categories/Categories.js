import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    return (
        <div>
            <div className='mt-20'>
                <h1 className='text-4xl text-center font-bold my-3'>Products Category</h1>
                <p className='text-center font-thin'>Give second hand goods a new lease of life, help the environment and save cash.</p>
            </div>
            <div className='my-10 mx-10 md:mx-20'>
            <CategoriesCard></CategoriesCard>
            </div>
        </div>
    );
};

export default Categories;