import React from 'react'
import loading from "/loader.gif";

const Loader = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <img className='h-[50vh] ' src={loading} alt="" />
    </div>
  )
}

export default Loader