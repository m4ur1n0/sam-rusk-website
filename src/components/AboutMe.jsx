import React from 'react'

const AboutMe = ({id}) => {
  return (
    <div id={id} className='about-me-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='about-me-content'>
            <h1 className='about-me-title text-4xl mb-10'>
                ABOUT ME
            </h1>

            <div className='about-me-section-copy ml-5 flex flex-col gap-4'>
                <p>Hello The Onion or a close friend of mine,</p>
                <p>I'm a UCLA senior</p>

                <p>In addition to commercial and creative content production, I can make a <span className='underline'>website in under 3 hours from scratch</span></p>
            </div>
        </div>

        <div className='about-me-image w-[45%]'>
            <img src='/images/sam-chair-computer.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
        </div>
      
    </div>
  )
}

export default AboutMe
