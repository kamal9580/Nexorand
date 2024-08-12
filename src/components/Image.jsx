import React from 'react';
import photo from '../photo/photo1.jpg';
import photo1 from '../photo/photo2.jpg';
import photo2 from '../photo/photo3.webp';

function ImageComponent() {
  return (
    <div className="flex flex-wrap my-10 justify-around">
      <div className="w-full md:w-[30%] hover:scale-105 duration-700">
        <img src={photo} alt="Image 1" className="w-full object-cover" />
      </div>
      <div className="w-full  md:w-[30%] hover:scale-105 duration-700">
        <img src={photo1} alt="Image 2" className="w-full object-cover" />
      </div>
      <div className="w-full md:w-[30%] hover:scale-105 duration-700">
        <img src={photo2} alt="Image 3" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default ImageComponent;
