import React from 'react'
import bts from '../data/bts.jpg'

const Contact = () => {
  return (
    <>
      <div className="absolute bg-black  z-10">
        <img
          className="w-screen  h-screen -translate-y-20 opacity-20 pointer-events-none"
          src={bts}
          alt="logo"
        />
      </div>
      <section classname="z-20 relative">
        <div className="z-30 relative flex justify-center items-center ">
          <div className="w-1/2 my-20 ">
            <form>
              <div className="flex flex-col justify-center">
                <input
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
                <input
                  className="my-3 p-1 bg-transparent text-lg text-white border-b-2 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone number"
                  required
                />
                <button
                  className="m-4 px-5 py-2 text-white text-lg font-light bg-sky-600 rounded-xl"
                  type="submit"
                >
                  Yes, I want to learn korean
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
