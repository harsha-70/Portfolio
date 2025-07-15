import React from 'react'

const ProjectCard = ({ title, image, description, tools, github ,demo}) => {
  return (
    <div className='border border-pink-500 hover:border-violet-600 backdrop-blur-xl bg-white/10 text-white shadow-xl flex flex-col gap-4 hover:scale-102 transition-all duration-200 hover:shadow-violet-500/20 rounded-2xl w-full max-w-[350px] p-6'>
      
      <p className="text-[#16f2b3] font-semibold text-center w-full">
       {title}
     </p>
     <img 
        src={image} 
        alt="{title}" 
        className="h-[120] object-fill mx-auto w-full border border-white rounded-2xl"
      />
     <p className='text-sm text-gray-300 mb-3'>{description}</p>
     <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs text-white rounded-lg backdrop-blur-md
            bg-white/10 shadow-inner shadow-white/10 border border-white/10"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className='flex gap-4 text-sm pb-5'>
          <a href={github} target='_blank' className='text-pink-500'>Github</a>
          {demo?.trim() && (
            <a href={demo} target="_blank"  className="text-blue-200 ">
              Demo
            </a>
          )}
      </div>
    </div>
  )
}

export default ProjectCard
