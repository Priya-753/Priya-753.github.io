import Head from 'next/head'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Skills from '@/components/Skills/Skills'
import Projects from '@/components/Projects/Projects'
import { AnimatePresence, motion } from 'framer-motion'
import Education from '@/components/Education/Education'
export default function Home() {
  return (
    <>
      <Head>
        <title>Priya | Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <AnimatePresence>

        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />

      </AnimatePresence>


    </>
  )
}
