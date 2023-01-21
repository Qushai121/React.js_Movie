import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({callback}) => {
  const APIASW = process.env.REACT_APP_API_URL
  const KEYASW = process.env.REACT_APP_API_KEY


  return (
    <div className='text-white'>
      <div className='duration-200 hover:w-[20vw] w-[10vw] h-[100vh] mt-3 group text-center'>
        <h1 className='text-3xl text-center' >Genre</h1>
        <div className=''>
          <div className='flex-col flex mt-3  hover:border border-sky-500' >
            <button onClick={()=>callback('popular')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</button>
            <button onClick={()=>callback('top_rated')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</button>
            <button to="/udin" className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500' >Trending</button>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>
            <Link className='my-4 h-full' to="/movie" >Card</Link>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Sidebar