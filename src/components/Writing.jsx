import React from 'react'

const Writing = ( { id }) => {
  return (
    <div id={id} className='writing-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='writing-image w-[45%]'>
            <img src='/images/sam-maze.png' alt="A curious photo of the subject." className='object-cover'></img>
        </div>

        <div className='writing-content text-right'>
            <h1 className='writing-title text-4xl mb-10'>
                WRITING
            </h1>

            <div className='writing-section-copy ml-5 flex flex-col gap-4'>
                <p>There once was a young man from Nantucket...</p>

            </div>
        </div>

        
      
    </div>
  )
}

export default Writing
