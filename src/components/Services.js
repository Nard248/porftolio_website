import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Data Analysis',
    description:
      'Exploratory and Statistical Analysis with technologies like Python, R, PowerBI etc. Hyphotesis testings, A/B testings',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
      'Front-end with React Framework. Back-end with Flask, Django, and starting with GoLang. APIs with Fast API and Rest Framework',
    link: 'Learn more',
  },
  {
    name: 'ML Engineering',
    description:
      'From standard learning types, to Deep Learning. Experienced with Hybrid Learning systems. With Python and C++',
    link: 'Learn more',
  },
  {
    name: 'Computer Vision',
    description:
      'Using ANN(Artificial Neural Networks) conducted some Computer Vision projects using Tensorflow, Pytorch, OpenCV.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Data Scientist with over 3 years of experience.
            </h3>
            <button class='btn btn-sm'><a href='https://github.com/Nard248'>See my work</a></button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
