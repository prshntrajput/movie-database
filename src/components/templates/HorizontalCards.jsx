import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const HorizontalCards = ({data,func}) => {
    console.log(data)
  return (
    <>
    <div className='text-white overflow-auto w-full h-[35vh]  p-4'>

        <div className='mb-2 flex justify-between'>
           <h1 className='lg:text-2xl lg:mb-1 text-zinc-400 text-lg font-semibold'>Trending</h1>
           <Dropdown title="Filter" options={["tv","movie","all"]} func={func} />
        </div>
    

           <div className='flex overflow-y-hidden overflow-auto w-[100%] lg:flex-nowrap flex-wrap lg:gap-4 gap-20 '>
        {data.map((item,index)=>(
       
            <div key={index} className='lg:min-w-[14%] min-w-28% lg:min-h-[40vh] h-[20vh] shadow-lg bg-zinc-700  rounded-md'>
                <span className='object-cover rounded w-full h-[20%]'>
                <img className='rounded-md' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`} alt=""/>
                </span>
                <h1 className=' text-center w-full mt-1 text-zinc-400 font-bold'>{item.name ||item.original_name || item.original_title || item.title}</h1>

                 <p className=" mb-1 text-zinc-200 mt-2 text-xs hidden lg:block mx-5">{item.overview.slice(0,50)}....<Link className='text-blue-400 text-sm font-bold'>more</Link></p>
            </div>
          ))}
          </div>
         
        
    </div>
    </>
  )
}

export default HorizontalCards