import React from 'react'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

const About = () => {
    return (

        <div id='about' className='w-full md:h-screen p-2 flex items-center '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div

                    className='col-span-2'>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className='tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-400'>
                            ABOUT
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='py-2 text-gray-600'>
                        Hi there! I'm Priyadarshini Tamilselvan, but you can call me Priya. I am a full-stack developer with a passion for turning complex problems into sleek, user-friendly solutions. With a strong command of NextJS, React, Redux, and Android Development, plus a solid foundation in Python, I've spent over five years honing my craft. Whether it's building intuitive front-end interfaces or diving deep into back-end logic, I'm all about creating tech that's not only functional but also delightful to use.
                        </p>
                        <p className='py-2 text-gray-600'>
                        My journey began with a Bachelor's in Computer Science, but let's be honest, my love for all things tech started way before that. I was that kid who tried to "fix" the family computer and ended up learning a whole lot about what not to do. Fast forward to now, I've gained over four years of experience as a full-stack developer, with a knack for React, Redux, and Android Development, along with a sprinkle of Python.
                        </p>
                        <p className='py-2 text-gray-600'>
                        I've been fortunate to work with some amazing teams—whether it was diving into risk tech at D.E. Shaw, or playing a key role in a venture that made life easier for MSMEs (Micro, Small, and Medium Enterprises). Recently, I’ve been diving deep into Spring Boot applications, where I’ve tackled everything from optimizing Cap Table outputs to resolving NP-hard problems by structuring complex ownership data through graphical representations at Dealsplus. I thrive on collaboration and creativity, and I'm always up for a challenge that pushes me to think outside the box.
                        </p>
                        <p className='py-2 text-gray-600'>
                        But here's the twist—I'm not just about code and algorithms. When I'm not staring at lines of code, you might find me lost in a new travel destination, playing melodies on my keyboard, or channeling my inner linguist (still working on that Spanish!). My curiosity knows no bounds, and I love exploring new passions and interests.
                        </p>
                        <p className='py-2 text-gray-600'>
                        In a nutshell, I'm a techie with a creative flair, a problem-solver with a passion for innovation, and a lifelong learner with a dash of humor. I'm on a mission to make a positive impact, one creative solution at a time, and I can't wait to see where this adventure takes me next!
                        </p>
                        <a download href='/Resume.pdf'
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 from-yellow-300 via-yellow-300 to-yellow-300 text-slate-600'>
                                Download Resume
                            </button>
                        </a>

                    </motion.div>


                </div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='w-full h-auto m-auto items-center justify-center p-4 hover:scale-105 ease-in duration-300'>

                    <Avatar sx={{ width: 260, height: 260 }}
                        alt="Priya" src="/assets/PriyaPhoto.png" />

                </motion.div>
            </div >
        </div>

    )
}

export default About