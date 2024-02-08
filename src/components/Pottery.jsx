import React, { useState, useRef } from 'react';
import { data } from "../data/potterydata.js";

const Pottery = () => {
  // projects file

  const pottery = data;

  //setPottery(data);


  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef();

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div name='pottery' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* ... */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-[800px] h-[800px] gap-4 px-14">
          {/* Grid Item */}
          {pottery.map((item, index) => (
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
                  <button
                    onClick={() => openModal(item)}
                    className="text-center rounded-lg px-2 py-2 m-2
                               bg-white text-gray-700 text-lg">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Modal */}
        {modalOpen && (
          <div className="fixed w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div
              ref={modalRef}
              onClick={handleOutsideClick}
              className="bg-white justify-center items-center rounded-lg p-8 w-[50%] h-[75%]">
              <button
                onClick={closeModal}
                className="float-right text-red-500">
                X
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {selectedItem && selectedItem.name}
              </h2>               
              <p className="text-med">
                {selectedItem && selectedItem.medium}
              </p>
              <img
                src={selectedItem && selectedItem.image}
                alt={selectedItem && selectedItem.name}
                className="w-[50%] h-[90%] object-contain mb-4"
              />

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pottery;