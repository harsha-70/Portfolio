import { RiReactjsLine } from "react-icons/ri";
import { 
  SiJavascript, SiHtml5, SiCss3, SiAngular, 
  SiPhp, SiCanva, SiMysql, SiNodedotjs, 
  SiMongodb, SiTensorflow, SiC, SiCplusplus, 
  SiPython, SiR, SiGit 
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import Marquee from "react-fast-marquee";

const Skills = () => {
    const technologies = [
        { icon: <SiHtml5 className='text-6xl' />, name: 'HTML', color: 'text-orange-500' },
        { icon: <SiCss3 className='text-6xl' />, name: 'CSS', color: 'text-blue-500' },
        { icon: <SiJavascript className='text-6xl' />, name: 'JavaScript', color: 'text-yellow-400' },
        { icon: <SiAngular className='text-6xl' />, name: 'Angular', color: 'text-red-500' },
        { icon: <RiReactjsLine className='text-6xl' />, name: 'React', color: 'text-cyan-400' },
        { icon: <SiNodedotjs className='text-6xl' />, name: 'Node.js', color: 'text-green-500' },
        { icon: <SiC className='text-6xl' />, name: 'C', color: 'text-blue-400' },
        { icon: <SiCplusplus className='text-6xl' />, name: 'C++', color: 'text-blue-600' },
        { icon: <DiJava className='text-6xl' />, name: 'Java', color: 'text-red-400' },
        { icon: <SiPython className='text-6xl' />, name: 'Python', color: 'text-blue-300' },
        { icon: <SiR className='text-6xl' />, name: 'R', color: 'text-blue-700' },
        { icon: <SiGit className='text-6xl' />, name: 'Git', color: 'text-orange-600' },
        { icon: <SiMongodb className='text-6xl' />, name: 'MongoDB', color: 'text-green-400' },
        { icon: <SiTensorflow className='text-6xl' />, name: 'TensorFlow', color: 'text-orange-400' },
        { icon: <SiPhp className='text-6xl' />, name: 'PHP', color: 'text-purple-500' },
        { icon: <SiCanva className='text-6xl' />, name: 'Canva', color: 'text-teal-400' },
        { icon: <SiMysql className='text-6xl' />, name: 'MySQL', color: 'text-blue-500' }
      ];
  return (
    <section id="skills" className="max-w-9xl mx-auto px-4 lg:px-4 relative flex flex-col items-center  py-4 lg:py-12 my-12 lg:my-8">

    <div className="max-w-xl w-full flex flex-wrap items-center justify-center my-8 mb-20 px-2">
  {/* Left line */}
    <div className="flex-grow h-[2px] bg-pink-600"></div>

    {/* Ribbon box */}
    <div className="bg-gradient-to-r from-pink-500 to-violet-600 p-[2px] rounded-lg hover:from-violet-600 hover:to-pink-500 transition-all duration-300 ">
      <div className="bg-[#0d1224] px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg md:text-xl font-semibold text-white rounded-lg text-center whitespace-nowrap">
        Skills
      </div>
    </div>

    {/* Right line */}
    <div className="flex-grow h-[2px] bg-violet-600"></div>
</div>
      <div className="w-full overflow-hidden my-4 py-4"> 
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          style={{
            overflow: 'hidden',
            msOverflowStyle: 'none',  
            scrollbarWidth: 'none',
            overflow:'visible'  
  }}
  className="[&::-webkit-scrollbar]:hidden" 
        >
          {technologies.map((tech, index) => (
              <div
                key={index}
                className='flex-shrink-0 flex flex-col items-center justify-center rounded-xl 
                border border-white/20 p-6 w-32 h-32 mx-6 
                bg-white/10 backdrop-blur-md shadow-lg 
                transition-all hover:scale-110 hover:border-2 duration-200  hover:shadow-white-800/50'>
                
            
                <div className={`${tech.color} mb-2`}>
                  {tech.icon}
                </div>
                <h2 className='text-lg font-medium text-center text-neutral-300'>{tech.name}</h2>
              </div>
            ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Skills
