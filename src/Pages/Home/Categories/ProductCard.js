import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import blueTick from '../../../Assets/bluetick.png';
import { AuthContext } from "../../../Context/UserContext";

const ProductCard = ({ product, setBooking }) => {
  const {user} = useContext(AuthContext)
  const { productName, images1, sellingPrice,originalPrice, shortDescription, location, usesTime, sellerName} =
    product;

    const handleReport = () =>{

    const userEmail = user.email;
    const userName = user.displayName;
    const productImg = images1;
    const productsName = productName;


      const userReport = {productsName , productImg, userName, userEmail };

      
      fetch('https://lens-lab-server-three.vercel.app/report', {
          method: 'POST' ,
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(userReport)
      }).then(res => res.json())
      .then(data =>{
        alert('success')
          
      })
  } 
  return (
    <div>
        <PhotoProvider>
          <PhotoView src={images1}>
            <img className="h-56 w-full object-cover" src={images1} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div class="my-5">
          <dl>
            <div>
              <dt class="sr-only">Price</dt>

              <div className="card-actions justify-center">
                <div className="badge badge-outline bg-red-200">Orig. Price: {originalPrice}</div>
                <div className="badge badge-outline bg-green-200">Sell. Price: {sellingPrice}</div>
              </div>
              <div className="card-actions justify-center my-3">
              <div className="badge badge-outline bg-purple-200">Uses Time: {usesTime}</div>
              </div>
            </div>

            <div>
              <dt class="sr-only">Product</dt>

              <dd class="font-medium mb-3">{productName}</dd>
            </div>
            <div>
              <dt class="sr-only">Address</dt>

              <dd class="font-sm h-24">{shortDescription}</dd>
            </div>
          </dl>

          <div class="my-6 flex justify-between items-center gap-8 text-xs">
            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-gray-500">Address</p>

                <p class="font-medium">{location}</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>

              <div class="mt-1.5 sm:ml-3 sm:mt-0">
                <p class="text-gray-500">Seller</p>

                <div className="flex justify-between">
                <div>
                <p class="font-medium">{sellerName}</p>
                </div>
                {
                  user.status == "verified" &&
                  <div>
                <img className="h-5 w-5" src={blueTick} alt="" />
                </div>
                }
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
          <label
          onClick={() => setBooking(product)}
          htmlFor="booking-modal"
           className="btn w-3/5">Buy Now</label>
          <label
          onClick={handleReport}
           className="btn">Report</label>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
