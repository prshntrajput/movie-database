import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data,title }) => {
  return (
    <div className='flex gap-4 min-w-full flex-wrap p-4 '>
      {data.map((item, index) => (
        <div key={index} className='w-full h-[70vh] rounded-md object-cover flex flex-col ' style={{
          background: `linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.4),rgba(0,0,0,.4)),url(https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <span className='lg:mt-[16%] mt-[108%]  lg:m-2'>
            <h1 className='text-white text-lg lg:text-4xl font-bold mb-2 mx-4 lg:my-4 my-0'>{item.name || item.original_name || item.original_title || item.title}</h1>
            <p className='lg:w-[40%] w-[50%] text-xs lg:text-base hidden lg:block text-white mx-4'>{item.overview.slice(0,150) ||"NO INFORMATION"}....<Link className='text-blue-400 text-sm font-bold'>more</Link></p>
          </span>

          <span className='flex gap-2 mx-5'>
            <p className='text-white text-sm hidden lg:block '><i className="ri-megaphone-fill text-yellow-400 mx-0 lg:mx-1"></i>{item.release_date || "No Information"}</p>
            <p className='text-white mx-2  hidden lg:block mt-[2%] lg:mt-[0] text-sm '><i className="ri-movie-fill text-yellow-400 mx-2"></i>{item.media_type || "No Info"}</p>
          </span>
          <span className='flex'>
          <Link className='w-[20vh] gap-1 bg-[#6556CD] lg:mx-6 mx-2 text-white text-sm rounded-md mt-2 h-[8vh] flex justify-center items-center'> <i className="ri-play-circle-line text-2xl"></i>Watch Trailer</Link>
          <Link to={`/${title}/details/${item.id}`} className='w-[20vh] gap-1 bg-[#6556CD] lg:mx-6 mx-2 text-white text-sm rounded-md mt-2 h-[8vh] flex justify-center items-center'> <i className="ri-information-line text-2xl"></i>Details</Link>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Cards