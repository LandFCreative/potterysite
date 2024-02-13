import React, { useState } from 'react';
import { FaBars, FaTimes,} from 'react-icons/fa';
import Logo from '../assets/CD.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '65px' }} />
      </div>

     
      {/* Hamburger */}
      <div onClick={handleClick} className='py-6 text-2xl z-10' >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-20vw h-screen bg-[#4893a4] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl'>
        <a href='/'>Home</a>

        </li>
        <li className='py-6 text-3xl'>
          <a href='/about'>About</a>
        </li>

        {/* <li className='py-6 text-3xl'>
          <a href='/skills'>Skills</a>
        </li> */}

        <li className='py-6 text-3xl'>
            <a href='/design'>Design</a>
        </li>

        <li className='py-6 text-3xl'>
            <a href='/pottery'>Pottery</a>
        </li>

        <li className='py-6 text-3xl'>
            <a href='/contact'>Contact</a>
        </li>
      </ul>






</div>
  )
}

export default Navbar