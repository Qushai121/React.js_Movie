import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';



const Rekomendasi = (props) => {
    const APIASW = process.env.REACT_APP_API_URL
    const KEYASW = process.env.REACT_APP_API_KEY
    // let [apibaru, setApibaru] = useState([])
   
    const [topRate, setTopRate] = useState([])
    // const [topRate, setTopRate] = useState([])
    const [apiBaru,setApibaru] =useState('top_rated')
    // setApibaru(props.api)
    const judul = {
        top_rated: 'TOP RATED',
        popular: 'POPULAR',
        upcoming: 'UPCOMING',

    }
    useEffect(() => {
        axios.get(`${APIASW}/movie/${apiBaru}?api_key=${KEYASW}`)
            .then((Response) => setTopRate(Response.data.results))
           
    },[apiBaru]);

    const dikit = topRate.slice(0, 8)

    // onClick={setApibaru('popular')}

    const coba = judul[apiBaru]

    
    return (
        <div className='flex'>
            <div className='text-white'>
                <div className='duration-200 hover:w-[20vw] w-[10vw] h-[100vh] mt-3 group text-center'>
                    <div className=''>
                        <div className='flex-col flex mt-3  hover:border border-sky-500' >
                            <button onClick={()=>setApibaru('top_rated')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</button>
                            <button onClick={()=>setApibaru('popular')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >POPULAR</button>
                            <button onClick={()=>setApibaru('upcoming')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >UPCOMING</button>
                            <button onClick={()=>setApibaru('popular')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</button>
                            <button onClick={()=>setApibaru('popular')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' h-full relative'>
                <div className='flex-col flex h-full  '>
                    <h1 className='text-2xl absolute z-40 top-4 left-auto ml-2 font-bold text-white'>{coba} MOVIES</h1>
                    <div className='flex flex-wrap mt-16 ml-8'>


                        {dikit.filter((val)=>{
                            if (props.datacari == ''){
                                return val
                            }
                            else if (val.title.toLowerCase().includes(props.datacari.toLowerCase())){
                                return val
                            }

                        }).map((listTopRate) => {
                            
                            {/* ini contoh Destructing object Best */}
                            const {title,poster_path,overview,release_date,vote_average} = listTopRate
                           
                            {/* ini cara lama */}
                            {/* console.log(listTopRate)
                            const poster = listTopRate.poster_path
                            const judul = listTopRate.title
                            const plot = listTopRate.overview
                            const tanggal = listTopRate.release_date
                            const genre = listTopRate.genre_ids
                            const rating = listTopRate.vote_average */}


                            return (
                                <Card judul={title} tanggal={release_date} rating={vote_average} plot={overview} poster={`https://image.tmdb.org/t/p/original/${poster_path}`} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

// const Sidebar = ({callback}) => {
//     const APIASW = process.env.REACT_APP_API_URL
//     const KEYASW = process.env.REACT_APP_API_KEY


//     return (
//       <div className='text-white'>
//         <div className='duration-200 hover:w-[20vw] w-[10vw] h-[100vh] mt-3 group text-center'>
//           <h1 className='text-3xl text-center' >Genre</h1>
//           <div className=''>
//             <div className='flex-col flex mt-3  hover:border border-sky-500' >
//               <Link onClick={()=>callback('popular')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</Link>
//               <Link onClick={()=>callback('top_rated')} className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'  >TOP RATED</Link>
//               <Link to="/udin" className='my-4 h-9 leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500' >Trending</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>
//               <Link className='my-4 h-full' to="/movie" >Card</Link>

//             </div>

//           </div>
//         </div>
//       </div>
//     )
//   }

export default Rekomendasi