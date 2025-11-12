import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './card'
import axios from 'axios';

export default function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async ()=>{
      try {
        const res=await axios.get("http://localhost:4000/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log("Error: ",error)
      }
    };
    getBook()
  },[])

  const filterData=book?.filter((data)=>data.category==="Free")
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
        <div className='w-full md:px-20 px-5'>
                <div className=''>
        <h1 className='font-semibold text-xl pb-2 '>Free Offered Books</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi hic enim consectetur ullam ex nihil! Atque, fugit veniam animi commodi eum consequatur fugiat, nisi, laborum consequuntur porro repellat architecto.</p>
    </div>

    <div>
        <div className="slider-container">
      <Slider {...settings}>
        {
            filterData.map((item)=>(
                <Cards item={item} key={item._id}/>
            ))
        }
      </Slider>
    </div>
    </div> 
        </div>
    </>
  )
}
