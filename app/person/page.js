"use client";
import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import Nav from "@/components/Nav";

const page = () => {
  const API_KEY = "75842d12fc750d152abce067177a2e53";
  const [peoples, setpeoples] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [pageNo, setpageNo] = useState(1);
  
  const getPeoples = async () => {
    const { data } = await axios.get(
      `/trending/person/day?page=${pageNo}&api_key=${API_KEY}`
    );
    data.length === 0 && sethasMore(false);
    setpeoples([...peoples, ...data.results]);
    setpageNo(pageNo+1);
    console.log(pageNo);
  };

  useEffect(() => {
    getPeoples();
  }, [page]);

  return (
    <>
      
      <Nav></Nav>

      <div className="px-11">
        <h1 className="text-3xl font-medium mb-5 mt-5">Popular People</h1>

        <InfiniteScroll
          dataLength={peoples.length}
          next={getPeoples}
          hasMore={hasMore}
          endMessage={
            <p style={{ textAlign: "center" }}>you have seen it all !</p>
          }
        >
          <div className="flex flex-wrap gap-2 gap-y-10 mt-3">
            {peoples.length !== 0 &&
              peoples.map((p, i) => {
                return (
                  <div key={i} className="shrink-0">
                    <img
                      className="h-64 w-64 object-cover"
                      src={
                        `https://www.themoviedb.org/t/p/w470_and_h470_face/` +
                        p.profile_path
                      }
                      alt="not found"
                    />
                    <div className="px-2">
                      <h3 className="text-xl font-medium w-60">{p.name}</h3>
                      <h5 className="text-lg opacity-80 w-60 h-6 overflow-y-hidden  overflow-x-hidden block mt-0">
                        {p.known_for.map((k) => {
                          return k.original_title + ",";
                        })}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default page;
