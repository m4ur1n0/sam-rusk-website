import React from 'react'
import VideoLink from './VideoLink'

const FilmProjects = ({id}) => {
  return (
    <div id={id} className='film-projects-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='film-projects-content w-full'>
            <h1 className='film-projects-title text-4xl mb-10'>
                FILM PROJECTS
            </h1>

            <div className='film-projects-section-videos px-16 w-full flex flex-col gap-24'>

                <div className='film-projects-section-videos-row w-full flex justify-between'>

                    <VideoLink url={"https://drive.google.com/file/d/1ZLxzuFWxnS0oiSkM2eH0_wUAn8wMbY3h/view?usp=sharing"} title="Corporate Sample 1" image_path={"/images/corporate_sample.jpeg"} />
                    <VideoLink url={"https://drive.google.com/file/d/1KbdvEXrsSIbgPHOVaYfa4npHftf44OCH/view?usp=sharing"} title="Corporate Sample 2" image_path={"/images/corporate-sample-2.jpeg"} />


                </div>

                <div className='film-projects-section-videos-row w-full flex justify-between'>
                    <VideoLink url={"https://drive.google.com/file/d/1ZLxzuFWxnS0oiSkM2eH0_wUAn8wMbY3h/view?usp=sharing"} title="Corporate Sample" image_path={"/images/corporate_sample.jpeg"} />
                    
                </div>
                
            </div>
        </div>

        {/* <div className='film-projects-image w-[45%]'>
            <img src='/images/sam-chair-computer.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
        </div>
       */}
    </div>
  )
}

export default FilmProjects
