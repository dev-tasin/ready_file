import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'

const Banner = () => {
  return (
    <div className='bg-banner bg-no-repeat bg-center bg-cover py-[80px] md:py-[258px] text-white px-[20px] md:px-0'>
        <Container>
            <h1 className='md:w-[842px] text-[28px] md:text-[64px] font-primary font-bold mb-[31px]'>We exist since 1975 on the oil and gas industry.</h1>
            <Button>LEARN MORE</Button>
        </Container>
    </div>
  )
}

export default Banner