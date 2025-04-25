import React from 'react'

const AboutMe = ({id}) => {
  return (
    <div id={id} className='about-me-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='about-me-content w-full'>
            <h1 className='about-me-title text-4xl mb-10'>
                ABOUT ME
            </h1>

            <div className='flex w-full justify-between  gap-16'>
                <div className='about-me-section-copy ml-5 w-[45%] flex flex-col gap-4'>
                    {/* <p>
                    Hello The Onion, or one of my close friends!
                    </p> */}
                    <p className='text-justify'> I'm a filmmaker and creative professional in my final semester at UCLA, with
                        hands-on experience across all stages of media production. My background
                        spans film development, corporate content creation, and independent
                        directing, including writing and leading my own film projects. I've interned and
                        freelanced at production companies in Los Angeles, New York, and London,
                        supporting everything from script coverage and industry research to shoot
                        coordination and post-production.
                    </p>
                    <p className='text-justify'>
                    I'm drawn to collaborative, story-driven work—whether it's on set, in the edit,
                    or on the page—and I thrive in fast-paced creative environments.
                    </p>

                    <p className='text-justify'>In addition to commercial and creative content production, I can make a <a href="https://sam-rusk-website.vercel.app/" className='underline'>website in under 3 hours from scratch</a></p>

                    <img src='/images/signature.png' className='w-[70%] ml-4 mt-24' />
                </div>


                <div className='about-me-image w-[45%]'>
                    <img src='/images/sam-chair-computer.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default AboutMe
