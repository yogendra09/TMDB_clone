
import React from 'react'
import axios from '@/utils/axios';
const API_KEY = "75842d12fc750d152abce067177a2e53";


export const Trailer = async(id) => {

try {
  const data = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
 const vidArr = data.data.results.find((vid)=>{

  return vid.type === "Trailer"

 });
 return vidArr;



} catch (error) {
  console.log(error);
}

}

