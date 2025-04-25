import React from 'react'
import AdditionalReferences from './AdditionalReferences'
import Resume from './Resume'

const ResumeAndAdditionalReferences = () => {

  return (
    <div className='resume-and-references flex gap-24 items-center h-full mb-56'>
        <a className='image-of-resume w-[40%] shadow-md h-full' href={`/images/sam-cv.png`} download="Sam Rusk CV.png">
            <img src="/images/sam-cv.png" className='' />
        </a>

        <div className='resume-section-and-references h-full flex flex-col justify-between gap-32'>

            <Resume id = "resume"/>

            {/* <AdditionalReferences/> */}

        </div>
    </div>
  )
}

export default ResumeAndAdditionalReferences