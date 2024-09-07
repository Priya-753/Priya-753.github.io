import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';
const Hero = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                <div className='w-full h-screen text-center bg-[#111828]'>
                    <div

                        className='flex justify-center items-center p-3 max-w-[1240px] w-full h-full mx-auto'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ y: [-50, 0], opacity: 3 }}
                        >
                            <h3 className='  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-300'>Hello World</h3>
                            <h1 className='  font-extrabold text-transparent text-6xl  bg-clip-text bg-gradient-to-r from-white to-white'>I am Priya!</h1>
                            <h2 className='text-gray-600  py-3'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("A Full Stack Developer")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to solve complex problems.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to learn and adapt.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to collaborate.")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("I love to create user centric designs.")
                                            .start();
                                    }}
                                />
                            </h2>

                            {/* <h2 className='text-gray-600  py-3'>Frontend Developer</h2> */}
                            <div className='flex justify-between items-center m-auto max-w-[280px] py-5'>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300'>
                                    <a
                                        href='https://github.com/Priya-753'
                                        target={"_blank"}
                                        rel={"noreferrer"}

                                    ><FaGithub /></a>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300'>
                                    <a
                                        href='https://www.linkedin.com/in/priyadarshini-tamilselvan-4652b1b0/'
                                        target={"_blank"}
                                        rel={"noreferrer"}>
                                        <FaLinkedinIn />


                                    </a>
                                </div>
                                <div onClick={() => window.location.href = 'mailto:priya61197@gmail.com'} className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-yellow-300'>

                                    <AiOutlineMail />
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </motion.div>
        </>



    )
}

export default Hero