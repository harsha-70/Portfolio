import React from 'react'
import ProjectCard from './ProjectCard';
import portfolio from "../../assets/portfolio.jpg";
import fest from "../../assets/fest.jpg";
import cropcare from "../../assets/cropcare.jpg";

const projectData = [
  {
    title: "Portfolio Website",
    image: portfolio,
    description: "This is a modern and mobile-friendly portfolio website that shares my skills, highlights the projects I've worked on alone and with others, and tells the story of my journey in development. It's built with React and Tailwind CSS to ensure a smooth and attractive experience.",
    tools: ["React", "Tailwind", "Vite", "HTML"],
    github: "https://github.com/harsha-70/Portfolio",
    demo : "https://harsha-70.github.io/Portfolio"
  },
  {
    title: "Crop Care",
    image: cropcare,
    description: "CropCare is a deep learning-based web application designed to detect plant leaf diseases from images. Users can upload a photo of a plant leaf, and the model predicts the type of disease it might have. This project helps reduce manual effort and supports early disease detection, which can improve crop health and yield.",
    tools: ["Python", "Tensorflow", "Keras", "Flask", "React"],
    github: "https://github.com/harsha-70/crop-care",
   
  },
  {
     title: "College Techfest website",
    image: fest,
    description: "Developed a responsive and engaging tech fest website for our college, featuring detailed event listings, registration forms, schedules, and team member sections. Built using React, the website includes interactive and user-friendly front-end components that provide a central platform for students to explore workshops, coding contests, and speaker sessions. ",
    tools: ["MERN", "PHP"],
    github: "https://github.com/harsha-70/Zeitgiest",
  }
 
];
const Project = () => {
  return (
    <section id="projects" className='max-w-9xl mx-auto px-2 relative flex flex-col items-center justify-between py-4 sm:px-4 my-8'>
        <div className="max-w-xl w-full flex flex-wrap items-center justify-center my-8 mb-10 px-2">
            <div className="flex-grow h-[2px] bg-pink-600"></div>
            <div className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-violet-600 hover:to-pink-500 p-[2px] rounded-lg transition-all duration-300">
                <div className="bg-[#0d1224] px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-semibold text-white rounded-lg text-center whitespace-nowrap">
                     My Work
                </div>
            </div>
            <div className="flex-grow h-[2px] bg-violet-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 px-4">
            {projectData.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    </section>

  )
}

export default Project
