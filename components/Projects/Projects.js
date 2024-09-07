import React from 'react'
import { motion } from 'framer-motion';
import WorkProject from './WorkProject'
import dsa from '../../public/assets/data-structure.png'
import react from '../../public/assets/react.png'
import react2048 from '../../public/assets/react2048.png'

const Projects = () => {
    const projects = [
        //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
        //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
        {
            name: '2048',
            description: 'The simple 2048 game in React is a classic sliding puzzle game where players combine matching tiles to reach the number 2048.',
            githubLink: 'https://github.com/Priya-753/2048-in-react',
            projectLink: 'https://priya-753.github.io/2048-in-react/',
            tech: ['React'], 
            photo: [react],
            projectPhoto: react2048
        }
    ]

    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16 '>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className='tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-white to-white'>
                        PROJECTS
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 gap-8'>

                    <div className="relative mx-auto py-10 px-5 max-w-4xl">
                        <div className="py-6 px-10">
                            {projects.map((project, key) => (
                                <div key={key} data-aos="fade-up" className="mb-12">
                                    <WorkProject project={project} id={key} />
                                </div>
                            ))}
                        </div>
                        {/* 
                        {userinfo.blogs.visible && (
                            <div className="bg-currentTheme-secondary">
                                {blogList && (
                                    <Carousel currentTheme={currentTheme}>
                                        {blogList.slice(0, 6).map((blog, key) => (
                                            <CarouselItem key={key} currentTheme={currentTheme}>
                                                <BlogCard blog={blog} currentTheme={currentTheme} />
                                            </CarouselItem>
                                        ))}
                                    </Carousel>
                                )}
                            </div>
                        )} */}
                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default Projects