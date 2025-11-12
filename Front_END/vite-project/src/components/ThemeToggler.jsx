import React, { useEffect, useState } from 'react'

export default function ThemeToggler() {
    const [theme,setTheme] = useState('light')
    const toggleTheme =()=>{
        const newTheme=theme==='light'?'dark' : 'light'
        setTheme(newTheme)
        document.documentElement.classList.toggle('dark',newTheme==='dark')
        localStorage.setItem('theme',newTheme)
    }

    useEffect (()=>{
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme)
        document.documentElement.classList.toggle("dark",storedTheme==="dark")
    },[])


    return (
    <div className='dark:bg-dark  '>
      <button onClick={toggleTheme}>{theme==='light' ? 'moon icon' : 'sun icon' }</button>
    </div>
  )
}
