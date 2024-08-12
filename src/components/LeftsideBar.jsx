import React from "react";
import { IoLinkSharp, IoCartOutline, IoColorPaletteOutline, IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftsideBar = () => {
  const menuItems = [
    { icon: <IoLinkSharp />, text: "Links and Appearance", path: "/links" },
    { icon: <IoCartOutline />, text: "Shop", path: "/shop" },
    { icon: <IoColorPaletteOutline />, text: "Analitics", path: "/analytics" },
    { icon: <IoSettingsOutline />, text: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-gray-50 h-screen w-64 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          {
          menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center py-3 px-4 text-gray-700 hover:bg-indigo-100 rounded-lg transition duration-150 ease-in-out"
            >
              <span className="text-xl mr-3 text-indigo-600">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </Link>
          ))
          }
        </div>
        
      </div>
     
    </div>
  );
};

export default LeftsideBar;