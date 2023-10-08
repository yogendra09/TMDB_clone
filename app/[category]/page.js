'use client'
import React, { useState } from 'react'
import Nav from '@/components/Nav'
import AllMovies from '@/components/AllMovies'


const page = ({params}) => {

 
  console.log(params.category);

  return (
    <>
     <Nav></Nav>

     <div className='contianer '>
            <h1 className='text-3xl font-medium pl-16 py-3'>{params.category.split("_").join('').toUpperCase()}</h1>

           <AllMovies type='movie' category={params.category}></AllMovies>

 
     </div>



    </>
  )
}

export default page