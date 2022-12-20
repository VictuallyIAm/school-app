import React from 'react'

const CourseCard = () => {
  return (
    <div className="flex flex-col p-4  mx-3 my-4 text-lg bg-verywhite max-w-sm rounded-lg">
      <div className="my-5 text-4xl border-4 rounded-xl">LEVEL 3</div>
      <div className="text-start font-bold text-2xl my-3">$79.95/month</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        inventore obcaecati? Quibusdam culpa autem placeat sint optio qui
        incidunt! Inventore exercitationem, expedita totam perferendis molestias
        ratione aperiam hic nobis a?
      </div>
      <div className="text-xl font-bold my-3">DURATION: 4 MONTHS</div>
      <div className="flex">
        <button className="bg-black p-2 text-white mx-1 px-8 rounded border-2 border-black text-lg my-5 -translate-y-1 hover:bg-white hover:text-black ">
          Buy now
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-white p-2 text-black border-2 mx-1 px-8 rounded text-lg my-5 -translate-y-1 hover:bg-black hover:text-white "
        >
          Ask a question
        </button>
      </div>
    </div>
  )
}

export default CourseCard
