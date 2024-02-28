import React, { useEffect, useState } from 'react'
import Dropdown from './templates/Dropdown'
import Topnav from './templates/Topnav'
import Cards from './templates/Cards'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../utils/axios';
import Loader from './Loader'

const Movies = () => {

        const [movies,setMovies]=useState(null);
    const [category,setCategory]=useState("all");

    const navigate=useNavigate();

    const getMovies = async ()=>{
        try {
          const {data} = await axios.get(`movie/popular`);
          
          
            setMovies(data.results);
            
        } catch (error) {
            console.log("Error",error)
    }};
    console.log(movies)

   

    useEffect(()=>{
      !movies&& getMovies();
    },[category])

  return movies? (
    <div>
            <div className='w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className='w-full h-[10vh] flex justify-between items-center '>
            <Link onClick={(()=>(navigate(-1)))}><i className="ri-arrow-left-line text-zinc-400 mx-2 text-2xl"></i></Link>
            <h1 className='text-zinc-400 text-xs lg:mx-[1%] lg:text-3xl font-semibold'>Movies</h1>
            <Topnav/>
           
           
        </div>
        
           <Cards data={movies} title="movie"/>
        
            
            
          
              
        
    </div>
    </div>
  ):<Loader/>
}

export default Movies
