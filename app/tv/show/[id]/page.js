"use client"
import Nav from '@/components/Nav';
import axios from '@/utils/axios'
import React, { useEffect,useState } from 'react'
import {TvShowTrailer} from '@/components/TvTrailer'


const page = ({params}) => {

    const API_KEY = "75842d12fc750d152abce067177a2e53";
   const [data, setdata] = useState({})
    const [showTrailer, setshowTrailer] = useState(false)
    const [res, setres] = useState('')
    const getTvShow = async ()=>{
        const {data} =  await axios.get(`/tv/${params.id}?api_key=${API_KEY}`);
       setdata(data)
       const string = await TvShowTrailer(data.id)
       setres(string);     
      //  console.log(string)
       
    }

   const playTrailer = ()=>{
    setshowTrailer(true);
   }

   const hideTrailer = ()=>{
   setshowTrailer(false);
   } 

  useEffect(()=>{
    getTvShow()
  },[]);

  return (
    <>
    <div className="h-full">
        <Nav></Nav>

        <div className="h-full w-full  absolute top-0 z-[-1] left-0">
          <img
            className="h-full w-full object-cover"
            src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
            alt=""
          />
        </div>

        <div
          style={{ height: "90.8vh" }}
          className="p-10 flex gap-10  bg-slate-950/70"
        >
          <div className="relative w-1/4">
            <div className="h-3/4 w-full rounded-xl ">
              <img
                className="emg"
                src={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
                  data.backdrop_path
                }
                alt=""
              />

              <div className="bg-cyan-950 rounded-b-md px-5 py-5">
                <h4 className="text-white">Available to Rent or Buy</h4>
                <h5 className="text-white">Watch Now</h5>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-full px-2">
            <h1 className="w-full text-white text-5xl mb-4">{data.name}  </h1>
            <h4 className="text-white text-lg">{data.first_air_date}  </h4>
            <div className="text-white text-sm font-medium flex my-4">
              <div className="h-12 w-12 rounded-full flex items-center justify-center outline  outline-4 outline-green-500 mr-5">
                {Math.floor(data.popularity)}%
              </div>
              {showTrailer === true ? (<>
                <iframe
                allow="autoplay; encrypted-media"
                  className="absolute z-[999] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
                  width="1300"
                  height="640"
                  src={"https://www.youtube.com/embed/" + res}
                  frameborder="0"
                  allowfullscreen
                >
                  {" "}
                </iframe>
            <button className="text-white absolute top-10 z-[9999] right-10 text-3xl font-thin" onClick={hideTrailer}>X</button></>)   : (
                <button
                  onClick={playTrailer}
                  className="flex items-center text-white text-xl  rounded-t-lg"
                >
                  <img
                    className="h-6 invert"
                    src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg"
                    alt=""
                  />
                  Play Trailer
                </button>
              )}
            </div>
            <h3 className="text-2xl text-white opacity-80">{data.tagline}</h3>
            <h2 className="text-white text-xl mt-5">Overview</h2>
            <p className="text-white text-lg">{data.overview}</p>
            <p className="text-white text-lg">{}</p>

          </div>
        </div>
      </div>

    </>
  )
}

export default page