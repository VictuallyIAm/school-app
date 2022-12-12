import React from 'react'
import { FaInstagramSquare, FaTelegram } from 'react-icons/fa'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <div className="h-20   bg-black sticky z-100   ">
        <div className="flex py-3 justify-center mx-3 ">
          <span className="mx-1 ">
            <a href="https://www.instagram.com/koremoon__/" target="_blank">
              <FaInstagramSquare size={30} className="bg-slate-300" />
            </a>
          </span>
          <span className="mx-1">
            <FaTelegram size={30} className="bg-slate-300" />{' '}
          </span>
        </div>
        <p className="text-white text-center">{year}</p>
      </div>
    </>
  )
}

export default Footer
