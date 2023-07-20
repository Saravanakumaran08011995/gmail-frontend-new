import React, { useContext } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import profilePhoto from "../assets/profile-photo.png";
import gmailIcon from "../assets/gmail-icon.png";
import "../App.css";
import { logout } from "../authContext/AuthActions";
import { AuthContext } from "../authContext/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img className="w-8 h-8 mr-4" src={gmailIcon} alt="Gmail" />
          <h1 className="text-lg font-bold">Gmail</h1>
        </div>
        <div className="flex items-center">
          <FaCog className="text-gray-600 mr-4" />
          <img className="w-8 h-8 rounded-full" src={profilePhoto} alt="Profile" />
          <p className="ml-2 text-[18px] cursor-pointer" onClick={handleLogout}>Logout</p>
        </div>
        
      </div>
      <div className="relative mb-4">
        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
        <input
          className="border border-gray-400 p-2 rounded-md text-gray-600 focus:outline-none focus:border-blue-500 pl-10 w-full"
          type="text"
          placeholder="Search mail"
        />
      </div>
    </div>
  );
};

export default Header;
