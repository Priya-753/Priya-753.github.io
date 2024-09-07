import React from 'react'
import Image from 'next/image'
import html from '../../public/assets/html.png'
import css from '../../public/assets/css3.png'
import js from '../../public/assets/javascript.png'
import react from '../../public/assets/react.png'
import redux from '../../public/assets/redux.png'
import typescript from '../../public/assets/typescript.png'
import java from '../../public/assets/java.png'
import next from '../../public/assets/nextjs.png'
import bootstrap from '../../public/assets/bootstrap.png'
import tailwind from '../../public/assets/tailwind.png'
import github from '../../public/assets/github.png'
import python from '../../public/assets/python.png'
import material from '../../public/assets/material.png'
import dsa from '../../public/assets/data-structure.png'
import { motion } from 'framer-motion';

const Skills = () => {
    const frontEndSkills = [
        { skill: 'Next JS', src: next, level: 10 },
        { skill: 'React', src: react, level: 9 },
        { skill: 'Redux', src: redux, level: 8 },
        { skill: 'Typescript', src: typescript, level: 10 },
        { skill: 'HTML5', src: html, level: 11 },
        { skill: 'CSS3', src: css, level: 7 },
        { skill: 'Javascript', src: js, level: 10 },
        { skill: 'Material UI', src: material, level: 8 },
        { skill: 'Bootstrap', src: bootstrap, level: 8 },
        { skill: 'Tailwind', src: tailwind, level: 8 },
    ];

    const backEndSkills = [
        { skill: 'Java', src: java, level: 10 },
        { skill: 'Python', src: python, level: 8 },
        { skill: 'Spring Boot', src: redux, level: 9 },
        { skill: 'Hibernate', src: typescript, level: 8 },
    ];

    const toolsEndSkills = [
        { skill: 'Git/Github', src: github, level: 11 },
        { skill: 'Jira', src: github, level: 11 },
    ];

    const fundamentals = [
        { skill: 'DSA', src: dsa, level: 3}
    ]

    const levels = {
        1: 'w-1/12', 
        2: 'w-2/12', 
        3: 'w-3/12', 
        4: 'w-4/12', 
        5: 'w-5/12', 
        6: 'w-6/12', 
        7: 'w-7/12', 
        8: 'w-8/12', 
        9: 'w-9/12', 
        10: 'w-10/12',
        11: 'w-11/12',
        12: 'w-full' 
    };

    return (
        <div id='skills' className='w-full lg:h-screen p-2 bg-[#111827]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className='tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-300'>
                        SKILLS
                    </h2>
                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }} >
                    <h3 className='py-5 text-white'>Front End</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {frontEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col text-white items-center justify-center'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className='py-5 text-white'>Back End</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {backEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col items-center justify-center text-white'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <h3 className='py-5 text-white'>Tools</h3>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center'>
                        {toolsEndSkills.map((skillDetail, index) => {
                            return (
                                <div className='p-6 ease-in duration-300'>
                                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                        <div className='flex flex-col items-center justify-center text-white'>
                                            <h3>{skillDetail.skill}</h3>
                                        </div>
                                        <div className='m-auto'>
                                            <Image src={skillDetail.src} width='35' height='35' alt='/' />
                                        </div>
                                    </div>
                                    <div className='pt-2'>
                                        <div className="w-full bg-gray-200 h-1 flex justify-between ">
                                            <div className={`${levels[skillDetail.level]} bg-green-500 h-1`} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Skills