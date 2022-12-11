import React from 'react'

const TeacherCard = (teacher) => {
  const { name, url, description } = teacher.teacher
  return (
    <div className="border-zinc-200 border-1 mx-4 mb-3 mt-0  rounded text-neutral-100 p-2 flex justify-between">
      <div>
        <div className="p-3 z-30 ">
          <img className="w-60 h-60 block rounded" src={url} alt="logo" />
        </div>
      </div>
      <div className="mx-4 max-w-xs">
        <div className="text-3xl font-bold border-b-2">{name}</div>
        <div className="my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
          laudantium commodi aspernatur consectetur reiciendis deleniti nisi
          suscipit atque? Atque, aliquid?
        </div>
        <button className="px-5 py-2 border-2 bg-orange-500 rounded-xl">
          Wanna
        </button>
      </div>
    </div>
  )
}

export default TeacherCard
