import React from 'react'

const FilmProjects = ({id}) => {
  return (
    <div id={id} className='film-projects-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='film-projects-content'>
            <h1 className='film-projects-title text-4xl mb-10'>
                FILM PROJECTS
            </h1>

            <div className='film-projects-section-copy ml-5 flex flex-col gap-24'>
                <p>Terrarium</p>
                <p>Corporate Sample</p>
                <p className='mb-24'>Comedy Sample</p>
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
