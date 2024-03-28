import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Button from './Button';
import image from "../assets/user.png";
import dots from "../assets/dots.png";

const Hero = () => {
    return (
        <div className='flex gap-4 flex-col md:flex md:flex-row-reverse md:w-[90%] lg:w-[80%] mx-auto p-6 lg:gap-10 xl:gap-16 xl:w-[1200px] mt-6'>

            {/* Hero section Right */}

            <div className='flex mx-auto justify-center items-center px-1 w-[80%] md:w-[80%] lg:w-full lg:translate-x-10 '>
                <img src={image} className='rounded-md p-6 animate-wiggle shadow-shadowPhoto  bg-opacity-80' />
            </div>

            {/* Hero section Left */}
            <div className='flex flex-col gap-4 mx-auto py-4 lg:gap-8 lg:w-[150%] lg:mt-28 xl:w-[155%] xl:gap-10 xl:mt-28'>
                <h1 className='text-2xl lg:text-3xl lg:font-light xl:text-4xl xl:font-light text-gray'>Hi! Govind Chavan</h1>
                <p className='text-3xl lg:text-4xl lg:font-light xl:text-5xl xl:font-light text-gray'>I am a <span className='text-orange lg:font-normal lg:text-4xl xl:font-normal xl:text-5xl'>
                    <TypeAnimation
                        sequence={[
                            'Coder',
                            1000,
                            'Web Developer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            'Backend Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    /></span>
                </p>
                <p className='md:w-[85%] xl:w-[80%] text-gray font-normal '>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>

                <Button text="Hire Me" />

            </div>

        </div>
    )
}

export default Hero