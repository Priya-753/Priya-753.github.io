import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import dealsplus from '../../public/assets/dealsplus.png'
import spring from '../../public/assets/spring.png'
import mysql from '../../public/assets/MySql.png'
import nextjs from '../../public/assets/nextjs.png'
import docker from '../../public/assets/docker.png'
import flutter from '../../public/assets/flutter.png'
import android from '../../public/assets/android.png'
import googleCloud from '../../public/assets/googleCloud.png'
import postgres from '../../public/assets/postgres.png'
import avinya from '../../public/assets/avinya.png'
import desis from '../../public/assets/desis.png'
import python from '../../public/assets/python.png'
import react from '../../public/assets/react.png'
import georgiaTech from '../../public/assets/georgiaTech.png'
import psgTech from '../../public/assets/psgTech.png'

const Education = () => {
    const timelineData = [
        {
            date: "Aug 2024 Dec 2025",
            title: "Georgia Institute of Technology | MS in CS",
            description: "I am pursuing master's with a focus on Artificial Intelligence, Computer Vision, and a specialization in Machine Learning to advance my expertise in cutting-edge technologies and their applications.",
            logoSrc: georgiaTech,
            techStack: [],
            techStackImgWidth: [],
            techStackImgHeight: []
        },
        {
            date: "Dec 2022 July 2024",
            title: "Dealsplus Pvt Ltd | SDE II",
            description: "I developed a way to visualise private equity ownership that reduced data visualization time by 70% and increased accuracy by 40%, leading to a 30% rise in new client contracts and earning me the highest annual bonus.",
            logoSrc: dealsplus,
            techStack: [nextjs, spring, mysql, docker],
            techStackImgWidth: [35, 35, 35, 35],
            techStackImgHeight: [35, 35, 35, 35]
        },
        {
            date: "Mar 2021 Dec 2022",
            title: "Avinya | Co Founder",
            description: "I led the development a highly efficient POS and inventory management system in Phase 1 which led to a scalable SAAS product in Phase 2, driving significant improvements in retail expansion, operational efficiency, and stakeholder transparency.",
            logoSrc: avinya,
            techStack: [android, flutter, googleCloud, postgres],
            techStackImgWidth: [35, 55, 105, 35],
            techStackImgHeight: [35, 55, 105, 35]
        },
        {
            date: "Dec 2018 Mar 2021",
            title: "D.E. Shaw & Co | Intern & Member Tech",
            description: "Developed a web application for analyzing macroeconomic impacts on investments, including REST APIs for time series data, optimized API performance, and led migration from Python 2 to 3.",
            logoSrc: desis,
            techStack: [python, react],
            techStackImgWidth: [35, 35],
            techStackImgHeight: [35, 35]
        },
        {
            date: "June 2015 May 2019",
            title: "PSG College Of Technology | BE in CSE",
            description: "I completed my Bachelor’s degree in Computer Science and Engineering at PSG College of Technology, where I gained a solid foundation in computer science principles and honed my technical skills.",
            logoSrc: psgTech,
            techStack: [],
            techStackImgWidth: [],
            techStackImgHeight: []
        },
    ];


    return (
        <div id='education' className='w-full lg:h-screen p-2 bg-[#111827]'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className='tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-white to-white'>
                        EXPERIENCE
                    </h2>

                </motion.div>

                <motion.div initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }} >
                    <div className="relative mx-auto py-10 px-5 max-w-4xl">
                        <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 transform -translate-x-1/2"></div>
                        <ul className="list-none p-0 m-0">
                            {timelineData.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative mb-12"
                                >
                                    <div className="flex items-center">
                                        <div className="w-16 h-16 mr-4 flex-shrink-0">
                                            <span className="text-gray-400 text-xs">{item.date}</span>
                                        </div>
                                        <div className="w-full">
                                            <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300">
                                                <div className='flex justify-between '>
                                                    {/* <Image src={item.logoSrc} alt={item.title} width={110} height={25} /> */}
                                                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                                                    <div className='flex items-center ml-2 space-x-2 -mt-8'>
                                                        {item.techStack.map((tech, index) => <Image src={tech} width={item.techStackImgWidth[index]} height={item.techStackImgHeight[index]}/>)}
                                                        </div>
                                                </div>
                                                <p className='text-gray-600 text-xs'>{item.description}
                                                    </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Education
