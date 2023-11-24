import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/UserContext";

const AddProduct = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddproduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?key=${"b9b258b2d7931dedd2b31dda9078c475"}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const addproduct = {
            productName: data.name,
            originalPrice: data.originalprice,
            sellingPrice: data.resaleprice,
            location: data.location,
            email: user.email,
            usesTime: data.purchase,

            categoriesId: data.category,
            shortDescription: data.message,
            sellerName: user.displayName,
            images1: imgData.data.url,
            time: new Date(),
          };
          console.log(addproduct);
          fetch("https://lens-lab-server-three.vercel.app/categories", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(addproduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              alert("Product added successfully");
            });
        }
      });
  };
  return (
    <div className="bg-stone-900 text-white">
      <h1 className="text-2xl font-bold text-center mt-5">Add Products</h1>
      <div class="max-w-4xl p-6 mx-auto  rounded-md shadow-md  mb-12">
        <form onSubmit={handleSubmit(handleAddproduct)}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 items-center">
            <div>
              <label htmlFor="name" className="block dark:text-gray-400">
                Product Name
              </label>
              <input
                {...register("name", {
                  required: "Name Is Required",
                  minLength: {
                    value: 4,
                    message: "Name Must Be 4 Characters Or Long",
                  },
                })}
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300  dark:text-gray-800 focus:dark:border-violet-300 "
              />
            </div>
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
            <div>
              <label htmlFor="img" className="block dark:text-gray-400">
                Product Image
              </label>
              <input
                {...register("image", {
                  required: true,
                })}
                type="file"
                name="image"
                id="image"
                accept="image/*"
                placeholder="Enter Your img"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>
            <div>
              <label
                htmlFor="originalprice"
                className="block dark:text-gray-400"
              >
                Original Price
              </label>
              <input
                {...register("originalprice", {
                  required: "originalprice is Required",
                })}
                type="text"
                name="originalprice"
                id="originalprice"
                placeholder="Original Price"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.originalprice?.message}</p>
            )}
            <div>
              <label htmlFor="resaleprice" className="block dark:text-gray-400">
                Selling Price
              </label>
              <input
                {...register("resaleprice", {
                  required: "resaleprice is Required",
                })}
                type="text"
                name="resaleprice"
                id="resaleprice"
                placeholder="Selling Price"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.resaleprice?.message}</p>
            )}
            <div>
              <label htmlFor="location" className="block dark:text-gray-400">
                Location
              </label>
              <input
                {...register("location", { required: "location is Required" })}
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>

            <div>
              <label htmlFor="purchase" className="block dark:text-gray-400">
                Uses Time
              </label>
              <input
                {...register("purchase", { required: "purchase is Required" })}
                type="text"
                name="purchase"
                id="purchase"
                placeholder="Uses Time"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>
            <div>
              <label
                htmlFor="condition"
                className="block dark:text-gray-400 mt-6"
              >
                Condition*
              </label>
              <select
                {...register("condition", { required: true })}
                className="select select-bordered w-full bg-stone-900 border-white"
              >
                <option>excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="category"
                className="block dark:text-gray-400 mt-6"
              >
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full bg-stone-900 border-white"
              >
                <option value="101">Digital Camera</option>
                <option value="102">Camera Lenses & Filters</option>
                <option value="103">Video Cameras & Camcorders</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block dark:text-gray-400">
                Description
              </label>
              <textarea
                {...register("message", { required: "message is Required" })}
                name="message"
                placeholder="Description"
                className="w-full px-4 py-3 rounded-md border-2 border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-300"
              />
            </div>
            <button
              className="btn w-full py-2 px-8 mt-6 text-gray-100"
              type="submit"
            > Add Products
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
