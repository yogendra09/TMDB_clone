import React from 'react'
import Link from "next/link";
const Nav = () => {
  return (
    <>
        
        <div className="bg-blue-950 flex justify-between items-center py-5">
        <div className="flex justify-between items-center gap-8 align-middle  px-6">
         <Link href='/'>
         <img
            className="h-5 mt-1"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt=""
          />
         </Link>
          <div className="drop h-10 flex items-center">
            <h3 className="text-cyan-50  font-semibold">Movies</h3>
            <div className="movies-drop bg-white w-40 mt-3 rounded-md pl-5 pb-5">
              <Link className=" text-black  font-semibold mt-2" href="/movie">
                Popular
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/now_playing">
                Now Playing
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/upcoming">
                Upcoming
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/top_rated">
                Top Rated
              </Link>
            </div>
          </div>
          <div className="drop h-10 flex items-center">
            <Link className="text-cyan-50  font-semibold" href="/tv">
              TvShows
            </Link>
            <div className="movies-drop bg-white w-40 mt-3 rounded-md pl-5 pb-5">
              <Link className=" text-black  font-semibold mt-2" href="/tv/popular">
                Popular
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/tv/airing_today">
                Ariving Today
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/tv/on_the_air">
                On Tv
              </Link>
              <Link className=" text-black  font-semibold mt-2" href="/tv/top_rated">
                Top Rated
              </Link>
            </div>
          </div>
          <div className="drop h-10 flex items-center">
            <h3 className="text-cyan-50  font-semibold" href="/people">
              People
            </h3>
            <div className="movies-drop bg-white w-40 mt-3 rounded-md pl-5 pb-3">
              <Link className=" text-black  font-semibold mt-2" href="/person">
                Popular people
              </Link>
            </div>
          </div>

          <h3 className="text-cyan-50  font-semibold">More</h3>
        </div>

        <div className="flex justify-end gap-8 px-16 w-1/3 ">
          <div className="plus"></div>
          <div className="border-2 text-cyan-100 h-7 px-1 text-xs py-1">EN</div>
          <img
            className="h-7 invert"
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-441-bell-9cd2af257b98c4af3460078777d8e38a5e12bca89704eeac2f39273afcbd06ff.svg"
            alt=""
          />
          <div className="h-8 w-8 rounded-full bg-fuchsia-500">
            <h4 className="text-white text-center py-1">Y</h4>
          </div>
          <img
            className="h-7"
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt=""
          />
        </div>
      </div>


    </>
  )
}

export default Nav