import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([
    { linkName: "Total views", clicks: 0, lastClicked: null },
    { linkName: "Total clicks", clicks: 0, lastClicked: null },
    // Add more links as needed
  ]);

  const handleLinkClick = (index) => {
    const newAnalyticsData = [...analyticsData];
    newAnalyticsData[index].clicks += 1;
    newAnalyticsData[index].lastClicked = new Date();
    setAnalyticsData(newAnalyticsData);
  };
  
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleLinkClick(index)}
          >
            <h3 className="text-xl font-semibold mb-2">{item.linkName}</h3>
            <p className="text-gray-600">Total Clicks: {item.clicks}</p>
            <p className="text-gray-600">
              Last Clicked:{" "}
              {item.lastClicked ? item.lastClicked.toLocaleString() : "Never"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
