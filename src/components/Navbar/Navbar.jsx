import React, { useState } from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import { CgMenuGridO } from "react-icons/cg";


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)
  return (
    <div className='bg-primary px-[20px] md:px-0'>
        <Container>
        <div className='py-[30px] md:flex items-center justify-between text-white'>
            <div className='md:w-1/2 flex items-center justify-between'>
                <a href="#">
                    <img src="../../src/assets/logo.png" alt="" />
                </a>
                <CgMenuGridO 
                onClick={ () => setDropdown(!dropdown)}
                className='text-3xl md:hidden'/>
            </div>

            <div className={`${
                dropdown ? "block" : "hidden"
                } md:block transition duration-700 ease-in-out`}> 
                    <ul className='md:flex items-center gap-x-[47px] my-[10px] md:my-0 md:mb-0 text-base font-primary font-semibold '>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Gallery</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <div className='mt-[20px] md:mt-0 md:ml-[72px] border-2 inline-block'>
                            <Button>CONTACT</Button>
                        </div>
                    </ul>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Navbar