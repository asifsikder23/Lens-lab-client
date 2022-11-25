import React from "react";

const AddProduct = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            action=""
            className="space-y-8 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Deo"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="John Deo"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2 ">
                <label className="block text-sm">Category</label>
                <select
                  name="userType"
                  className="select select-bordered w-full max-w-xs px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-200 bg-zinc-900"
                >
                  <option>Buyer</option>
                  <option>Seller</option>
                  <option>Seller</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm">Photo URL</label>
                <input
                  type="check"
                  name="photo"
                  id="photo"
                  placeholder="https://scontent.fdac145-1.fna.fbcdn.net"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm">location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Original Price</label>
                </div>
                <input
                  type="text"
                  name="orPrice"
                  id="orPrice"
                  placeholder="12000 tk"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Selling Price</label>
                </div>
                <input
                  type="text"
                  name="sellPrice"
                  id="sellPrice"
                  placeholder="12000 tk"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
            </div>
            <button type="submit" className="w-full btn">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
