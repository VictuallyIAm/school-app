import React, { useRef, useState } from 'react'
import Modal from '../components/Modal/Modal'
import Notiflix from 'notiflix'
import emailjs from '@emailjs/browser'

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const form = useRef()
  const applyCustomer = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_321usp4',
        'template_n5m22uw',
        form.current,
        'Qy5EvY0m13ER3oFiB'
      )
      .then(
        (result) => {
          Notiflix.Notify.success('We will call you in 24 hours')
          setIsModalOpen(false)
        },
        (error) => {
          console.log(error.message)
          setIsModalOpen(false)
        }
      )
    e.target.reset()
  }

  return (
    <>
      <div className=" bg-black bg-opacity-80">
        <div className="flex justify-around flex-wrap py-8">
          <div className="flex flex-col  bg-white text-black mx-6 p-12 rounded-md border-2 border-slate-30">
            <div className="flex flex-col ">
              <span className="text-3xl font-bold text-center border-4 rounded-xl">
                1 LEVEL
              </span>
              <span className="text-4xl font-extrabold my-1 text-center">
                $19.95
              </span>
              <span className="my-3 text-2xl text-center border-b-2">
                Duration: 4 month
              </span>
              <span>
                <ul className="flex flex-col text-xl items-start">
                  <li>• Basic lecsics</li>
                  <li>• Full support in tg chat</li>
                  <li>• 12 hours of video</li>
                  <li>• 5 students in group</li>
                  <li>• 2 communication styles</li>
                  <li>• 2 times a week</li>
                  <li>• Level exam in the end</li>
                </ul>
              </span>
            </div>
            <span className="text-center">
              <button
                className=" bg-blue-300 px-8 py-2 my-3 rounded-sm"
                onClick={() => setIsModalOpen(true)}
              >
                Apply
              </button>
            </span>
          </div>
          <div className="flex flex-col  bg-gray-400 text-black mx-6 p-12 rounded-md border-2 border-slate-300">
            <div className="flex flex-col ">
              <span className="text-3xl font-bold text-center border-4 rounded-xl">
                2 LEVEL
              </span>
              <span className="text-4xl font-extrabold my-1 text-center">
                $39.95
              </span>
              <span className="my-3 text-2xl text-center border-b-2">
                Duration: 4 month
              </span>
              <span>
                <ul className="flex flex-col text-xl items-start">
                  <li>• Upper lecsics</li>
                  <li>• Full support in tg chat</li>
                  <li>• 18 hours of video</li>
                  <li>• 5 students in group</li>
                  <li>• 3 communication styles</li>
                  <li>• 2 times a week</li>
                  <li>• Level exam in the end</li>
                </ul>
              </span>
            </div>
            <span className="text-center">
              <button
                className=" bg-blue-500 px-8 py-2 my-3 rounded-sm"
                onClick={() => setIsModalOpen(true)}
              >
                Apply
              </button>
            </span>
          </div>
          <div className="flex flex-col  bg-black text-white mx-6 p-12 rounded-md border-2 border-slate-30">
            <div className="flex flex-col ">
              <span className="text-3xl font-bold text-center border-4 rounded-xl">
                3 LEVEL
              </span>
              <span className="text-4xl font-extrabold my-1 text-center">
                $79.95
              </span>
              <span className="my-3 text-2xl text-center border-b-2">
                Duration: 4 month
              </span>
              <span>
                <ul className="flex flex-col text-xl items-start">
                  <li>• Advanced lecsics</li>
                  <li>• Full support in tg chat</li>
                  <li>• 36 hours of video</li>
                  <li>• 4 students in group</li>
                  <li>• 6 communication styles</li>
                  <li>• 3 times a week</li>
                  <li>• Level exam in the end</li>
                </ul>
              </span>
            </div>
            <span className="text-center">
              <button
                className=" bg-blue-800 px-8 py-2 my-3 rounded-sm"
                onClick={() => setIsModalOpen(true)}
              >
                Apply
              </button>
            </span>
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="z-30 relative flex justify-center  w-96 items-center bg-backmodal bg-opacity-80 ">
          <div className=" mx-24 my-4  ">
            <h1 className="text-white my-4 text-center text-2xl">
              Request a call
            </h1>
            <form ref={form} onSubmit={applyCustomer}>
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
                  placeholder="Phone Number"
                  required
                />
                <button
                  className="m-4 px-5 py-2 text-white text-lg font-light bg-sky-600 rounded-xl"
                  type="submit"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Courses
