import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UX/UI Design',
    description: 'Incididunt ea enim dolor esse in ex est est aliquip. ',
    link: 'Learn more'
  },
  {
    name: 'Front end Development',
    description: 'Exercitation consequat velit consectetur laborum occaecat quis.e',
    link: 'Learn more'
  },
  {
    name: 'Analysis',
    description: 'Incididunt ea enim dolor esse in ex est est aliquip. ',
    link: 'Learn more'
  }
];
const Services = () => {
  return (
  <section className='section' id='services'>
    <div className='container mx-auto'>
      <motion.div className='flex flex-col lg:flex-row'>
        <div variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false, amount:0.3}} 
        className='flex-1 bg-services bg-contain bg-no-repeat h-[640px] mix-blend-ligten bg-top'>
          <h2 className='h2 text-accent mb-6 ' >
            What I do
          </h2>

          <h3 className='h3 max-w-[455px] mb-16'>
            I'm a Freelance with 2 years of experience
          </h3>

          <button className=' btn btn-sm '>See my work</button>

        </div>


        <div>

          <div className='flex-1'>
            {services.map((service, index) => {

              const { name, description, link } = service;
              return (<div className='border-b border-white/20 [h-146] mb-[38px] flex' key={index}>
                <div className='max-w-[476PX]'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{name}</h4>
                  <p className='font-secondary leading-tight'>{description}</p>
                </div>
                <div className='flex flex-col flex-1 items-end'><a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'></a> <a href='#'><BsArrowUpRight/></a> <a href='#' className='text-gradient text-sm '>{link}</a></div>
              </div>
              );
            })}
          </div>


        </div>
      </motion.div>

    </div>

  </section>);
};

export default Services;
