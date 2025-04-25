"use client"
import React from 'react'

const NavBar = () => {

    const scrollToSection = (section_id) => {
        const element = document.getElementById(section_id);

        if (element) {
            element.scrollIntoView({behavior : 'smooth'});
        }
    }

  return (
    <div className='navbar-section flex w-full gap-10 mb-56'>
      
        <div className='sam-rusk-picture-container w-[50%]' >
            <img src='/images/sam-directing.png' alt="Sam Rusk directing their debut film, Terrarium" className='object-cover' />
        </div>

        <div className='page-links-container w-[47%] min-h-full py-10 flex flex-col justify-between'>
            <div className='about-me cursor-pointer' onClick={() => scrollToSection("about")}>
                <h2 className='text-3xl font-[200]'>ABOUT ME</h2>
            </div>

            <hr className='w-full' />

            <div className='film-projects cursor-pointer' onClick={() => scrollToSection("film-projects")}>
                <h2 className='text-3xl font-[200]'>FILM PROJECTS</h2>
                
            </div>

            <hr className='w-full' />

            <div className='resume cursor-pointer' onClick={() => scrollToSection("resume")}>
                <h2 className='text-3xl font-[200]'>RESUME</h2>
                
            </div>

            {/*
            <hr className='w-full' />

            <div className='writing cursor-pointer' onClick={() => scrollToSection("writing")}>
                <h2 className='text-3xl font-[200]'>WRITING</h2>
                
            </div> 
            */}

            <hr className='w-full' />

            <div className='contact cursor-pointer' onClick={() => scrollToSection("contact")}>
                <h2 className='mb-1 text-3xl font-[200]'>CONTACT</h2>
                <p className='text-md '>Send me an email or get creative. My window is always open.</p>
                
            </div>
        </div>

    </div>
  )
}

export default NavBar
