import React from 'react';
import Rekomendasi from './Rekomendasi';

const Card = ({poster,judul,rating,plot}) => {
  

  return (
    <div className='text-center group relative' >
      <div className=' flex-col group mx-1 mt-2 w-56 relative'>
        <img className='relative group' src={poster} />
        <div className='group-hover:bg-gradient-to-bl from-black opacity-0 group-hover:opacity-100 duration-700 top-0 h-full w-full absolute'>
        <div>
          {/* salah */}
        </div>
          <h1 className='  group-hover:translate-y-0 top-7 translate-y-24 group-hover:opacity-100 opacity-0 block overflow-hidden duration-300 w-full text-white absolute left-0 text-xl text-center'>{judul}</h1>
          <h1 className='absolute group-hover:translate-y-12 translate-y-24  text-white group-hover:opacity-100 opacity-0 duration-300 overflow-y-scroll h-11 z-40 scrollbar-hide top-14 w-full mx-auto' >{rating}</h1>
          <h1 className='absolute group-hover:translate-y-12 translate-y-36  text-white group-hover:opacity-100 opacity-0 duration-300 overflow-y-scroll h-44 z-40 scrollbar-hide top-24 text-sm text-left mx-2'>{plot}</h1>
        </div>
      </div>
    </div>
  )
}

export default Card