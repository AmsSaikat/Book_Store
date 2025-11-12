import React from 'react'
import { useAuth } from '../contex/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const [authUser, setAuthUser] = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    try {
      // Remove user from localStorage
      localStorage.removeItem("user")

      // Clear context
      setAuthUser(undefined)

      // Success toast
      toast.success("Logged out successfully!")

      // Redirect to home or login
      navigate("/")

    } catch (error) {
      console.error("Logout error:", error)
      toast.error("Something went wrong during logout!")
    }
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="btn dark:bg-slate-700 dark:text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
      >
        Logout
      </button>
    </div>
  )
}

