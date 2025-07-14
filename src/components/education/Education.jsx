import Lottie from 'lottie-react';
import { GraduationCap } from 'lucide-react';
import animation from '../../assets/edu.json';
const Education = () => {
  return (
    <section id="education" className='max-w-9xl mx-auto px-2 relative flex flex-col items-center justify-between py-4 sm:px-4 lg:py- my-8 lg:my-8'>
      
    <div className="max-w-xl w-full flex flex-wrap items-center justify-center my-8 mb-20 px-2">
  {/* Left line */}
    <div className="flex-grow h-[2px] bg-pink-600"></div>

    {/* Ribbon box */}
    <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-[2px] rounded-lg hover:from-violet-600 hover:to-pink-500 transition-all duration-300 ">
      <div className="bg-[#0d1224] px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-semibold text-white rounded-lg text-center whitespace-nowrap">
        Education
      </div>
    </div>

    {/* Right line */}
    <div className="flex-grow h-[2px] bg-violet-600"></div>
</div>
    <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
      <div className="order-2 lg:order-2 flex flex-col items-center justify-center p-2 pb-20 md:pb-10 lg:pt-10">
  {[
    {
      year: "2023 - 2026",
      degree: "Bachelor's in Computer Science",
      college: "University College of Engineering, JNTUK Kakinada",
    },
    {
      year: "2020 - 2023",
      degree: "Diploma in Computer Engineering",
      college: "AANM & VVRSR Polytechnic, Gudlavalleru",
    },
    {
      year: "2019 - 2020",
      degree: "Secondary School Certificate",
      college: "Vivekananda Centenary High School, Vijayawada",
    },
  ].map((item, idx) => (
    <div
      key={idx}
      className="relative w-full sm:w-[400px] lg:w-[500px] xl:w-[550px] mx-auto p-[2px] rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 shadow-xl my-4"
    >
      <div>
        <p className="text-sm text-white mb-1 text-center w-full">
            {item.year}
          </p>
      </div>
      <div className="flex flex-row bg-black/80 rounded-xl p-4 backdrop-blur-md h-full items-center gap-4">
        <div className="flex-shrink-0">
          <GraduationCap size={40} className="text-pink-400" />
        </div>
        <div className="flex flex-col">
          
          <h2 className="text-xl font-semibold text-white mb-1">{item.degree}</h2>
          <h2 className="text-lg text-gray-300 mb-1">{item.college}</h2>
        </div>
      </div>
    </div>
  ))}
</div>  
      <div className="order-1 lg:order-1 flex items-center justify-center">
            <Lottie 
  animationData={animation} 
  loop={true} 
  className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px]" 
/>
        </div>
    </div>
    </section>
  )
}

export default Education
