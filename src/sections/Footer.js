import { FaGoogle, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../assets/images/logowbg.png";

export const Footer = () => {
  return (
    <div className="bg-navy text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-64 items-start justify-center">
          
          {/* Contact Information */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <img src={logo} alt="CWC Logo" className="mx-auto md:mx-0 mb-6" width={290} />
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p><FaPhone className="inline mr-2" /> Phone: 9962009881</p>
            <p><FaClock className="inline mr-2" /> Opening Hours: 10:00 AM - 06:00 PM</p>
            <p><FaEnvelope className="inline mr-2" /> Email: <a href="mailto:info@cwcchennai.com" className="text-gray-400 hover:text-white">info@cwcchennai.com</a></p>

            <p className="mt-4">Buy Now</p>
            <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => window.location.href = '/ContactUs'}>
              Request a Quote
            </button>
          </div>

          {/* Menu */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Services</a>
                <ul className="ml-4 space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white">Warehousing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Storage</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">3 PL SERVICES</a></li>
                </ul>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Clients</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
            <div className="mt-8 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaGoogle /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div className='flex flex-row items-center'>
                <FaMapMarkerAlt className="inline mr-2 text-gray-400" size={24} />
                <div>
                  <p className="font-semibold">Air Warehouse</p>
                  <p className="text-sm w-56 text-gray-500">99/5, MGR Salai, Nagalkeni, Chromepet, Chennai - 600 044.</p>
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <FaMapMarkerAlt className="inline mr-2 text-gray-400" size={24} />
                <div>
                  <p className="font-semibold">Sea Warehouse Unit 1</p>
                  <p className="text-sm w-56 text-gray-500">Door No. 90, G.N.T Road, Ponniamman Medu, Madhavaram, Chennai - 600060.</p>
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <FaMapMarkerAlt className="inline mr-2 text-gray-400" size={24} />
                <div>
                  <p className="font-semibold">Sea Warehouse Unit 2</p>
                  <p className="text-sm w-56 text-gray-500">SY. No 2/1A & 3/3A, Kathirvedu Village, Puzhal, Ambattur Taluk, Chennai - 600 066</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-500">Copyright © 2024 CWC IMPORT PVT.LTD. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
