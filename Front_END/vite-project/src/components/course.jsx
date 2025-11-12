import React, { useEffect, useState } from 'react'
import Card from './card'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async ()=>{
      try {
        const res= await axios.get("http://localhost:4000/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook()
  },[])
  return (
    <>
    <div className='w-full md:px-20 px-5'>
      <div className='mt-30 text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here :)</span></h1>
        <p className='mt-15 px-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus vel, nemo ex, dignissimos itaque dolore enim quo libero beatae dolores voluptatem vitae expedita similique pariatur. Debitis doloremque unde temporibus praesentium.</p>
        <Link to={'/'}>
          <button className='bg-pink-500 hover:bg-pink-700 duration-300 rounded-md border-1 px-2 py-1 mt-7 font-bold text-white'>Back</button>
        </Link>
      </div>

      <div className='container mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item)=>(
            <Card key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}
