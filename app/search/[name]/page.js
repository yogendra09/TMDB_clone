"use client"
import React, { useEffect, useState } from 'react'
import axios from "@/utils/axios"
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
const page = ({params}) => {
  const API_KEY = "75842d12fc750d152abce067177a2e53";
   const [arr, setarr] = useState([])
   console.log(params);
  const get = async () => {
    try {
      const { data } =  await axios.get(
        `/search/movie?query=${params.name}&api_key=${API_KEY}`
      );   
      setarr([...data.results])
      console.log(arr)
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(()=>{
    get();
   },[page])

  return (
    <div>
      <Nav/>
      <h1 className='text-3xl font-medium mt-5 ml-14'>Search Results For <span className='text-blue-600'>{params.name}</span></h1>
     <div className='flex justify-center flex-wrap gap-5 p-5 '>
      {
        arr && arr.map((m,i)=>{
          return (
            <div key={i} className='h-96 w-44 shadow-2xl rounded-xl flex-shrink-0 overflow-hidden'>
            <div className='overflow-hidden'>
                <Link href={'/movie/'+m.id}>
                <img className='h-64 w-44 object-cover' src={"https://www.themoviedb.org/t/p/w440_and_h660_face/" +m.poster_path} alt="" />

                </Link>
            </div>
            <div className='px-2 mt-3'>
                <h4 className='text-xl font-medium '>{m.title}</h4>
                <h5 className='text-sm font-medium opacity-80 mt-1'>{m.release_date}</h5>
            </div>
         </div>
          )
        })
      }
     </div>
     <Footer/>

    </div>
  )
}

export default page