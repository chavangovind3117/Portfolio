import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {

    const navLinks = [
        {
            id: 1,
            name: "Projects",
        },
        {
            id: 2,
            name: "Skills",
        },
        {
            id: 3,
            name: "Contact Me",
        },
    ]

    const iconList = [
        {
            id: 1,
            href: "https://github.com/chavangovind3117",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            href: "https://github.com/chavangovind3117",
            icon: <FaGithub />,
        },
        {
            id: 3,
            href: "https://github.com/chavangovind3117",
            icon: <FaTwitter />,
        },
        {
            id: 3,
            href: "https://github.com/chavangovind3117",
            icon: <FaInstagram />,
        },
        {
            id: 3,
            href: "https://github.com/chavangovind3117",
            icon: <MdOutlineEmail />,
        },

    ]

    return (
        <div className='bg-[#343d68]'>
            <div className='flex justify-around sm:justify-between items-center mx-auto md:w-[90%] lg:w-[80%] p-10 xl:w-[1200px]'>
                {/* navlinks */}
                <div>
                    <ul className='flex flex-col sm:flex-row md:text-base xl:text-lg gap-3 sm:gap-6 text-white'>
                        {
                            navLinks.map(({ id, name }) => (
                                <li key={id} className='hover:text-orange transition duration-500 ease-in-out'><a href={`#${name}`}>{name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* icons */}
                <div>
                    <ul className='flex flex-col sm:flex-row text-lg xl:text-lg gap-3'>
                        {
                            iconList.map((item) => (
                                <a href={item?.href} target='_blank'>
                                    <li className='text-white hover:text-orange md:text-2xl lg:text-4xl transition duration-500 ease-in-out'>{item?.icon}</li>
                                </a>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer