import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-primary text-base font-primary font-semibold py-[10px] px-[15px] md:py-[14px] md:px-[30px] border-2 border-transparent hover:border-white duration-500'>
        {children}
    </button>
  )
}

export default Button