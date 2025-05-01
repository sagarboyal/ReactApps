import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-74px)] bg-gradient-to-br from-gray-100 to-gray-200 px-4'>
      <div className='bg-white p-10 rounded-2xl shadow-2xl max-w-lg w-full text-center transition-all duration-300'>
        <div className='flex justify-center items-center mb-6'>
          <div className='bg-yellow-100 text-yellow-600 p-4 rounded-full shadow-md'>
            <FaExclamationTriangle className='text-5xl' />
          </div>
        </div>
        <h1 className='text-4xl font-extrabold text-gray-800 mb-3'>
          Access Denied
        </h1>
        <p className='text-gray-600 mb-6 text-lg'>
          Sorry, you don’t have permission to access this page.
        </p>
        <button
          onClick={goHome}
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-200'
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
