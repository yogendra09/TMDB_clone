"use client"
import React, { useEffect, useState } from 'react'
import axios from '@/utils/axios'
const LatestTrailer = () => {

  const [latest, setlatest] = useState([])
  const API_KEY = "75842d12fc750d152abce067177a2e53";

  const get = async()=>{


    try {
      const {data} =await axios.get(`/trending/tv/day?api_key=${API_KEY}`);
      setlatest(data.results);
      console.log(data.results)
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    get()
  },[])

  return (
    <>
      <h1 className='mt-3 text-3xl font-medium ml-6 '>Latest Trailer</h1>
    <div  className='card-container h-96 flex items-center gap-8 overflow-x-auto px-8'>
         {latest.map((l)=>{
          return (
            <div>
            <div className='cd h-56 w-80 bg-cyan-200 flex-shrink-0 rounded-lg relative overflow-hidden flex items-center justify-center '>
            <img className=' h-full w-full object-cover' src={ "https://image.tmdb.org/t/p/original/" + l.backdrop_path} alt="" />
            <img className='cd absolute invert h-20 ' src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg" alt="" />
            </div>
            <div className='mt-4 '>
              <h4 className='text-lg font-medium'>{l.original_name}</h4>
            </div>
            </div>
            )
         })}
    <div>


    </div>

    </div>
    </>
  )
}

export default LatestTrailer