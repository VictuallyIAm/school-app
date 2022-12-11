import React from 'react'
import bts from '../data/bts.jpg'
import card1 from '../data/card1jpg.jpg'
import card2 from '../data/card2.jpg'
import card3 from '../data/card3.jpg'
import leve1 from '../data/level1.png'
import leve2 from '../data/level2.jpg'
import level3 from '../data/level3.png'

const Home = () => {
  return (
    <div className="bg-white">
      <div>
        <div className="absolute bg-black  z-10">
          <img
            className="w-screen  h-screen -translate-y-20 opacity-40 pointer-events-none"
            src={bts}
            alt="logo"
          />
        </div>
        <div className="flex  flex-col  text-center justify-center h-screen   text-white">
          <h1 className="text-white text-5xl z-30 font-bold">
            SING UP FOR YOUR FIRST LESSON!
          </h1>
          <form className="z-30 my-8">
            <input
              type="text"
              placeholder="Name"
              className="text-2xl p-3 px-5 border-2-slate-100 bg-slate-200 rounded mx-3 text-black focus:outline-none"
            ></input>
            <input
              type="text"
              className="text-2xl p-3 px-5 border-2-slate-500 bg-slate-200 rounded mx-3  text-black focus:outline-none"
              placeholder="Phone number"
            ></input>
            <button className="bg-purple-800 p-3.5 mx-2 px-8 rounded text-lg my-5 -translate-y-1 ">
              Apply
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1 className="text-center font-extrabold text-4xl my-10">
          What is the purpose for learning Korean?
        </h1>
        <h1 className="text-center text-xl m-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          similique, alias nostrum dolore, autem a earum, mollitia officia ad
          harum explicabo repudiandae quod maiores! Laudantium natus, amet
          mollitia tempore quaerat cupiditate maiores ipsam voluptatem ex
          accusantium praesentium distinctio doloremque nulla.
        </h1>
        <div className="flex mx-4">
          <div className="flex flex-col align-middle m-4 p-2 max-w-sm">
            <img src={card1} className=" block rounded" alt="logo" />
            <div className="text-center font-bold text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="text-center my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi
              illo minima magni vero est! Numquam, a? Est, a nesciunt. Culpa,
              vitae incidunt, laboriosam harum voluptates reprehenderit beatae
              modi, iure omnis perspiciatis ab porro laudantium sit provident
              quas explicabo. Expedita?
            </div>
          </div>
          <div className="flex flex-col align-middle m-4 p-2 max-w-sm">
            <img src={card2} className=" block rounded" alt="logo" />
            <div className="text-center font-bold text-lg my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="text-center my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              accusamus amet ipsam recusandae eum cum sit nostrum, ipsum non,
              quas provident labore ea aliquid! Sunt, tenetur saepe? Commodi et
              adipisci dolore deserunt modi saepe similique aliquam. Nihil aut
              veniam quae obcaecati est? Reiciendis, blanditiis deserunt! Quis
              harum quisquam assumenda repudiandae.
            </div>
          </div>
          <div className="flex flex-col align-middle m-4 p-2 max-w-sm">
            <img src={card3} className=" block rounded" alt="logo" />
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
        <div className="bg-hero bg-opacity-40 flex  p-4">
          <div className="mx-10 my-10 text-white text-3xl font-semibold w-2/3">
            Take a look on your students feedback. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Similique, assumenda.
          </div>
          <div className="flex   w-1/2 align-middle justify-center">
            <button className="px-10 py-1 my-16  border-2 bg-orange-500 rounded-xl">
              Let's have a look
            </button>
          </div>
        </div>
        <hr className="my-14" />
        <div className="bg-villain flex flex-col">
          <div className=" p-4  text-center">
            <h1 className="text-center font-extrabold text-5xl text-white my-10">
              Our courses description
            </h1>
          </div>
          <div className="flex p-3 flex-wrap text-center ">
            <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg">
              <div className="my-5">
                <img src={leve1} alt="alt" />
              </div>
              <div className="text-start font-bold text-2xl my-3">
                $160/month
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                sint optio qui incidunt! Inventore exercitationem, expedita
                totam perferendis molestias ratione aperiam hic nobis a?
              </div>
              <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
              <div className="flex">
                <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                  Let's start
                </button>
                <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                  Ask a question
                </button>
              </div>
            </div>
            <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg">
              <div className="my-5">
                <img src={leve2} alt="alt" />
              </div>
              <div className="text-start font-bold text-2xl my-3">
                $160/month
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                sint optio qui incidunt! Inventore exercitationem, expedita
                totam perferendis molestias ratione aperiam hic nobis a?
              </div>
              <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
              <div className="flex">
                <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                  Let's start
                </button>
                <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                  Ask a question
                </button>
              </div>
            </div>
            <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-slate-100 max-w-sm rounded-lg">
              <div className="my-5">
                <img src={level3} alt="alt" />
              </div>
              <div className="text-start font-bold text-2xl my-3">
                $160/month
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, inventore obcaecati? Quibusdam culpa autem placeat
                sint optio qui incidunt! Inventore exercitationem, expedita
                totam perferendis molestias ratione aperiam hic nobis a?
              </div>
              <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
              <div className="flex">
                <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
                  Let's start
                </button>
                <button className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white ">
                  Ask a question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
