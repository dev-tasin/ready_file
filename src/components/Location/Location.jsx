import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Location = () => {
  return (
    <div>
        <div className='bg-map bg-no-repeat bg-center bg-cover h-[450px]'></div>
        <div className='bg-primary py-[47px] border-b-[5px] border-[#FFB800]'>
            <Container>
                <div className='md:flex items-center justify-between text-white px-[20px] md:px-0 '>
                    <h2 className='text-[26px] md:text-[36px] font-primary font-bold text-white'>Want to join as member branch in your area?</h2>
                    <div className='text-white border-2 inline-block mt-[20px] md:mt-0'>
                    <Button>CONTACT</Button>
                    </div>
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Location