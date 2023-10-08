'use client'
import React, { useState } from 'react'
import Nav from '@/components/Nav'
import AllMovies from '@/components/AllMovies'


const page = () => {

 
  

  return (
    <>
     <Nav></Nav>

     <div className='contianer '>
            <h1 className='text-3xl font-medium pl-16 py-3'>Popular Movies</h1>

           <AllMovies type='movie' category='popular'></AllMovies>

 
     </div>



    </>
  )
}

export default page