import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import card1 from '../data/card1.png'
import card2 from '../data/card2.png'
import card3 from '../data/card3.png'
import Modal from '../components/Modal/Modal'
import Notiflix from 'notiflix'

const Home = () => {
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
      <div className="bg-black bg-opacity-80 ">
        <div className="border-b-2">
          <div className="flex  flex-col  text-center justify-center h-screen   text-white">
            <h1 className="text-white text-5xl z-30 font-bold">
              SIGN UP FOR YOUR FIRST LESSON!
            </h1>
            <form ref={form} onSubmit={applyCustomer} className="z-30 my-8">
              <input
                type="text"
                placeholder="Name"
                required
                name="user_name"
                className="text-2xl p-3 px-5 border-2-slate-100 bg-slate-200 rounded mx-3 text-black focus:outline-none"
              ></input>
              <input
                type="text"
                name="phone_number"
                required
                className="text-2xl p-3 px-5 border-2-slate-500 bg-slate-200 rounded mx-3  text-black focus:outline-none"
                placeholder="Phone number"
              ></input>
              <button
                type="submit"
                className="bg-purple-800 p-3.5 mx-2 px-8 rounded text-lg my-5 -translate-y-1 "
              >
                Apply
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col bg-sowhite p-6 px-18 items-center">
          <h1 className="text-6xl my-8 text-center">
            New courses starting soon!
          </h1>
          <p className="text-3xl font-thin text-center px-16">
            Live lessons with our teachers, 24/7 support it Telegram, cartoons,
            movies and competitions for students! Starts on January, 11.
          </p>
          <div className="my-10">
            <Link to="courses">
              <button className="bg-black p-2 text-white mx-1 px-8 rounded-full border-2 border-black text-lg my-5  hover:bg-white hover:text-black">
                Apply
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white p-2 text-black border-2 mx-1 px-8 rounded-full text-lg my-5  hover:bg-black hover:text-white "
            >
              Ask a question
            </button>
          </div>
        </div>
        <div className=" bg-sogray flex  p-14">
          <div className="mx-10 my-10 text-white text-3xl font-semibold w-2/3 md:text-xl md:my-2">
            Let us introduce ourselfs. We are team of experienced and passionate
            teachers, motivated and purposeful. Click on button to learn more!
          </div>
          <Link to="tutors">
            <div className="flex  align-middle justify-center">
              <button className="px-10 py-3 my-16  border-2 bg-purple-500 rounded-xl md:px-2">
                Let's have a look
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-sowhite  text-black ">
          <h1 className="text-center font-extrabold text-black text-6xl p-10 ">
            What is the purpose for learning Korean?
          </h1>
          <h1 className="text-center text-3xl m-12 text-black">
            Students of Koremoon most often have the following aims
          </h1>
          <div className="flex mx-2 flex-wrap justify-center md:mx-0 text-black">
            <div className="flex flex-col  m-4 p-2 max-w-sm ">
              <img src={card1} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-3xl my-4">
                Studing in Korean Universities
              </div>
              <div className="text-center text-xl my-4">
                We prepare our students to apply for Korean University programs
                and help them to provide all neccesary documents.
              </div>
            </div>
            <div className="flex flex-col  m-4 p-2 max-w-sm">
              <img src={card2} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-3xl my-4">
                Moving to Korea
              </div>
              <div className="text-center text-xl my-4">
                We hold various events where we tell and give recommendations on
                moving. Also, our students who live in Korea now share their
                experience.
              </div>
            </div>
            <div className="flex flex-col  m-4 p-2 max-w-sm">
              <img src={card3} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-3xl my-4">
                Watching doramas and understand idols
              </div>
              <div className="text-center text-xl my-4">
                Education is built exclusively on modern content, so it is very
                interesting to study with us, and the teachers are Korean fans
                just like you
              </div>
            </div>
          </div>
          <hr className="" />
          <div className=" bg-sogray flex  p-14">
            <div className="mx-10 my-10 text-white text-3xl font-semibold w-2/3 md:text-xl md:my-2">
              Take a look on your students feedback. Most of them successfully
              achieved thier targets and we still connected with them
            </div>
            <div className="flex   w-1/2 align-middle justify-center">
              <button className="px-10 py-1 my-16  border-2 bg-purple-500 rounded-xl md:px-2">
                Let's have a look
              </button>
            </div>
          </div>
          <hr className="" />
          <div className="bg-soslate flex flex-col">
            <div className=" p-4  text-center">
              <h1 className="text-center font-extrabold text-6xl text-black my-10">
                Our courses description
              </h1>
            </div>
            <div className="flex p-3 flex-wrap text-center sm:px-0 justify-center  ">
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-verywhite max-w-sm rounded-lg md:px-1 md:mx-1">
                <div className="my-5 text-4xl border-4 rounded-xl ">
                  LEVEL 1
                </div>
                <div className="text-start font-bold text-2xl my-3">
                  $19.95/month
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                  sint optio qui incidunt! Inventore exercitationem, expedita
                  totam perferendis molestias ratione aperiam hic nobis a?
                </div>
                <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
                <div className="flex">
                  <Link to="courses">
                    <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                      Apply
                    </button>
                  </Link>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white "
                  >
                    Ask a question
                  </button>
                </div>
              </div>
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-verywhite max-w-sm rounded-lg">
                <div className="my-5 text-4xl border-4 rounded-xl">LEVEL 2</div>
                <div className="text-start font-bold text-2xl my-3">
                  $39.95/month
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                  sint optio qui incidunt! Inventore exercitationem, expedita
                  totam perferendis molestias ratione aperiam hic nobis a?
                </div>
                <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
                <div className="flex">
                  <Link to="courses">
                    <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                      Apply
                    </button>
                  </Link>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white "
                  >
                    Ask a question
                  </button>
                </div>
              </div>
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-verywhite max-w-sm rounded-lg">
                <div className="my-5 text-4xl border-4 rounded-xl">LEVEL 3</div>
                <div className="text-start font-bold text-2xl my-3">
                  $79.95/month
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                  sint optio qui incidunt! Inventore exercitationem, expedita
                  totam perferendis molestias ratione aperiam hic nobis a?
                </div>
                <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
                <div className="flex">
                  <Link to="courses">
                    <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                      Apply
                    </button>
                  </Link>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white "
                  >
                    Ask a question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div className="z-30 relative flex justify-center  w-fit items-center bg-purple-900 bg-opacity-80 ">
          <div className=" px-24 my-4 w-full md:px-4">
            <h1 className="text-white font-bold  my-4 text-center text-2xl pb-4 border-b-1 ">
              REQUEST A CALL
            </h1>
            <form ref={form} onSubmit={applyCustomer}>
              <div className="flex flex-col justify-center mt-10 md:mt-2 md:mx-4">
                <div className="flex w-full justify-center md:flex-col">
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

export default Home
