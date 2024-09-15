import React from 'react'
import { motion } from 'framer-motion';
import WorkProject from './WorkProject'
import python from '../../public/assets/python.png'
import opencv from '../../public/assets/opencv.png'
import react from '../../public/assets/react.png'
import tensorflow from '../../public/assets/tensorflow.png'
import react2048 from '../../public/assets/react2048.png'
import documentScanner from '../../public/assets/documentScanner.png'
import sudokuSolver from '../../public/assets/sudokuSolver.png'
import yolo from '../../public/assets/yolo.png'
import yoloObjectDetection from '../../public/assets/yoloObjectDetection.png'

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
        },
        {
            name: 'Document Scanner',
            description: 'A Python-based document scanner that processes images to detect and extract documents. This script leverages OpenCV to handle image processing tasks and generates results saved in a specified directory.',
            githubLink: 'https://github.com/Priya-753/Document-Scanner',
            projectLink: '',
            tech: ['Python', 'OpenCV'], 
            photo: [python, opencv],
            projectPhoto: documentScanner
        },
        {
            name: 'Sudoku Solver',
            description: 'A Python-based sudoku solver that processes sudoku puzzle images and solves it using OpenCV and Py Sudoku',
            githubLink: 'https://github.com/Priya-753/Sudoku-Solver',
            projectLink: '',
            tech: ['Python', 'OpenCV', 'Tensorflow'], 
            photo: [python, opencv, tensorflow],
            projectPhoto: sudokuSolver
        },
        {
            name: 'Object Detection',
            description: 'A Python-based image detection project that processes images to detect objects using the YOLO (You Only Look Once) model. This script leverages OpenCV and the YOLOv3 model for detecting objects in images and saves the results.',
            githubLink: 'https://github.com/Priya-753/YOLO-Object-Detection',
            projectLink: '',
            tech: ['Python', 'OpenCV', 'YOLO'], 
            photo: [python, opencv, yolo],
            projectPhoto: yoloObjectDetection
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
                    className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {projects.map((project, key) => (
                                <div key={key} data-aos="fade-up" className="mb-12">
                                    <WorkProject project={project} id={key} />
                                </div>
                            ))}

                </motion.div>
            </div>
        </div>
    )
}

export default Projects