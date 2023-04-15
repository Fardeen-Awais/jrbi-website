import React from 'react'
function Video({ youtube }) {
  return (
    <>
      <div className='flex flex-col justify-center items-center max-w-7xl min-h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {youtube.map((Youtube) => (
            <div key={Youtube._key}>
              <iframe
                className="w-full h-48 md:h-64 lg:h-80 object-cover object-center"
                src={`https://www.youtube.com/embed/${Youtube.url}`}
                title={Youtube.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Video