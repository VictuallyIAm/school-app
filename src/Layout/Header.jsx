import React, { useRef, useState } from 'react'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import bob from '../data/bob.jpg'

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const fixNavbar = () => {
    if (window.scrollY > 60) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }
  window.addEventListener('scroll', fixNavbar)
  const nav = useRef()
  const scrollToNav = () => {
    nav.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div
        ref={nav}
        className="flex static opacity-100 bg-black bg-opacity-80   p-1"
      >
        <div className="m-1 sm:mx-0">
          <Link to="/school-app">
            <span className="flex text-purple-500 sm:hidden">
              <img src={bob} alt="logo" className="h-12 w-12 rounded-full" />
              <p className="mx-3 text-3xl my-1 font-bold">Koremoon</p>
            </span>
          </Link>
        </div>
        <div className=" w-screen flex justify-center ">
          <nav className=" w-full text-lg text-gray-100">
            <div className=" flex flex-row justify-center align-middle mx-3 sm:mx-0">
              <Link
                to="/school-app"
                className=" border-r-2 border-l-2 p-2 sm:border-l-0 px-4 border-r-slate-50 hover:text-slate-500"
              >
                Home
              </Link>
              <Link
                to="tutors"
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
        <div className="flex justify-between mx-3 my-2 sm:hidden">
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
      {scroll ? (
        <button
          onClick={scrollToNav}
          className="fixed bottom-9 p-1 text-xl right-9 bg-white border-2 rounded-full z-50"
        >
          <BsFillArrowUpCircleFill size={50} />
        </button>
      ) : null}
    </>
  )
}

export default Header
