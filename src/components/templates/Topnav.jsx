import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios";
import { Link } from 'react-router-dom';
import Sidenav from './Sidenav';


const Topnav = () => {

    const [query,setQuery] =useState("");

    const [searches,setSearch]=useState([]);

    const getSearches = async ()=>{
        try {

            const {data}= await axios.get(`/search/multi?query=${query}`)
            setSearch(data.results);
            
        } catch (error) {
            console.log("Error",error)
            
        }

    }
    

    useEffect(()=>{
        getSearches();
    },[query])



  return (
    <>
    <div className='w-full h-[8vh] lg:h-[11vh] relative flex justify-start lg:ml-[18%] ml:[0%] items-center'>
        <i className=" text-2xl text-sm lg:text-base mx-4 text-white ri-search-2-line"></i>

        
        <input onChange={(e)=>{
            setQuery(e.target.value) }} value={query}
         className='lg:w-[50%] w-[50vw] lg:p-4 p:0 m:0 border-none text-sm lg:text-xl outline-none rounded-md text-white mx-4 bg-transparent'
          placeholder='search movies, tv shows' type="text" />


          {query.length>0 && <i onClick={()=>(setQuery(""))} className=" text-2xl text-white ri-close-fill"></i> }


          
        <div className='lg:w-[50%] w-[90%] fle bg-white max-h-[40vh] rounded-md top-[100%] absolute bg-zinc-400 overflow-auto'>

            {searches.map((item,index)=>(


            <Link to={`/${item.media_type}/details/${item.id}`} key={index} className=' hover:text-white border-b-2 text-zinc-300 font-bold flex justify-start items-center bg-zinc-700 w-[100%] p-4 rounded-tl-md'>
               <img  className='w-[14vh] h-[10vh] object-cover lg:mr-4 mr-1 rounded-md' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`} alt="" />
               <span className='text-sm lg:text-base'>{item.original_name || item.original_title || item.title}</span>
            </Link>



            ))}

        </div>
    </div>
    
    </>
  )
}

export default Topnav