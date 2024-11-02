import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'

const Banner = () => {
  return (
    <div className='bg-banner bg-no-repeat bg-center bg-cover py-[258px] text-white'>
        <Container>
            <h1 className='w-[842px] text-[64px] font-primary font-bold mb-[31px]'>We exist since 1975 on the oil and gas industry.</h1>
            <Button>LEARN MORE</Button>
        </Container>
    </div>
  )
}

export default Banner