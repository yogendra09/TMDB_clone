'use client'
import React, { useEffect, useState } from 'react'
import axios from '@/utils/axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
import Nav from '@/components/Nav'

const page = ({params}) => {

     
 const {category} = params;
 const type = 'tv';

 const API_KEY = "75842d12fc750d152abce067177a2e53";
 const [AllMovies, setAllMovies] = useState([])
 const [hasMore, sethasMore] = useState(true)
 const [pageNo, setpageNo] = useState(1)

 const getAllMovies = async ()=>{
    const {data} = await axios.get(`${type}/${category}?language=en-US&page=${pageNo}&api_key=${API_KEY}`)
    data.length ===0 && sethasMore(false)
    setAllMovies([...AllMovies,...data.results]);
    setpageNo(pageNo+1);
    console.log(data,pageNo);

 }
    



 useEffect(()=>{
   getAllMovies()
 },[page,])



  return (
    <>
    <Nav></Nav>
    <h1 className='text-2xl font-medium ml-16 my-5'>{category} tv shows</h1>
    <InfiniteScroll dataLength={AllMovies.length} next={getAllMovies} hasMore={hasMore} endMessage={<p style={{ textAlign: "center" }}>you have seen it all !</p>}>
    <div className='container pl-16 py-5 flex flex-wrap gap-x-8 gap-y-10'>
     {
        AllMovies.length !==0 && AllMovies.map((m,i)=>{
            return (
            <div key={i} className='h-96 w-44 shadow-2xl rounded-xl flex-shrink-0 overflow-hidden'>
            <div className='overflow-hidden'>
                <Link href={`/tv/show/${m.id}`}>
                <img className='h-64 w-44 object-cover' src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" +m.poster_path} alt="" />
                </Link>
            </div>
            <div className='px-2 mt-3'>
                <h4 className='text-xl font-medium '>{m.original_name}</h4>
                <h5 className='text-sm font-medium opacity-80 mt-1'>{m.first_air_date}</h5>
            </div>
         </div>
         )
        })
     }

    </div>
    </InfiniteScroll>

    </>
  )
}

export default page