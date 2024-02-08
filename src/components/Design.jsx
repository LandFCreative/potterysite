import React from 'react';
import { data } from "../data/designdata.js";


const Design = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    <div name='design' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400'>
            Design
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-14">
          
{/* Grid Item */}
{project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})`,
    backgroundSize: 'cover',
  }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div object-cover">
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-1xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-2 py-2 m-2
                       bg-white text-gray-700 text-lg">
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}       
         <a href={item.live} target="_blank">
          { <button
            className="text-center rounded-lg px-2 py-2 m-2
                       bg-white text-gray-700 text-lg">
            Live
          </button> }
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Design;