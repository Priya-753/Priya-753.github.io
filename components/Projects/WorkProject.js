import { useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from "react-swipeable";
import { FaGithub, FaPaperPlane } from "react-icons/fa";

const WorkProject = ({ project }) => {
  const [index, setIndex] = useState(0);

  const ahead = () => {
    if (index === project.photo.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const back = () => {
    if (index === 0) {
      setIndex(project.photo.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => ahead(),
    onSwipedRight: () => back()
  });

  return (
    <div>
      <div>
        <div className="flex justify-between mb-5">
          <h1 className="text-xxxl font-semibold mb-1">{project.name}</h1>
          <div className='flex items-center ml-2 space-x-2 -mt-4'>
            {project.tech.map((tech, index) => <Image key={index} src={project.photo[index]} width={35} height={35} />)}
          </div>
        </div>
        <div>
          <div {...handlers}>
            <Image alt='thumbnail image' height='300' width='500' src={project.projectPhoto} />
          </div>
          <div>
          </div>
        </div>
        <div>
          <p className='py-2 text-gray-600'>{project.description}</p>
          <div className="flex ml-25 mt-1">
          <a className="mr-2 py-2 text-gray-600 text-xs"
              href={project.githubLink}
              target={"_blank"}
              rel={"noreferrer"}
            ><FaGithub />Github</a>
          {project.projectLink && (<a className="mr-2 py-2 text-gray-600 text-xs"
              href={project.projectLink}
              target={"_blank"}
              rel={"noreferrer"}
            ><FaPaperPlane />View</a>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProject
