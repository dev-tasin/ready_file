import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Services = () => {
  return (
        <div>
            <div className='md:flex items-center justify-between'>
                <div className='md:w-1/2 md:pl-[290px] px-[20px] md:px-0'>
                    <h3 className='text-[28px] md:text-[64px] font-primary font-bold '>Our Services</h3>
                    <p className='md:w-[405px] font-primary font-medium text-base text-[#6C6C6C] mb-[40px] md:mb-0 text-justify md:text-start '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='md:w-1/2 bg-services_one bg-no-repeat bg-center bg-cover py-[80px] md:py-[140px] text-white px-[20px] md:px-[116px]'>
                    <h3 className='text-[26px] md:text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
            </div>
            
            <div className='md:flex justify-between'>
                <div className='md:w-1/2 bg-services_two bg-no-repeat bg-center bg-cover py-[80px] md:py-[140px] text-white px-[20px] md:px-[116px]'>
                    <h3 className='text-[26px] md:text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
                <div className='md:w-1/2 bg-services_three bg-no-repeat bg-center bg-cover py-[80px] md:py-[140px] text-white px-[20px] md:px-[116px]'>
                    <h3 className='text-[26px] md:text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
            </div>
            <div className='bg-[#F0F0F0] py-[50px] md:py-[136px]'>
               <Container>
                <div className='md:flex'>
                    <div className='bg-primary px-[20px] md:px-[77px] py-[50px] md:py-[100px] text-center md:text-start'>
                        <h3 className='md:w-[262px] text-[26px] md:text-[36px] font-primary font-bold text-white'>Learn more about our company</h3>
                    </div>
                    <div className='bg-services_four bg-no-repeat bg-center bg-cover text-white px-[100px] md:px-[282px] py-[100px] md:py-[155px] text-center md:text-start'>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
               </Container>
            </div>
        </div>
  )
}

export default Services