import React from 'react'

export default function Card({item}) {
  return (
    <>
        <div className='p-3 '>
      <div className="card mt-10 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out dark:border dark:bg-slate-900 dark:text-white bg-base-100 w-96 shadow-lg my-5">
  <figure>
    <img
      src={item.image}
      alt={item.name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline rounded-[10px] border-[1px] cursor-pointer hover:bg-pink-500 hover:text-white duration-200 hover:px-4 hover:py-3">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white duration-200 hover:px-4 hover:py-3">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
