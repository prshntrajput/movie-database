import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { asyncloadmovie, removemovie } from '../store/actions/movieActions';
import {Link, useNavigate, useParams} from "react-router-dom"
import Loader from "./Loader"
const Mdetails = () => {

    const {id}= useParams();
    const dispatch =useDispatch(); 
    const {info}=useSelector((state)=>state.movie)
    const navigate=useNavigate();


    useEffect(()=>{
        dispatch(asyncloadmovie(id))
        return ()=>{
          dispatch(removemovie())
        }
    },[])
  return info ? ( <>

    <div className='w-screen h-screen px-[10%]'  style={{
        background:`linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.7),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.profile_path})`,
        backgroundPosition:"center",
        backgroundSize:"cover"
    }}>

      <nav className='w-full h-[5vh]'>
        <Link onClick={(()=>(navigate(-1)))}><i className="ri-arrow-left-line text-zinc-400 mx-2 text-2xl"></i></Link>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        </nav>
         
         <div className="flex">
        <div className='w-[20vw] h-[95vh] flex'>
          <div className="mt-2">
           <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] w-[16vw] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`} alt=""/>
                

                <h1 className='text-white mt-2 text-sm'>Available on Platform</h1>
           <div className='mt-3 flex gap-9'>

            {info.watchproviders && info.watchproviders.buy && info.watchproviders.buy.map((w)=>(
              
              <img className='w-[7vh] rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path || w.logo_path}`} alt=""/>
            ))}

            </div>

            <div>
                  
            {info.watchproviders && info.watchproviders.flatrate && info.watchproviders.flatrate.map((w)=>(
              
              <img className='w-[7vh] rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path || w.logo_path}`} alt=""/>
            ))}

            </div>


             <h1 className='text-white mt-2 text-sm'>Available on Rent</h1>
            <div className='flex mt-3 gap-3'>
              
            {info.watchproviders && info.watchproviders.rent && info.watchproviders.rent.map((w)=>(
              
              <img className='w-[7vh] rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path || w.logo_path}`} alt=""/>
            ))}
           </div>
           </div>
        </div>

        <div className="w-[80vw] h-[95vh]">

          <div className="text-white mx-[10%] text-5xl mt-2 font-semibold">{info.detail.original_title}
               <p className="text-xl mt-4 text-white font-light">{info.detail.overview}</p>
               <div className='flex mt-6'>
                <i class="ri-game-fill text-2xl text-yellow-600"></i>
                {info.detail.genres.map((g)=>(<h1 className='text-blue-500 text-base mx-2'>{g.name}</h1>))}
                <div className='flex mx-14'>
                <i class="ri-speak-fill text-yellow-600 text-2xl"></i>
                {info.detail.spoken_languages.map((g)=>(<h1 className='text-blue-500 text-base mx-2'>{g.name}</h1>))}
                </div>
                </div>    
              <div className='flex mt-4'>
                  <i class="ri-megaphone-fill text-2xl text-yellow-600"></i> 
                  <h1 className='text-base text-blue-500 mx-2'>{info.detail.release_date || "No info"}</h1>             
              </div>     
          </div>
        </div>

          
        </div>

    </div>
    </>
  ) : <Loader/>
}

export default Mdetails