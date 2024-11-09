import React from 'react'
import Container from '../Container/Container'

const Gallery = () => {
  return (
    <div className='pt-[40px] pb-[40px] md:pt-[78px] md:pb-[28px] px-[20px] md:px-0'>
            <Container>
                <div className='md:flex justify-between items-center mb-[40px] md:mb-[100px]'>
                    <h2 className='w-[289px] text-[26px] md:text-[48px] font-primary font-bold md:leading-[72px] mb-[20px] md:mb-0'>The biggest supplier on the country</h2>
                    <p className='md:w-[651px] text-base font-primary md:font-medium text-justify md:text-start'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </Container>

            <div className='md:flex justify-between items-center'>
                <img className='md:w-[24%] mb-[30px] md:mb-0' src="../../src/assets/gallery1.png" alt="" />
                <img className='md:w-[24%] mb-[30px] md:mb-0' src="../../src/assets/gallery2.png" alt="" />
                <img className='md:w-[24%] mb-[30px] md:mb-0' src="../../src/assets/gallery3.png" alt="" />
                <img className='md:w-[24%]' src="../../src/assets/gallery4.png" alt="" />
            </div>
    </div>
  )
}

export default Gallery