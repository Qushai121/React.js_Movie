import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  // Contoh Penggunaan Package Slick
  return (
    <div
      className={className}
      style={{ ...style, display:"block",zIndex:40,opacity:0,width:'30px',height:'50vh'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",zIndex:40,opacity:0,width:'30px',height:'50vh' }}
      onClick={onClick}
    >
      
    </div>
  );
}

const Sliders = () => {
  const APIASW = process.env.REACT_APP_API_URL
  const KEYASW = process.env.REACT_APP_API_KEY

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 7000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };

  

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    axios.get(`${APIASW}/movie/popular?api_key=${KEYASW}`)
      .then((Response) => setPopular(Response.data.results))
  }, [])
  const dikit = popular.slice(0, 3)


  return (
    <div className='w-[95vw] ml-10'>
      <FontAwesomeIcon icon={faArrowLeft} className='text-white animate-pulse z-30 left-3 top-[43vh] text-2xl absolute ' />
      <FontAwesomeIcon icon={faArrowRight} className='text-white animate-pulse z-30 text-2xl right-4 top-[43vh]  absolute' />
      <Slider {...settings}>
        {dikit.map((populars) => {
          const genre = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Science Fiction",
            10770: "TV Movie",
            53: "Thriller",
            10752: "War",
            37: "Western"
          }
          const listId = populars.genre_ids

          return (
            <div className='bg-slate-900 my-3 mr-24 ml-20 relative pl-[30vw] '>

              <div className='w-96 z-20 absolute top-20 left-20 text-slate-100' >
                <h1 className='text-3xl mb-6 '>{populars.title}</h1>
                {/* <h1 className='float-left mr-1' >{populars.original_language}</h1> */}
                <h1 className='mb-5' >{populars.release_date}</h1>
                <h1 className='mb-5'>{populars.overview}</h1>
                <div className='flex w-96 absolute right-10' >
                  {listId.map((listgenre) => {
                    const genres = genre[listgenre]
                    return (

                      <h1 className='mx-4 hover:bg-sky-900' >{genres}</h1>
                    )
                  })}
                </div>
              </div>
              <div className='h-auto w-[60vw] mr-10'>
                <Hasil
                  gambar={`https://image.tmdb.org/t/p/original/${populars.backdrop_path}`} />
              </div>

            </div>
          )
        })}
      </Slider>
    </div>
  )
}
// ini child components
function Hasil(props) {
  return (
    <>
      <div className='relative' >
        <div className='bg-gradient-to-r from-slate-900 h-full w-full z-10  absolute' ></div>

        <img className='rounded-r-lg' src={props.gambar} />
      </div>
    </>
  )
}

// function Jenis(listgenre) {
//   return (
//     <>
//       <h1>{listgenre}</h1>
//     </>
//   )
// }

export default Sliders