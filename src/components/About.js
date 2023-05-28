import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const About = () => {
  const [ref, inView]=useInView({
    threshold:0.5
  })
  return(
    <section className='section' id='about' ref={ref}>
        <div className='container mx-auto'>
          <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
            <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3}}className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-ligten bg-top'></motion.div>

            <motion.div variants={fadeIn('left',0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.3}} className='flex-1'>
              <h2 className='text-accent h2'>About me
                </h2>   
              <h3 className='h3 mb-4'>I'm a Freelance Developer
                </h3>  
              <p className='mb-6'>
              Experienced Freelance Full Stack Developer with a strong background in UX/UI design, data analytics, and web development. Skilled in developing robust applications and leveraging data insights to drive business growth. Committed to delivering high-quality solutions that meet clients' technological requirements. Open to new opportunities to apply my skills and contribute to the success of businesses.
                </p>     


                <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                 
                  <div>
                  <div className='text-[40px] font-ter
                   text-gradient mb-2'>+{inView ?
                    <CountUp start={0} end={1} duration={4} />:null
                  }
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'> Years of Experierience</div>
                  </div>
                  
  

                  <div>
                  <div className='text-[40px] font-ter
                   text-gradient mb-2'>+{inView ?
                    <CountUp start={235} end={250} duration={4} />:null
                  }
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'> Projects completed</div>
                  </div>                  

                  <div>
                  <div className='text-[40px] font-ter
                   text-gradient mb-2'>+{inView ?
                    <CountUp start={25} end={30} duration={4} />:null
                  }
                  </div>
                  <div className='font-primary text-sm tracking-[2px]'>  Sastisfied Clients</div>
                  </div>   
                  </div> 
                  <div>
                    <div className='flex gap-x-8 items-center'>

                    </div>
                  </div>
            </motion.div>
          </div>
        </div>
    </section>
  )
 
};

export default About;
