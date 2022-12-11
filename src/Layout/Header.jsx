import React from 'react'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bob from '../data/bob.jpg'

const Header = () => {
  return (
    <>
      <div className="flex static opacity-100 bg-black   p-1">
        <div className="m-1">
          <Link to="/">
            <span className="flex text-purple-500">
              <img src={bob} alt="logo" className="h-12 w-12" />
              <p className="mx-3 text-3xl my-1 font-bold">Koremoon</p>
            </span>
          </Link>
        </div>
        <div className=" w-screen flex justify-center">
          <nav className=" w-full text-lg text-gray-100">
            <div className=" flex flex-row justify-center align-middle mx-3">
              <Link
                to="/"
                className=" border-r-2 border-l-2 p-2  px-4 border-r-slate-50 hover:text-slate-500"
              >
                Home
              </Link>
              <Link
                to="/tutors"
                className=" border-r-2  p-2  px-4 border-r-slate-50 hover:text-slate-500"
              >
                Teachers
              </Link>
              <Link
                to="courses"
                className=" border-r-2  p-2 px-4 border-r-slate-50  hover:text-slate-500"
              >
                Courses
              </Link>
              <Link
                to="contact"
                className=" border-r-2  p-2 px-4 border-r-slate-50  hover:text-slate-500"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
        <div className="flex justify-between mx-3 my-2">
          <span className="mx-1">
            <a href="https://www.instagram.com/koremoon__/" target="_blank">
              <FaInstagramSquare size={30} className="bg-slate-300" />
            </a>
          </span>
          <span className="mx-1">
            <FaTelegram size={30} className="bg-slate-300" />{' '}
          </span>
        </div>
      </div>
    </>
  )
}

export default Header
