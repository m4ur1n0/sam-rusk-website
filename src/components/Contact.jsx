import Link from 'next/link'
import React from 'react'

const Contact = ({id}) => {
  return (
    <div id={id} className='contact-section w-full flex justify-between gap-8 mb-56 pt-5'>

        <div className='contact-content'>
            <h1 className='contact-title text-4xl mb-10'>
                CONTACT
            </h1>

            <div className='contact-section-copy ml-5 flex flex-col gap-4'>
                <Link className='cursor-pointer' href={"mailto:sammytrusk@gmail.com"}>
                    Email: sammytrusk@gmail.com
                </Link>
                <p>Phone Number: +1 (413) 645-4815</p>
                <p>Old Media: P.O. Box 554, Stockbridge MA, 01262</p>
                <p>Location: 20 miles away as the crow flies</p>
            </div>
        </div>

        <div className='contact-image w-[30%]'>
            <img src='/images/sam-raven.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
        </div>
      
    </div>
  )
}

export default Contact
