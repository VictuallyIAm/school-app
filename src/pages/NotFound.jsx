import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center">
      <p className="text-white text-center text-6xl">
        It seems we don't have this here.
      </p>
      <Link to="/school-app">
        <button className="text-center text-lg bg-sky-500 border-2 rounded my-12 px-12 py-4">
          Go back
        </button>
      </Link>
    </div>
  )
}

export default NotFound
