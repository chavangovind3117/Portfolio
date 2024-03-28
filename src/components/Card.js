import React from 'react'
import Button from './Button'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";


const Card = ({ desc, skillIcon }) => {
    return (
        <div className='relative py-12 h-[200px] sm:h-[250px] xl:min-h-[550px] lg:h-[400px] md:min-h-[300px] md:h-[350px] z-0 shadow-shadowBox group '>

            <img src={desc.image} className='absolute top-0 left-0 bottom-0 right-0 w-full h-[200px] sm:h-[250px] xl:min-h-[550px] lg:h-[400px] md:min-h-[300px] md:h-[350px] bg-no-repeat' />
            <div className='flex absolute top-0 bottom-0 left-0 right-0 z-10 bg-bgGray opacity-60 '></div>
            <div className='flex absolute top-0 bottom-0 left-0 right-0 group-hover:animate-blueTint z-20 origin-left opacity-70 group-hover:bg-indigo-400 transition ease-in-out '></div>
            <div className=''>
                <div className='flex flex-col md:w-[90%] lg:w-[70%] gap-2 md:gap-3 lg:gap-4 p-8 absolute sm:left-[5%] left-[10%] xl:left-[10%] xl:bottom-[20%] sm:bottom-1 bottom-0 md:bottom-[10%] text-white z-30 group-hover:scale-110 transition-all duration-500 ease-in-out'>
                    {/* skills icon */}
                    <div className='flex flex-wrap gap-2.5 w-[80%]'>
                        {
                            skillIcon.map((icon) => (
                                <div key={icon.id}><img src={icon} className='size-4 sm:size-8 md:size-12' /></div>
                            ))
                        }
                    </div>
                    {/* title */}
                    <dvi className='flex xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-medium '>
                        <p>{desc.title}</p>
                    </dvi>
                    {/* desc */}
                    <div className='flex sm:w-[90%] md:w-[80%] lg:w-[70%] text-xs sm:text-base md:text-sm italic'>
                        <p>{desc.description}</p>
                    </div>
                    {/* button */}
                    <div className='flex gap-4 items-center '>
                        <a href={desc.href} target='_blank'>
                            <Button text="Visit Site" />
                        </a>

                        {/* link icon */}
                        <a href={desc.gitrepo} target='_blank'><FaGithub className='text-2xl lg:text-3xl xl:text-4xl hover:text-orange transition duration-500 ease-in-out ' /></a>
                        <a href={desc.gitrepo} target='_blank'><FaLink className='text-2xl lg:text-3xl xl:text-4xl hover:text-orange transition duration-500 ease-in-out ' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card