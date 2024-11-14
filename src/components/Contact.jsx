import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import {
  FaBars,
  FaTimes,
  FaGithubSquare,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaEnvelopeSquare,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelopeOpenText,
  FaEnvelopeOpen,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  FaEnvelope,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  return(
    <div className='flex xsm:justify-center  flex-col items-center w-full'> 

    <div name='contact' className='flex-col flex md:w-full w-full h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black md:justify-center  items-center p-2'>

        <div className='flex flex-col max-w-[60%] md:full w-full md:justify-center'>
            <div className='pb-4 flex flex-col  md:justify-center w-full h-full items-center'>
                
                <p className='text-4xl flex md:text-5xl pt-8 font-bold inline border-b-4 border-cyan-500 text-gray-300 justify-center w-full'>Contact</p>
                <p className='text-gray-300 pt-2 xsm:justify-center bg-gradient-to-r from-[#fccc63] via-[#8a3ab9] to-[#fbad50] text-transparent bg-clip-text'>Send me a message</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
        
    {/*Social Footer*/}
    <div className='w-full  h-[20px] bottom-10  pt-10 items-center flex md:justify-center xsm:justify-center'>
      <div className='w- gap-6 items-center flex flex'>
    <a
          className='flex  w-full text-[#6e5494] '
          href='https://www.github.com/in/
          '
        >
           <FaGithub size={30} />
        </a>
        <a
          className='flex  w-full  text-[#0077b5]'
          href='https://www.linkedin.com/in/
          '
        >
           <FaLinkedinIn size={30} />
        </a>
        <a
          className='flex w-full text-[#FF69B4] '
          href='https://www.instagram.com/in/im_musaib07
          '
        >
           <FaInstagram size={30} />
        </a>
        <a
          className='flex text-[#316FF6] hover:[#fccc63] w-full  '
          href='https://www.facebook.com/in/immusaib
          '
        >
           <FaFacebookF size={30} />
        </a>
        <a
          className='flex w-full text-[#EA4335]'
          href='https://mailto:musaibdar1365.md@gmail.com
          '
        >
           <FaEnvelope size={30} />
        </a>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Contact