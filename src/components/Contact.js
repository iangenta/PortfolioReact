import React from 'react';
import useForm from '../assets/useForm';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  const initialData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const onValidate = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = 'name cannot be empty'
    } else if (!regexName.test(form.name)){
      errors.name = 'the name field accepts only letters and spaces'
    }

    if (!form.email.trim()) {
      errors.email = 'email cannot be empty'
    } else if (!regexEmail.test(form.email)){
      errors.email = 'mail does not have a valid format'
    }

    if (!form.subject.trim()) {
      errors.subject = "cannot be empty"
    } else if (!regexName.test(form.subject)){
      errors.subject = 'the subject field accepts only letters and spaces'
    }

    if (!form.message.trim()) {
      errors.message = 'message cannot be empty'
    } else if (!regexComments.test(form.message)){
      errors.message = 'This field accepts only 255 characters'
    }

    return errors
  }

  const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)


  return (

    <section className=' py-16 lg:section ' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>

            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90x] leading-none mb-12'>Let's talk about <br />your projects!</h2>


            </div>


          </motion.div>



          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' flex-1' action='https://formsubmit.co/fd170b4a678287d427d37db88ff3b3af' onSubmit={handleSubmit} method='POST' >

            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' name='email' placeholder='Your email' onChange={handleChange} />
            {errors && errors.email && <span className='text-accent'>{errors.email}</span>}

            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name='name' placeholder='Your name' value={form.name} onChange={handleChange} />
            {errors && errors.name && <span className='text-accent'>{errors.name}</span>}
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' name='subject' placeholder='Subject'  value={form.subject} onChange={handleChange} />
            {errors && errors.subject && <span className='text-accent'>{errors.subject}</span>}
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message'  value={form.message} name='message' onChange={handleChange} ></textarea>
            {errors && errors.message && <span className='text-accent'>{errors.message}</span>}
            <button className='btn btn-lg'>Send Message </button>
            <input type="hidden" name="_next" value="http://localhost:3000"></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </motion.form>




        </div>

      </div>






    </section>



  );
};

export default Contact;