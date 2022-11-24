import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo with text white.png";
import logo2 from "../../Assets/logo with text.png";

const Login = () => {
  return (
    <div>
      
      <section className="dark:bg-zinc-900">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src="https://c1.wallpaperflare.com/preview/72/794/456/camera-portrait-mystery-urban.jpg"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <div className="flex justify-end">
              <img className="h-8 sm:h-10" src={logo} alt="" />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl text-right">
                Welcome to Lens Lab
              </h2>

              <p className="mt-4 leading-relaxed text-white/90 text-right">
                Selling your photo gear to KEH Camera is easy! Get an instant
                quote on our website, ship it in for free and get top-dollar for
                your camera equipment.
              </p>
            </div>
          </section>
          <main
            aria-label="Main"
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-14 block lg:hidden">
                
                  <img className="h-8 sm:h-10" src={logo2} alt="" />
               

                <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Welcome to Lens Lab
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Selling your photo gear to KEH Camera is easy! Get an instant
                  quote on our website, ship it in for free and get top-dollar
                  for your camera equipment.
                </p>
              </div>

              <section>
                <div className="p-4 rounded-md shadow sm:p-8 dark:text-gray-100">
                  <h2 className="mb-3 text-3xl font-semibold text-center">
                    Log In to your account
                  </h2>
                  <p className="text-sm text-center dark:text-gray-400">
                  Don't have an account?
                    <Link
                      to={"/signup"}
                      className="focus:underline hover:underline ml-3"
                    >
                      Sign Up here
                    </Link>
                  </p>
                  <div className="my-6 space-y-4">
                    <button
                      // onClick={handleGoogleLogIn}
                      aria-label="Login with Google"
                      type="button"
                      className="btn w-full gap-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                      </svg>
                      <p>Log In with Google</p>
                    </button>
                  </div>
                  <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />
                    <p className="px-3 dark:text-gray-400">OR</p>
                    <hr className="w-full dark:text-gray-400" />
                  </div>
                  <form
                    // onSubmit={handleSignUp}
                    action=""
                    className="space-y-8 ng-untouched ng-pristine ng-valid"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm">Email address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="leroy@jenkins.com"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm">Password</label>
                          
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="*****"
                          className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-stone-900 dark:text-gray-100 focus:dark:border-violet-400"
                        />
                        <Link
                            className="text-xs hover:underline dark:text-gray-400"
                          >
                            Forgot password?
                          </Link>
                      </div>
                    </div>
                    <button type="submit" className="w-full btn">
                      Log In
                    </button>
                  </form>
                </div>
              </section>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Login;
