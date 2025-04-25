import Link from 'next/link'
import React from 'react'

const VideoLink = ({url, image_path, title}) => {


  return (
    <Link href={url} target="_blank">
        <div className='video-link w-[400px] h-[300px] flex flex-col gap-5'>
            <p className='text-'>{title}</p>
            <img src={image_path} className="object-cover max-w-full max-h-full  ring ring-2 ring-gray-200 ring-offset-4 rounded-sm" />
        </div>
    </Link>
  )
}

export default VideoLink