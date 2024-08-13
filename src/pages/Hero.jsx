import React, { useContext, useEffect, useState } from "react";
import RightsideBar from "../components/RightsideBar";
import LeftsideBar from "../components/LeftsideBar";
import ProfileCard from "../components/ProfileCard";
import { FaBars } from "react-icons/fa"; // Optional, for menu icon
import { UserContext } from "../context/UserContext";

const Hero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="flex flex-row min-h-screen">
      {/* Menu Button for Left Sidebar (Mobile) */}
      <button
        className="absolute top-4 left-4 z-10 md:hidden"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />{" "}
        {/* You can replace this with your custom menu icon */}
      </button>

      {/* Menu Button for Right Sidebar (Mobile) */}
      <button
        className="absolute top-4 right-4 z-10 md:hidden"
        onClick={toggleRightSidebar}
      >
        <FaBars size={24} />{" "}
        {/* You can replace this with your custom menu icon */}
      </button>

      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:max-w-xs`}
      >
        <LeftsideBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow mx-4">
        <ProfileCard />
      </div>

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full text-white transition-transform duration-300 transform ${
          isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-1 md:max-w-sm`}
      >
        <RightsideBar />
      </div>
    </div>
  );
};

export default Hero;
