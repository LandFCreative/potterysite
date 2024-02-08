import React, { useState } from "react";


const Griditem = ({ item, index }) => {
  const [showModal, setShowModal] = useState(false);
  const handleViewClick = () => {
    setShowModal(true);
  };


  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div
      key={index}
      style={{ backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      height: '400px'
    }}

    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div object-cover ">
      {/* Other content */}
      <div className="pt-8 text-center ">
        <button
          className="text-center rounded-lg px-2 py-2 m-2
                     bg-white text-gray-700 text-lg"
          onClick={handleViewClick}>
          View
        </button>
      </div>

      {showModal && (
       <div className={`fixed top-10 z-10 flex items-center justify-center bg-opacity-50 ${showModal ? 'block' : 'hidden'}`}>

          <div className="bg-white rounded-lg px-8 py-8 max-w-5xl max-h-5xl overflow-hidden" 
          style={{width: '500px', height: 'auto'}}>         
           <img src={item.image} alt={item.name} className="display-flex object-contain" />
     
           <button className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-lg" onClick={handleModalClose}>Close</button>
     
       </div>
     
     </div>
      )}
    </div>
  );
};


export default Griditem;