import React from "react";

const ContactPage = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-74px)] bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4'>
      <div className='bg-white p-10 rounded-2xl shadow-2xl max-w-xl w-full text-center'>
        <h1 className='text-4xl font-extrabold mb-4 text-blue-700'>
          Contact Us
        </h1>
        <p className='text-gray-600 mb-6'>
          We'd love to hear from you! Please fill out the form below and we’ll
          get back to you shortly.
        </p>
        <form onSubmit={onSubmitHandler} className='space-y-5 text-left'>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 mb-1'
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Your name'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 mb-1'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='you@example.com'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 mb-1'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              id='message'
              placeholder='Your message...'
              rows='4'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-semibold'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
