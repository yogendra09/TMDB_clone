'use client'
import React from 'react'
import axios from '@/utils/axios';
const API_KEY = "75842d12fc750d152abce067177a2e53";


export const TvShowTrailer = async(id) => {

try {
  const {data} = await axios.get(`/tv/${id}/videos?api_key=${API_KEY}`)
  const key = data.results.map((d)=> d.key);
  console.log(data)
  return key[1];
 
 }catch (error) {
  console.log(error);
}

}

