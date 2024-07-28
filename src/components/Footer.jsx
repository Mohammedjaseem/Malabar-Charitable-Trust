import React from 'react'
import malabarLogo from '../assets/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-[#64636d] ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between  space-y-6 md:space-y-0 py-5 px-4">
        <div>
          <img src={malabarLogo} alt="Malabar Academic City Logo" className="w-60 md:w-52 h-auto" />
          <p className="mt-4">
            Manoor - Chekanoor Road,<br />
            Manoor, Edappal, Malappuram,<br />
            Kerala 679578
          </p>
        </div>
        <div className="contact-us text-left">
          <h4 className="text-xl font-semibold mb-4 text-white">Contact Us</h4>
          <div className='flex flex-col gap-3'>
          <p className="flex items-center"><EmailIcon className="mr-2" /> <a href="mailto:info@macity.edu.in" className="hover:underline">info@macity.edu.in</a></p>
          <p className="flex items-center"><PhoneIcon className="mr-2" /> <a href="tel:+917034555551" className="hover:underline">+91 7034 555551</a></p>
          </div>
        </div>
        <div className="quick-links text-left">
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-gray-400 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#our-institutes" className="hover:text-gray-400 transition-colors duration-300">Our Institutes</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h4 className="text-xl font-semibold mb-4 text-white">Location</h4>
          <div className="w-full h-64 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d125408.05942142766!2d76.028657!3d10.811169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b9b0bbc3a929%3A0xb8791dc1538b2a2e!2sMalabar%20Dental%20College%20%26%20Research%20Centre!5e0!3m2!1sen!2sus!4v1715864663155!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
       
      </div>
      <div className="text-start flex flex-wrap gap-2 justify-between  bg-[#202020] py-4 px-4">
        <p className='text-sm text-gray-3000'>Copyright © 2024 <a href="https://connect.edentu.com/" className="text-white hover:underline">Edentu Pvt Ltd</a></p>
        <span className='text-sm text-gray-3000'>Last updated: 23/05/2024</span>
      </div>
    </footer>
  )
}

export default Footer
