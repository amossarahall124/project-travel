import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import SmallNav from "./SmallNav";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/places",
  },
];


const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">

        <div className=" w-screen py-2 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-16  font-bold text-2xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} height={200} width={200} alt="" className="h-16" />
              </Link>

            </div>
            <div className="hidden md:block lg:mr-36 ">
              <ul className="flex items-center gap-2 ">
                <li className="py-4">
                  <NavLink to="/" activeclassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/about" activeclassName="active">
                    About
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/blogs" activeclassName="active">
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink to="/places" activeclassName="active">
                    Best Places
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full md:mr-28 mr-24 "
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                Book Now
              </button>

              <div className="md:hidden block mr-24 ">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <SmallNav setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;