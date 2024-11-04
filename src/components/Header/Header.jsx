import React from 'react'
import Container from '../Container/Container'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt , FaFacebookF , FaTwitter , FaLinkedinIn , FaInstagram } from "react-icons/fa";



const Header = () => {
  return (
    <div className='bg-[#282828] text-white border-b-[5px] border-[#FFB800]'>
        <Container>
            <div className='flex justify-between py-[16px]'>
                <div className='flex gap-x-[54px] '>
                    <div className='relative flex items-center gap-x-[5px] after:absolute after:content-[""] after:w-[2px] after:h-[16px] after:bg-white after:-right-[27px] after:top-[20%]'  >
                    <MdOutlineMailOutline className='text-[20px]' />
                    <p className='font-primary font-normal'>mail@yourcompany.com</p>
                    </div>

                    <div className='flex items-center gap-x-[5px]'>
                    <FaPhoneAlt className='text-' />
                    <p className='font-primary font-normal'>+896 120 5889 (Toll free)</p>
                    </div>
                </div>

                <div className='flex items-center gap-x-[19px]  '>
                    <a href="https://www.facebook.com/md.tasin.7773/" target="_blank">
                    <FaFacebookF/> 
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                    <FaTwitter/> 
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedinIn/> 
                    </a>
                    <a href="https://www.instagram.com/tasin__ahmed/" target="_blank">
                    <FaInstagram/> 
                    </a>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header