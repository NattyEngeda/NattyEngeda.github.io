import React from 'react'

export default function About() {
  return (
    <div className='w-full mx-auto container px-10 md:px-20 text-white flex flex-col items-center justify-start gap-5 md:py-10'>

      <div className='w-full grid grid-cols-5 font-VT323'>
        <div className='w-full col-span-3 flex flex-col items-center justify-start gap-5'>
          <h1 className='text-2xl md:text-5xl'>I am </h1>
          <div className='flex flex-col gap-4 text-xl '>
            <p >Hello There! I am <span className='text-secondary-500'>Natnael Engeda</span> from <span>Addis Ababa, Ethiopia.</span>
              I am a graduate of Computer Science {"(BSc)"} at St. Mary's University.
            </p>
            <p> Additionally I am Working as A full time Software Developer at <span className='text-secondary-500'>Versavvy Media Plc.</span></p>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}
