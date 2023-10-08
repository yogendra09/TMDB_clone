"use client";
import ShowMovies from "@/components/ShowMovies";
import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LatestTrailer from "@/components/LatestTrailer";
import { useRouter } from "next/navigation";


const page = () => {
  const API_KEY = "75842d12fc750d152abce067177a2e53";
  const [PopularMovies, setPopularMovies] = useState([]);
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [search, setsearch] = useState("")
  const router = useRouter()
  const getTrendingMovies = async () => {
    try {
      const { data } = await await axios.get(
        `/trending/movie/day?api_key=${API_KEY}`
      );
      // console.log(data.results);
      setTrendingMovies([...data.results]);
    } catch (error) {
      console.log(error);
    }
  };

 const SubmitHandler = async(e)=>{
  e.preventDefault();
  router.push(`search/${search}`);

 }

  const getPopularMovies = async () => {
    try {
      const { data } = await await axios.get(
        `/movie/popular?api_key=${API_KEY}`
      );
      // console.log(data.results);
      setPopularMovies([...data.results]);
    } catch (error) {
      console.log(error);
    }
  };


   



  useEffect(() => {
   getTrendingMovies()
    getPopularMovies();
  }, []);

  // console.log(Movies);

  return (
    <>
     <Nav></Nav>

      <div className="h-80 bg-slate-600 py-16 px-16 ov">
        <h1 className="text-cyan-50 text-5xl font-bold">Welcome.</h1>
        <h2 className="text-cyan-50 text-3xl font-bold mt-1">
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <form onSubmit={SubmitHandler} className="mt-16">
          <input
            onChange={(e)=> setsearch(e.target.value)}
            placeholder="Search for movies, tv show, person....."
            className="h-14 w-11/12 rounded-3xl px-5 border-none outline-none"
            type="text"
          />
          <button type="submit" className="btn text-xl font-bold py-3.5 px-8 rounded-full">
            search
          </button>
        </form>
      </div>

      <div>
        <h1 className="text-3xl font-semibold m-5">Trending</h1>
        <ShowMovies>{TrendingMovies}</ShowMovies>
      </div>

       <div>
        <LatestTrailer></LatestTrailer>
       </div>

      <div>
        <h1 className="text-3xl font-semibold m-5">What's Popular</h1>
        <ShowMovies>{PopularMovies}</ShowMovies>
      </div>

      <Footer></Footer>
    </>
  );
};

export default page;
