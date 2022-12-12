import React from 'react'
import TeacherCard from '../components/TeacherCard'
import { teachers } from '../data/teachers'

const Teachers = () => {
  return (
    <div className=" bg-black bg-opacity-80">
      <div className="z-20 ">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">
          Our teachers
        </h1>
        <div className="flex flex-wrap md:justify-center">
          {teachers.map((teacher) => {
            return <TeacherCard key={teacher.id} teacher={teacher} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Teachers
