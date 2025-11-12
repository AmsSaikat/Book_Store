import React from 'react'
import BannerPic from '/Banner.jpg'

export default function Banner() {
  return (
    <>
      <div className='max-w-full container mx-auto md:px-20 px-5 flex flex-col md:flex-row my-10'>


        {/*Left side*/}
        <div className='order-2 md:order-1 w-full md:w-1/2 '>
          <div className='space-y-12 mt-12 md:mt-32'>
            <h1 className='text-4xl font-bold'>
              Hello,welcome here  to learn something <span className='text-pink-500'>new everyday!!!</span>
           </h1>
           <p className='text-xl opacity-80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis! Mollitia, porro cumque blanditiis officia facilis omnis totam quae in sed minima? Dolore nisi, perspiciatis eveniet eligendi provident accusantium harum.
           </p>

           <label className="input validator mb-0">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
          </div>

          <button className="btn btn-secondary mt-3">Secondary</button>
        </div>


        {/*Right side*/}
        <div className='order-1 w-full md:w-1/2'>
          <img src={BannerPic} alt="" className='h-9/12 w-full' />
        </div>
      </div>

    </>
  )
}
