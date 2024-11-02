import React from 'react'
import Container from '../Container/Container'

const Gallery = () => {
  return (
    <div className='pt-[78px] pb-[28px] '>
            <Container>
                <div className='flex justify-between items-center mb-[100px]'>
                    <h2 className='w-[289px] text-[48px] font-primary font-bold leading-[72px]'>The biggest supplier on the country</h2>
                    <p className='w-[651px] text-base font-primary font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </Container>

            <div className='flex justify-between items-center'>
                <img className='w-[24%]' src="../../src/assets/gallery1.png" alt="" />
                <img className='w-[24%]' src="../../src/assets/gallery2.png" alt="" />
                <img className='w-[24%]' src="../../src/assets/gallery3.png" alt="" />
                <img className='w-[24%]' src="../../src/assets/gallery4.png" alt="" />
            </div>
    </div>
  )
}

export default Gallery