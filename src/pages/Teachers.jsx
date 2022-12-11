import React from 'react'
import TeacherCard from '../components/TeacherCard'
import { teachers } from '../data/teachers'
import logic from '../data/logic.jpg'

const Teachers = () => {
  return (
    <div className="bg-black h-screen">
      <div className="absolute bg-black  z-10">
        <img
          className="w-screen  h-screen -translate-y-20 opacity-20 pointer-events-none"
          src={logic}
          alt="logo"
        />
      </div>
      <div className="z-20 relative">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">
          Our teachers
        </h1>
        <div className="flex">
          {teachers.map((teacher) => {
            return <TeacherCard key={teacher.id} teacher={teacher} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Teachers
