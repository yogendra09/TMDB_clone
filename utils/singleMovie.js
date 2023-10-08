import axios from './axios'
import React from 'react'
const API_KEY = "75842d12fc750d152abce067177a2e53";

export const singleMovie = async (id)=>{

 try {
const {data} =  await axios.get(`/movie/${id}?api_key=${API_KEY}`);
 return data
 } catch (error) {
  console.log(error);
 }

}


