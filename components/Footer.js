import React from 'react'

const Footer = () => {
  return (
    <div className="footer h-96 bg-blue-950 flex gap-10 items-center justify-center">

          <div className="flex-col">
         <img className="h-28 mb-5" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />

           <button className="border-none outline-none bg-white text-blue-700 font-medium text-xl px-5 py-2 rounded-md mt-4"> Hi yogendra!</button>
           
          </div>

          <div className="cont flex items-start gap-12">
          <div>
            <h3 className="text-2xl text-white font-medium mb-2">THE BASICS</h3>
             <h4 className="text-lg text-white font-normal">About TMDB</h4>
             <h4 className="text-lg text-white font-normal">Contact Us</h4>
             <h4 className="text-lg text-white font-normal">Support Forums</h4>
             <h4 className="text-lg text-white font-normal">API</h4>
             <h4 className="text-lg text-white font-normal">System Status</h4>
          </div>
          <div>
            <h3 className="text-2xl text-white font-medium mb-2">GET INVOLVED</h3>
             <h4 className="text-lg text-white font-normal">Contribution Bible</h4>
             <h4 className="text-lg text-white font-normal">Add New Movie</h4>
             <h4 className="text-lg text-white font-normal">Add New TV Show</h4>
          </div>
          <div>
            <h3 className="text-2xl text-white font-medium mb-2">COMMUNITY</h3>
             <h4 className="text-lg text-white font-normal">Guidelines</h4>
             <h4 className="text-lg text-white font-normal">Discusion</h4>
             <h4 className="text-lg text-white font-normal">Leaderboard</h4>
             <h4 className="text-lg text-white font-normal">Twitter</h4>
          </div>
          <div>
            <h3 className="text-2xl text-white font-medium mb-2">LEGAL</h3>
             <h4 className="text-lg text-white font-normal">Terms of Use</h4>
             <h4 className="text-lg text-white font-normal">API Terms of Use</h4>
             <h4 className="text-lg text-white font-normal">Privacy Policy</h4>
             <h4 className="text-lg text-white font-normal">DMCA Takedown Request</h4>
          </div>
          </div>

 
      </div>
  )
}

export default Footer