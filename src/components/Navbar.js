import logo from '../assets/images/logo.png';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 padding-x py-4 bg-white shadow-md'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'><img src={logo} alt='logo' width={200} height={40}/></a>
        <ul className='flex-1 flex justify-end items-end gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img className='hidden max-lg:block' src={hamburger} alt='hamburger' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
