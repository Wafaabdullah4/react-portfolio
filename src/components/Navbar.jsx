import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <span className="mx-2 w-10 text-xl font-bold">W.</span>
      </div>

      <div className="m-8 flex items-center justify-center gap-3 text-2xl">
        <a href="https://www.linkedin.com/in/wafa-abdullah-nurbani-adam-a39283327/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Wafaabdullah4" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/bany_dam" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/Wafaabdullahnur" target="_blank" rel="noopener noreferrer">
          <FaSquareTwitter />
        </a>
      </div>

    </nav>
  )
}

export default Navbar
