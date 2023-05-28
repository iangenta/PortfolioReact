import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import imagen1 from '../assets/onlinebk.png';
import imagen2 from '../assets/itbank.png';
import imagen3 from '../assets/jvnts.png';


const Work = () => {
  return (
    <section id='work' className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
            <p className='max-w-sm mb-16 lg:mb-0'>simple preview of some of my recent projects. 
All of them were designed and launched by me </p>
            <div><button className='btn btn-sm'>View all projects</button></div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>

              <img src={imagen1} alt="" className='group-hover:scale-125 transition-all duration-500' />
              {/* pre-title */}
              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design & Front end Development</span>
              </div>

              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Online banking</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>

              <img src={imagen2} alt="" className='group-hover:scale-125 transition-all duration-500' />

              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design & Fullstack Development</span>
              </div>

              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Online banking</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>


              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
              </div>


              <img src={imagen3} alt="" className='group-hover:scale-125 transition-all duration-500' />


              <div className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design & Front end Development</span>
              </div>

              <div className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Juventus Academy Page</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section >);
};

export default Work;