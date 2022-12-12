import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import card1 from '../data/card1jpg.jpg'
import card3 from '../data/card3.jpg'
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
      <div className="bg-black bg-opacity-80">
        <div>
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
        <div>
          <h1 className="text-center font-extrabold text-white text-4xl my-10">
            What is the purpose for learning Korean?
          </h1>
          <h1 className="text-center text-xl m-12 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            similique, alias nostrum dolore, autem a earum, mollitia officia ad
            harum explicabo repudiandae quod maiores! Laudantium natus, amet
            mollitia tempore quaerat cupiditate maiores ipsam voluptatem ex
            accusantium praesentium distinctio doloremque nulla.
          </h1>
          <div className="flex mx-2 flex-wrap justify-center md:mx-0 text-white">
            <div className="flex flex-col  m-4 p-2 max-w-sm ">
              <img src={card1} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </div>
              <div className="text-center my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                animi illo minima magni vero est! Numquam, a? Est, a nesciunt.
                Culpa, vitae incidunt, laboriosam harum voluptates reprehenderit
                beatae modi, iure omnis perspiciatis ab porro laudantium sit
                provident quas explicabo. Expedita?
              </div>
            </div>
            <div className="flex flex-col  m-4 p-2 max-w-sm">
              <img src={card1} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </div>
              <div className="text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                accusamus amet ipsam recusandae eum cum sit nostrum, ipsum non,
                quas provident labore ea aliquid! Sunt, tenetur saepe? Commodi
                et adipisci dolore deserunt modi saepe similique aliquam. Nihil
                aut veniam quae obcaecati est? Reiciendis, blanditiis deserunt!
                Quis harum quisquam assumenda repudiandae.
              </div>
            </div>
            <div className="flex flex-col  m-4 p-2 max-w-sm">
              <img src={card3} className=" block rounded max-w-sm" alt="logo" />
              <div className="text-center font-bold text-lg my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </div>
              <div className="text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
                accusamus rerum hic alias tenetur autem itaque, nam quae quidem
                debitis. Quia laboriosam expedita, minima cumque recusandae
                accusantium. Porro iusto delectus quo, quae tempora perspiciatis
                nemo recusandae soluta deleniti. Mollitia eveniet soluta modi
                vitae numquam deserunt id eligendi laboriosam, hic illo nulla
                distinctio! Eum, aliquam asperiores, quasi vero facilis incidunt
                ex officia numquam, laboriosam nisi libero nemo vel dolores?
                Cumque aliquam consequuntur quaerat fugiat ipsum itaque suscipit
                quidem, nisi alias.
              </div>
            </div>
          </div>
          <hr className="my-14" />
          <div className=" bg-opacity-90 flex  p-4">
            <div className="mx-10 my-10 text-white text-3xl font-semibold w-2/3 md:text-xl md:my-2">
              Take a look on your students feedback. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Similique, assumenda.
            </div>
            <div className="flex   w-1/2 align-middle justify-center">
              <button className="px-10 py-1 my-16  border-2 bg-orange-500 rounded-xl md:px-2">
                Let's have a look
              </button>
            </div>
          </div>
          <hr className="my-14" />
          <div className="bg flex flex-col">
            <div className=" p-4  text-center">
              <h1 className="text-center font-extrabold text-5xl text-white my-10">
                Our courses description
              </h1>
            </div>
            <div className="flex p-3 flex-wrap text-center sm:px-0 justify-center  ">
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg md:px-1 md:mx-1">
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
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black "
                  >
                    Apply
                  </button>
                  <Link to="/contact">
                    <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                      Ask a question
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg">
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
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black "
                  >
                    Apply
                  </button>
                  <Link to="/contact">
                    <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                      Ask a question
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg">
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
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black "
                  >
                    Apply
                  </button>
                  <Link to="/contact">
                    <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                      Ask a question
                    </button>
                  </Link>
                </div>
              </div>
            </div>
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
                  name="phone_number"
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

export default Home
