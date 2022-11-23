import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/logo with text.png";


const Navbar = () => {
  const menuItems = (
    <>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/appointment"}>Products</Link>
      </li>

      <li className="relative font-medium text-white before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-white before:transition hover:before:scale-100">
        <Link to={"/contact"}>Contact Us</Link>
      </li>
      <li>
        <div className="sm:flex sm:gap-4">
          {/* {user?.uid ? (
            <Link
              onClick={handleLogout}
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Log Out
            </Link>
          ) : ( */}
            <Link
              to={"/login"}
              className="rounded-md bg-stone-700 px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Login / SignUp
            </Link>
          {/* )} */}
        </div>
      </li>
    </>
  );
  return (
    <div>
      <header aria-label="Site Header" className="bg-stone-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 text-xl" to={"/"}>
                <div className="flex items-center gap-3">
                  <div>
                    <img className="w-12" src={logo} alt="" />
                  </div>
                  <div className=" text-white">Lab Lens</div>
                </div>
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">{menuItems}</ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="dropdown dropdown-left">
                  <label tabIndex={0} className="lg:hidden">

                    <div className="avatar mt-3">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {/* {
                          user ?
                          <img src={user.photoURL} alt=""/>
                          :
                          <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" />
                        } */}
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-stone-900 rounded-box w-52"
                  >
                    {menuItems}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
