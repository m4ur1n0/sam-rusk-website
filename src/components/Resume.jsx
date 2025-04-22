import React from 'react'

const Resume = ({id}) => {
  return (
    <div id={id} className='resume-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='resume-content'>
            <h1 className='resume-title text-4xl mb-10'>
                RESUME
            </h1>

            <div className='resume-section-copy ml-5 flex flex-col gap-4'>
                <p>Step One : Put in pipe</p>
                <p>Step Two : Smoke it</p>

            </div>
        </div>

        {/* <div className='resume-image w-[45%]'>
            <img src='/images/sam-chair-computer.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
        </div> */}
      
    </div>
  )
}

export default Resume
