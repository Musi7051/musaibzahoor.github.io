import React, { useState } from 'react'; 
import me from '../assets/main.png';
import logo from '../assets/logo.png';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaArrowLeft,
  FaInstalod,
} from 'react-icons/fa';
import 'react-social-icons/vimeo'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill, BsInstagram, BsVimeo } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return(
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-l from-gray-700 via-gray-900 to-black opacity-90 text-gray-300'>
      <div>
       <div className='flow-root flex xsm:flex '>
        <h1 className=' font-bold text-2xl xsm:text-xl md:text-4xl sm:text-2xl'>MUSAIB ZAHOOR</h1>
        <img alt='header_logo' className='ml-4' src={logo} width={35} height={20} />
        </div>
        
      </div>
      {/* menu */}
      <ul className='xsm:hidden md:flex lg:flex gap-x-8  duration-500 active:text-black'>
        <li className='hover:text-sky-700'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='hover:text-sky-700'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className='lg:hidden md:hidden z-10 cursor-pointer transition-duration-1000 ease-out'>
        {!nav ? <FaBars size={24}/> : <FaTimes size={24} />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-9 right-5 w-[150px] h-[236px] bg-gradient-to-l from-gray-700 via-gray-900 to-black flex flex-col justify-center items-center shadow-sm shadow-white grid text-center grid-rows-5 divide-y bg-opacity-90 cursor-pointer transition-duration-1000 ease-out'
        }
      >
        <li className='py-2 text-2xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-2 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0 md:w-[160px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 md:bg-blue-600  '>
            <a
              className='flex justify-between items-center w-full md:text-gray-300 xsm:text-[#0077b5]'
              href='https://www.linkedin.com/in/#
              '
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li >
          <li className='md:w-[160px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 md:bg-[#FF69B4] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full md:text-gray-300 xsm:text-[#FF69B4]'
              href='https://www.instagram.com/im_musaib07'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='md:w-[160px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 md:bg-[#333333] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full md:text-gray-300 xsm:text-[#6e5494]'
              href='https://github.com/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='md:w-[160px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 md:bg-[#6fc2b0] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full md:text-gray-300 xsm:text-[#EA4335]'
              href='mailto:musaibdar1365.md@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='md:w-[160px] md:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 md:bg-[#565f69] xsm:h-[40px] xsm:w-[150px] xsm:size-10 xsm:bg-opacity-0'>
            <a
              className='flex justify-between items-center w-full md:text-gray-300 xsm:text-[#4285F4]'
              href='#'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className='fixed w-full h-[30px] flex justify-between items-center px-4 bottom-0 bg-[] text-gray-300 flex'>
      <h3 className='text-right w-full items-center pr-4 font-sans font-bold'>&copy; Musaib Zahoor</h3>
    </div>
    
    </div>
    
  );
};
export default Navbar;