import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'

const Services = () => {
  return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='w-1/2 pl-[290px]'>
                    <h3 className='text-[64px] font-primary font-bold'>Our Services</h3>
                    <p className='w-[405px] font-primary font-medium text-base text-[#6C6C6C]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='w-1/2 bg-services_one bg-no-repeat bg-center bg-cover py-[140px] text-white px-[116px]'>
                    <h3 className='text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
            </div>
            
            <div className='flex justify-between'>
                <div className='w-1/2 bg-services_two bg-no-repeat bg-center bg-cover py-[140px] text-white px-[116px]'>
                    <h3 className='text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
                <div className='w-1/2 bg-services_three bg-no-repeat bg-center bg-cover py-[140px] text-white px-[116px]'>
                    <h3 className='text-[36px] font-primary font-bold text-white mb-5'>Modern natural oil and gas refineries.</h3>
                    <Button>Learn More</Button>
                </div>
            </div>
            <div className='bg-[#F0F0F0] py-[136px]'>
               <Container>
                <div className='flex'>
                    <div className='bg-primary px-[77px] py-[100px]'>
                        <h3 className='w-[262px] text-[36px] font-primary font-bold text-white'>Learn more about our company</h3>
                    </div>
                    <div className='bg-services_four bg-no-repeat bg-center bg-cover text-white px-[282px] py-[155px]'>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
               </Container>
            </div>
        </div>
  )
}

export default Services