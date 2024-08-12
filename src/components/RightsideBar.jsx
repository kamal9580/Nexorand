// import React from "react";
// import { Link } from "react-router-dom";

// const RightsideBar = () => {
//   return (
//     <div className="bg-indigo-100 p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
//       {/* Profile Pic */}
//       <div>
//         <div className="flex flex-col items-center mb-6">
//           <div className="w-32 h-32 rounded-full bg-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
//             B
//           </div>
//           <h2 className="text-2xl font-bold text-indigo-800">
//             biranjay_kumar_
//           </h2>
//           <span className="text-sm text-indigo-600">
//             biranjaykumar@gmail.com
//           </span>
//         </div>

//         {/* Bio */}
//         <div className="mb-6 text-indigo-700 text-sm">
//           <p>🎬 Actor | 🎶 Musician | 🏆 Award Winner</p>
//           <p>
//             Passionate about <span className="font-semibold">Chess</span>
//           </p>
//           <p>
//             Check out my latest project:{" "}
//             <span className="font-semibold">Mern</span>
//           </p>
//           <p>📍 Andheri East, Mumbai | 🌍 Indian</p>
//           <p>For business inquiries: google@gmail.com</p>
//         </div>
//       </div>

//       {/* Creation Date */}
//       <div className="mb-6 text-indigo-600 text-sm">
//         <span>Created At: 7-Aug-2024</span>
//       </div>

//       {/* Follow Button */}
//       <div className="flex justify-center">
//         <Link
//           to="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center"
//         >
//           Follow me on Instagram
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 ml-2"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RightsideBar;


import React, { useEffect, useState } from 'react';
import HighlightedLinkSection from './HighlightedLink';

const RightsideBar = () => {
  const [font, setFont] = useState('Arial');
  const [bgColor, setBgColor] = useState('#C5CAE9');
  const [borderStyle, setBorderStyle] = useState('None');
// const [bgHue, setBgHue] = useState(0); // Default hue

// useEffect(() => {
//   const hslColor = `hsl(${bgHue}, 100%, 50%)`;
//   setBgColor(hslColor);
// }, [bgHue]);

  return (
    <div className="mt-2 bg-transparent p-8 bg-white from-blue-50 to-indigo-100 shadow-xl max-w-sm mx-auto transform transition-all">
      {/* Font Selector */}
      <div className="mb-6 flex items-center">
  <label className="text-black text-md font-semibold mr-4">Font:</label>
  <select 
    value={font} 
    onChange={(e) => setFont(e.target.value)}
    className="w-full max-w-xs px-2 border-2 border-indigo-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none hover:bg-indigo-50"
  >
    <option value="Arial">Arial</option>
    <option value="Helvetica">Helvetica</option>
    <option value="Times New Roman">Times New Roman</option>
    <option value="Courier New">Courier New</option>
  </select>
</div>


      {/* Background Color Selector */}
      <div className="mb-6">
      <label className="block text-black text-md font-semibold mb-2">Background Color:</label>
      <div className="flex items-center space-x-4">
        <input 
          type="color" 
          value={bgColor} 
          onChange={(e) => setBgColor(e.target.value)}
          className="w-full h-4 border-2 border-indigo-200  focus:ring-2 focus:ring-indigo-400 focus:outline-none cursor-pointer transition-transform transform"
        />
       
      </div>
    </div>


      {/* Border Style Selector */}
      <div className="mb-6">
        <label className="block text-black text-md font-semibold mb-2">Border Style:</label>
        <select 
          value={borderStyle} 
          onChange={(e) => setBorderStyle(e.target.value)}
          className="w-full px-3 border-2 border-indigo-200 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none hover:bg-indigo-50"
        >
          <option value="None">None</option>
          <option value="Solid">Solid</option>
          <option value="Dashed">Dashed</option>
          <option value="Dotted">Dotted</option>
        </select>
      </div>
      {/* adding the highlighted link */}
      <div>
        <HighlightedLinkSection/>
      </div>
    </div>
  );
};

export default RightsideBar;
