import React from 'react'
import Container from '../Container/Container'
import { MdOutlineMailOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { FaPhoneAlt , FaFacebookF , FaTwitter , FaLinkedinIn , FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#1F1F1F]  bg-no-repeat bg-center bg-cover py-[150px]'>
        <Container>
            <div className='flex'>
                <div className='w-[40%]'>
                    <a href="#">
                    <img src="../../src/assets/logo.png" alt="" />
                    </a>
                    <div className='flex items-center gap-x-[5px] text-white pt-[33px]'  >
                        <MdOutlineMailOutline className='text-[20px]' />
                        <p className='font-primary font-normal text-sm'>mail@yourcompany.com</p>
                    </div>

                    <div className='flex items-center gap-x-[5px] text-white py-[15px]'>
                    <FaPhoneAlt className='text-' />
                    <p className='font-primary font-normal text-sm'>+896 120 5889 (Toll free)</p>
                    </div>
                    <div className='flex items-center gap-x-[5px] text-white pb-[34px]'>
                    <GrMapLocation className='text-' />
                    <p className='font-primary font-normal text-sm'>101 Baker Street, New York, USA, 12345</p>
                    </div>

                    <div className="flex gap-x-3">
                        <a href="https://www.facebook.com" target="_blank" className="flex items-center justify-center text-white bg-primary w-[30px] h-[30px] rounded-full">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" className="flex items-center justify-center text-white bg-primary w-[30px] h-[30px] rounded-full">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="flex items-center justify-center text-white bg-primary w-[30px] h-[30px] rounded-full">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" className="flex items-center justify-center text-white bg-primary w-[30px] h-[30px] rounded-full">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                <div className='w-[40%] flex justify-around'>
                    <div>
                        <h4 className='text-base font-primary font-bold text-white pt-[30px] pb-[21px]'>Company</h4>
                        <div className='flex flex-col'>
                        <a href="#" className='text-sm font-primary font-normal text-white'>Home</a>
                        <a href="#" className='text-sm font-primary font-normal text-white py-[15px]'>About</a>
                        <a href="#" className='text-sm font-primary font-normal text-white'>Services</a>
                        <a href="#" className='text-sm font-primary font-normal text-white py-[15px]'>Gallery</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-base font-primary font-bold text-white pt-[30px] pb-[21px]'>Others</h4>
                        <div className='flex flex-col'>
                        <a href="#" className='text-sm font-primary font-normal text-white'>Blog</a>
                        <a href="#" className='text-sm font-primary font-normal text-white py-[15px]'>Contact</a>
                        <a href="#" className='text-sm font-primary font-normal text-white'>Terms & Conditions</a>
                        <a href="#" className='text-sm font-primary font-normal text-white py-[15px]'>Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className='text-base font-primary font-bold text-white pt-[30px] pb-[21px]'>Certificate</h4>
                    <div className='flex gap-x-2'>
                        <img src="../../src/assets/footer1.png" alt="" />
                        <img src="../../src/assets/footer2.png" alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </div>

  )
}

export default Footer