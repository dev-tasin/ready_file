import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Navbar = () => {
  return (
    <div className='bg-primary'>
        <Container>
        <div className='py-[30px] flex items-center justify-between text-white'>
            <div className='w-1/2'>
                <a href="#">
                    <img src="../../src/assets/logo.png" alt="" />
                </a>
            </div>

            <div className='flex'> 
                <ul className='flex gap-x-[47px] text-base font-primary font-semibold '>
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
                </ul>
            </div>

            <div className='ml-[72px] border-2'>
                <Button>CONTACT</Button>
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Navbar