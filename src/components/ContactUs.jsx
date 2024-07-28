import React from 'react'
import AcademicCityImg from "../assets/HeroImg.jpeg";
const ContactUs = () => {
  return (
    <section id='contact' className="bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={AcademicCityImg} alt="Contact Us" className="w-full h-[360px] object-cover rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <form action="https://formsubmit.co/itmanager@edentu.com" method="POST" id="contact-form">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
