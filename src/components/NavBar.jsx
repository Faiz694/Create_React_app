import React,{useState} from "react";
import logo from "../assets/whole.svg";
import searchLogo from "../assets/Vector.svg";
import baseLineArrow from "../assets/baseline-arrow_drop_down-24px.svg";

const NavBar = ({ onSignInClick, openSignIn, openLogIn }) => {
 

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between container p-5 mx-auto">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <form className="hidden sm:flex items-center w-52 md:w-80 lg:w-96 bg-gray-100 rounded-full">
          <button className="ps-4 pe-2 py-2 bg-transparent">
            <img src={searchLogo} alt="searchIcon" width="18" height="18" />
          </button>
          <input
            type="text"
            placeholder="Search for your favorite groups in ATG"
            className="px-4 py-2 w-full bg-transparent text-sm placeholder:text-gray-500 font-semibold focus:outline-none"
          />
        </form>
        <div className="font-semibold space-x-1 flex items-start">
          <span className="hidden sm:block">Create account.</span>
          {/* onClick={onSignInClick} */}
          <button className="text-blue-600 hidden sm:block" onClick={openSignIn}>It’s free!</button>
          <button className="text-blue-600 block sm:hidden" onClick={openSignIn} >Sign in</button>
          <img onClick={openLogIn} src={baseLineArrow} alt="" />
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
