import React from 'react'
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import Header from './templates/Header';
import axios from '.././utils/axios';
import { useState, useEffect } from 'react';
import HorizontalCards from './templates/HorizontalCards';
import Loader from './Loader';



const Home = () => {

    document.title= "Movie Player | HomePage";

        const [wallpaper,setWallpaper]=useState(null);
        const [category,setCategory]=useState("all");

    const getWallpaper = async ()=>{
        try {

            const {data}= await axios.get(`/trending/all/day`);
            let randomdata = data.results[(Math.random()* data.results.length).toFixed()];
            setWallpaper(randomdata);
            
        } catch (error) {
            console.log("Error",error)
            
        }

    };
       
    //trending section
            const [trending,setTrending]=useState(null);

    const getTrending = async ()=>{
        try {

            const {data}= await axios.get(`/trending/${category}/day`);
           
            setTrending(data.results);
            
        } catch (error) {
            console.log("Error",error)
            
        }

    };
     
    console.log(trending)

    useEffect(()=>{
        !wallpaper && getWallpaper();
         getTrending();
    },[category]);

    function toogle(){
        const [status,setStatus]=useState(false);
        return(
            <div>
                {status? <Sidenav/>:null}
                <button onClick={()=>setStatus(!status)}>toogle</button>
            </div>
            
        )
    }


  return wallpaper && trending ? (
    <>
    <Sidenav/>
     
    <div className=' lg:w-[80%] w-full h-full overflow-auto overflow-x-hidden'>
        <div className='flex justify-center items-center'>
                <i className=" text-[#6556CD] lg:hidden text-xl ml-[8%] mt-[2%] ri-tv-fill"></i>
                <span className='text-xl lg:hidden text-white mt-[2%]  px-2 font-semibold'>Movie Player</span>
        </div>
        <Topnav/>
        <Header data={wallpaper}/>
        <HorizontalCards data={trending} func={(e)=>(setCategory(e.target.value))}/>
    </div>
    </>
  ):(<Loader/>)
}

export default Home