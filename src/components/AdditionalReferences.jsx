import React from 'react'

const AdditionalReferences = () => {
  return (
    <div className='additional-references-section w-full flex justify-between gap-8 pr-24'>

        <div className='additional-references-content text-right'>
            <h1 className='additional-references-title text-4xl mb-10'>
                ADDITIONAL REFERENCES
            </h1>

            <div className='additional-references-section-copy ml-5 flex flex-col gap-4'>
                <p>“Professional and responsible, except for that face tattoo of the c-word ” - </p>
                <p>“Really fun to work with, great at collaboration, and the best weapons lobbyist this town has ever seen” - Jonas Brothers</p>
                <p>“The Tom Brady of hot non-binary losers” - Coach</p>
                <p>“Just a little too into gambling”- Mayor of town from Footloose</p>



            </div>
        </div>

        {/* <div className='additional-references-image w-[45%]'>
            <img src='/images/sam-chair-computer.png' alt="Sam Rusk sat in a cafe, working on their latest screenplay." className='object-cover'></img>
        </div> */}
      
    </div>
  )
}

export default AdditionalReferences
