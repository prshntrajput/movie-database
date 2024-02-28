import React, { useEffect, useState } from 'react'
import Topnav from './templates/Topnav'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from './templates/Dropdown';
import Cards from './templates/Cards';
import axios from '../utils/axios';
import Loader from './Loader';

const Trending = () => {

    const navigate= useNavigate();

    const [trending,setTrending]=useState(null);
    const [category,setCategory]=useState("all");

    const getTrending = async ()=>{
        try {
          const {data} = await axios.get(`/trending/${category}/day`);
          
            setTrending(data.results);
            
        } catch (error) {
            console.log("Error",error)
    }};

   

    useEffect(()=>{
      getTrending();
    },[category])

  return trending ?  (
    <div className='w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className='w-full h-[10vh] flex justify-between  items-center '>
            <Link onClick={(()=>(navigate(-1)))}><i className="ri-arrow-left-line lg:ml-[2%] ml-[0%] text-zinc-400 lg:mx-2 mx-0 text-lg lg:text-2xl"></i></Link>
            <h1 className='text-zinc-400 text-xs lg:mx-[1%] lg:text-3xl font-semibold'>Trending</h1>
            <Topnav/>
           
            <Dropdown title="Category" options={["tv","movie","all"]} func={(e)=>(setCategory(e.target.value),console.log(e))}/>
        </div>
        
            <Cards data={trending} title="movie"/>
        
            
            
          
              
        
    </div>
  ):<Loader/>
}

export default Trending