import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import {AnimatePresence, motion} from "framer-motion"
import { fadeIn } from '../variants'
const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items center ' id='home'>
    <div className='container mx-auto'>

      <div className='flex flex-col gap-y-0 lg:flex-row lg:items-center lg:gap-x-8  important!'>
        <div className='flex-1 text-center font-secondary '>
          <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Ián <span>Genta</span></motion.h1>
          <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-6 text-center text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white '> I'm a </span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Data analyst',
              2000
            ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />

          </motion.div>
          <div className='flex flex-1 flex-col gap-x-8 lg:flex-column lg:items-center  gap-y-10 '>
          <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='mb-2 max-w-lg mx-auto lg:mx-0 '>
          Freelance Full Stack Developer with a strong background in UX/UI design, data analysis, and web development. Offering expertise in creating impactful applications and a keen eye for user experience. Committed to utilizing my skills and knowledge to support businesses in meeting their technological needs. Open to new opportunities and excited to contribute to innovative projects.
          </motion.p>
          <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}}className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'>
            <button className=''>
              <a href='#contact' className=' py-5 btn btn-lg btn-link'>Contact me</a>
            </button>
            <a href='https://github.com/iangenta' className='text-gradient btn-link '>My Portfolio</a>
          </motion.div>

          </div>

          <div  className='flex flex-1 flex-col gap-x-8 lg:flex-column lg:items-center  gap-y-10'>
          <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className='flex text-[20px] gap-x-6 max-w-max  mx-auto lg:mx-0'>
            <a href='https://linked.com/in/ian-leonel-genta'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/iangenta'>
              <FaGithub />
            </a>
            <a href='https://github.com/iangenta'>
              <FaInstagram />
            </a>
          </motion.div>

          </div>

        </div>

        <div>
        </div>

      </div>
    </div>
    </section>;
};

export default Banner;
