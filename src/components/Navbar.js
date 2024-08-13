import { useState } from 'react';
import { FaClock, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='fixed top-0 left-0 w-full z-50 padding-x py-4 bg-white shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'><img src={logo} alt='logo' width={200} height={40} /></a>
        
        <div className='flex ml-32 items-center space-x-6'>
          <div className='flex items-center'>
            <FaPhoneAlt className="text-navy text-sm mr-2" />
            <span className="text-navy text-sm">9962009881</span>
          </div>
          <div className='flex items-center'>
            <FaClock className="text-navy text-sm mr-2" />
            <span className="text-navy text-sm">10:00- 06:00</span>
          </div>
          <div className='flex items-center'>
            <FaEnvelopeOpenText className="text-navy text-sm mr-2" />
            <span className="text- text-sm">info@cwcchennai.com</span>
          </div>
        </div>
        <ul className='flex-1 flex justify-end items-end gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-navy hover:underline">
                {item.icon}{item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='relative'>
          <img 
            className='hidden max-lg:block cursor-pointer' 
            src={hamburger} 
            alt='hamburger' 
            width={25} 
            height={25} 
            onClick={toggleMenu}
          />
          {isOpen && (
            <ul className='absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 space-y-4'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="block text-lg text-slate-gray hover:text-navy bg-forest-green">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
