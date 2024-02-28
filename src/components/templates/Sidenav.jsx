import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidenav = () => {

const [isOpen,setOpen]=useState(true);
const toogle = ()=>{
    setOpen(!isOpen);
}

  return (
    <>

         <div className='lg:w-[20%] w-full  h-full border-r-2 border-zinc-400 bg-[#1F1E24] absolute hidden lg:block lg:static p-3 px-6'>
            <h1>
                <i className=" text-[#6556CD] mx-3 lg:mx-0 lg:text-3xl text-2xl ri-tv-fill"></i>
                <span className='lg:text-2xl text-xl text-white  px-2 mb-4 font-semibold'>Movie Database</span>
            </h1>

            <nav className='flex flex-col text-zinc-400 text-md'>
                <h1 className='text-white text-xl  lg:mt-4 mt-8 mb-2'>New Feeds</h1>
                <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-fire-fill px-1"></i>Trending</Link>
                <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-flashlight-fill px-1"></i>Popular</Link>
                <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-movie-fill px-1"></i>Movies</Link>
                <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-slideshow-3-fill px-1"></i>Tv Shows</Link>
      
            </nav>

            <hr/>

             <nav className='flex flex-col text-zinc-400 text-md'>
                <h1 className='text-white text-md  mt-4 mb-2'>Website Info.</h1>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-information-fill px-1"></i>About</Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-md p-4 px-1"> <i className="ri-contacts-fill px-1"></i>Contact Us</Link>
            </nav>


         </div>
    </>
  )
}

export default Sidenav