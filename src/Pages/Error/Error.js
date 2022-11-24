import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="container">
                    
                    <div className="block md:flex justify-center items-center py-5">

                        <div className='flex justify-center px-5 pb-5'>
                            <img className='' src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif" alt="" />
                        </div>

                        <div className="error-template">
                            <h1 className='text-6xl py-2'>Oops!</h1>
                            <h2 className='text-lg py-2'>404 Not Found</h2>

                                <p className='text-lg py-2'>Sorry, an error has occured, <br /> Requested page not found!</p>

                            <div className="error-actions">
                                <Link to={'/'} className="btn btn-outline mt-4">
                                    Take Me Home </Link>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Error;