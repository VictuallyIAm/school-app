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
        <h1 className="text-white justify-center text-center font-bold text-5xl p-4 pt-8 pb-1 flex md:text-2xl">
          GROUP LESSONS
        </h1>
        <h2 className="text-white justify-center text-center text-3xl p-4 py-8 flex md:text-xl">
          ALL LESSONS ARE CONDUCTED REMOTELY AT A CONVENIENT TIME FOR YOU
        </h2>
        <div className="flex justify-around flex-wrap py-8">
          <div className="flex flex-col  bg-white text-black mx-6 p-12 rounded-md border-2 border-slate-300 md:mb-5">
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
          <div className="flex flex-col  bg-gray-400 text-black mx-6 p-12 rounded-md border-2 border-slate-300 md:mb-5">
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
          <div className="flex flex-col  bg-black text-white mx-6 p-12 rounded-md border-2 border-slate-300">
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
        <div className="z-30 relative flex justify-center   w-fit items-center bg-purple-900 bg-opacity-80 ">
          <div className=" px-24 my-4 w-full md:px-4">
            <h1 className="text-white font-bold  my-4 text-center text-2xl pb-4 border-b-1 ">
              APPLY FOR A LESSON!
            </h1>
            <form ref={form} onSubmit={applyCustomer}>
              <div className="flex flex-col justify-center md:items-center mt-10 md:mt-2 md:mx-4">
                <div className="flex w-full justify-center md:flex-col md:items-center">
                  <input
                    className="m-3 p-4 w-1/2 md:w-full bg-sowhite text-lg text-black border-1 rounded-full focus:outline-none"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />

                  <input
                    className="m-3 p-4 w-1/2 md:w-full bg-sowhite text-lg text-black border-1 rounded-full focus:outline-none"
                    type="phone"
                    name="phone_number"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <button
                  className="m-4 px-5 py-2 md:w-full text-purple-500 text-lg font-light bg-white rounded-xl"
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
