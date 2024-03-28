import React from 'react'
import Html from "../assets/stack/HTML.png";
import Css from "../assets/stack/CSS.png";
import Tailwind from "../assets/stack/Tailwind.png";
import Js from "../assets/stack/Javascript.svg";
import ReactPng from "../assets/stack/React.png";
import NodeJs from "../assets/stack/NodeJs.svg";
import Boostrap from "../assets/stack/Bootstrap.svg";
import Git from "../assets/stack/Git.svg";
import GitHub from "../assets/stack/Github.svg";
import MongoDb from "../assets/stack/MongoDB.svg";
import Bash from "../assets/stack/Bash.svg";
import Blob from "../assets/blob vector.png";

const SkilsSection = () => {

    const iconList = [Html, Css, Js, Tailwind, ReactPng, NodeJs, Boostrap, Git, GitHub, MongoDb, Bash];

    return (
        <div>
            <div id='Skills' className='relative md:flex-col lg:flex lg:flex-row justify-between items-center mx-auto w-[98%] sm:w-[80%] md:my-6 lg:my-16 p-6 sm:p-10 gap-12 xl:w-[1200px]'>
                {/* Skills Description */}
                <div className='flex w-full lg:w-[50%] flex-col '>
                    <h1 className='text-orange text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-10 font-bold'><span className='text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-normal'>M</span>e and <p>MyTech Stack</p></h1>
                    <div className='flex flex-col w-[95%] mt-4 text-gray text-xs md:text-sm xl:text-base font-normal tracking-wide'>
                        <p className='my-2'>Hi Everyone My name is John Doe I am a Full Stack Web Developer I have been working for last 3 Years and Currently I am working with a Budding Startup in USA and a full Time Freelancer. Currently I am working on NextJs and Making Beautiful UI-UX are my fey features</p>
                        <p className='my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque aspernatur, maiores voluptatum minus laudantium? Perspiciatis accusamus minima porro dolores necessitatibus, magni dolorem et qui veniam nulla sequi molestiae maxime.</p>
                        <p className='my-2'>orem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem quos ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?</p>
                    </div>
                </div>
                {/* Skills Icons */}
                <div className='relative my-12 w-[300px] sm:w-[90%] md:w-[80%] md:max-w-md lg:w-[110%] md:translate-x-10'>
                    <img src={Blob} className='absolute size-60 sm:size-96 right-3 sm:right-2 md:right-8 lg:-right-2 xl:right-15 translate-y-[10%] -translate-x-[15%] -z-10 animate-blob' />
                    <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-12 '>
                        {
                            iconList.map((icon) => (
                                <div className='hover:scale-125 transition duration-300 ease-linear'>
                                    <img src={icon} className='size-12 sm:size-16 md:size-16 xl:size-20' />
                                </div>
                            ))
                        }

                    </div>

                </div>
                <div className='hidden lg:flex absolute text-bgGray -bottom-20 -z-10 -right-20 text-9xl opacity-50 tracking-tight'>Skills</div>
            </div>
        </div>
    )
}

export default SkilsSection