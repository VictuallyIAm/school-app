import React from 'react'
import { Link } from 'react-router-dom'

const TeacherCard = (teacher) => {
  const { name, url, description } = teacher.teacher
  return (
    <div className="border-zinc-200 border-1 bg-gray-200  w-full mx-4 mb-3 mt-0  rounded text-black p-2 flex justify-start md:flex-col ">
      <div>
        <div className="p-3 z-30 ">
          <img className="w-60 rounded" src={url} alt="logo" />
        </div>
      </div>
      <div className="mx-4 ">
        <div className="text-3xl font-bold border-b-2">{name}</div>
        <div className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          laudantium commodi aspernatur consectetur reiciendis deleniti nisi
          suscipit atque? Atque, aliquid?
        </div>
        <Link to="courses">
          <button className="px-5 py-2 border-2 bg-orange-500 rounded-xl">
            Want to study with
          </button>
        </Link>
      </div>
    </div>
  )
}

export default TeacherCard
