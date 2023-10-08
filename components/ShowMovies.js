"use client";
import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Link from "next/link";

const ShowMovies = ({ children }) => {
  const [Movies, setMovies] = useState([]);
  // console.log(children);

  return (
    <>
      <div className="bsg card-container flex gap-5 overflow-y-auto py-6 px-5 overscroll-x-none rounded-lg">
        {children.length !== 0 &&
          children.map((m, index) => {
            return (
              <div
                key={index}
                className=".card w-44 h-96 rounded-xl overflow-hidden flex-shrink-0"
              >
                <div className="h-64  w-full relative ">
                  <Link href={"/movie/" + m.id}>
                    {" "}
                    <img
                      className="img rounded-md"
                      src={
                        "https://www.themoviedb.org/t/p/w440_and_h660_face/" + m.backdrop_path
                      }
                      alt=""
                    />{" "}
                  </Link>{" "}
                </div>
               <div className="px-3">
               <Link href={"/movie/" + m.id}>
                  {" "}
                  <h4 className="text-xl font-bold mt-4">
                    {m.original_title}
                  </h4>{" "}
                </Link>
                <h6 className="font-semibold opacity-80">{m.release_date}</h6>
               </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShowMovies;
