import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-stone-900 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src="https://petapixel.com/assets/uploads/2021/04/LEADused-gear-general-guide_7-04-202111382.jpg"
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-stone-800">
            <div className="space-y-2">
              <p className="inline-block text-2xl font-semibold sm:text-3xl">
                Lens Lab
              </p>
            </div>
            <div className="dark:text-gray-100">
              <p>
                Cameras and Photography Gear Finding the Universe contains
                affiliate links, meaning if you make a purchase through these
                links, we may earn a commission at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
        <section class="overflow-hidden bg-stone-900  sm:grid sm:grid-cols-2">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center sm:text-left">
              <h2 class="text-2xl font-bold text-white md:text-3xl">
                If you are looking for the best place to sell your used cameras
                and other photography equipment, then this guide is for you.
              </h2>

              <p class="hidden text-white md:mt-4 md:block">
                We created Lens Lab because we saw the need for a better way to
                buy and sell photography and videography equipment. Passionate
                about the craft ourselves, we dreamed of a more focused platform
                designed for industry professionals and hobbyists.
              </p>
            </div>
          </div>
          <img
            alt=""
            src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/12/7abbd62ccc6b82f8eec569e216de01b1.jpg"
            class="h-56 w-full object-cover sm:h-full lg:rounded-l-full"
          />
        </section>
        <section>
          <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="http://cdn.shopify.com/s/files/1/0486/4137/6411/collections/dims_1200x1200.jpg?v=1633505296"
                  alt=""
                  className="h-80 dark:bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <h3 className="text-3xl font-bold">
                    Leading a safe Marketplace
                  </h3>
                  <p className="my-6 dark:text-gray-400">
                    As Photographers and Videographers everyone at Gear Focus
                    has personally bought and sold a TON of gear over the years.
                    Yes we love gear! When it comes to buying used gear, we know
                    the red flags to look for in listings. We have seen it all -
                    from poor pictures, stock pictures, pictures that don't
                    match the product name to poorly written descriptions.
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img
                  src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2018/03/01203622/Darter1.jpg"
                  alt=""
                  className="h-80 dark:bg-gray-500 aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                  <h3 className="text-3xl font-bold">
                    Reducing Transaction Fees
                  </h3>
                  <p className="my-6 dark:text-gray-400">
                    Gear Focus charges a 5% commission fee to the seller after
                    an item has sold. If you sell on eBay you will pay a 10-13%
                    commission fee. <br />
                    And if you trade in your gear to a big corporation, their
                    offers will be as low as $0.30-$0.40 on the dollar. <br />
                    All online marketplaces charge an additional 2.9% + $0.35
                    when a credit card is used as the method of payment.
                  </p>
                 
                </div>
              </div>
              
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default About;
