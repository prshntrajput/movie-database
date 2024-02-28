import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {

    console.log(data)
  return (
    <div className='w-full h-[54vh] rounded object-cover flex flex-col ' style={{
        background:`linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4),rgba(0,0,0,.4)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>
        <span className='lg:mt-[10%] mt-[50%]  lg:m-2'>
        <h1 className='text-white lg:text-4xl font-bold lg:mb-2 lg:mx-4 mx-2 lg:my-4 text-lg'>{data.name || data.original_name || data.original_title || data.title}</h1>
        <p className='lg:w-[40%] w-[80%] text-xs lg:text-base text-white lg:mx-4 mx-2'>{data.overview.slice(0,150)}....<Link className='text-blue-400 text-sm font-bold'>more</Link></p>
        </span>

          <span className='flex gap-2 mx-5'>
                <p className='text-white lg:mx-[-2] mx-[-6] text-sm hidden lg:block'><i className="ri-megaphone-fill text-yellow-400 mx-1"></i>{data.release_date || "No Information"}</p>
            <p className='text-white mx-2 hidden lg:block text-sm'><i className="ri-movie-fill text-yellow-400 mx-2"></i>{data.media_type.toUpperCase()}</p>
        </span>
        <Link className='w-[20vh] gap-1 bg-[#6556CD] lg:mx-6 mx-2 text-white text-sm rounded-md mt-2 h-[8vh] flex justify-center items-center'> <i className="ri-play-circle-line text-2xl"></i>Watch Trailer</Link>
    </div>
  )
}

export default Header

