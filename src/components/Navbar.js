import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {


    const [menu, setMenu] = useState(false);

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

    return (
        <div className='sticky top-0 z-10 bg-Mercury rounded-sm shadow-buttonShoadow opacity-90'>
            <nav className='flex justify-between items-center mx-auto p-4 md:p-4 md:w-[90%] lg:w-[80%] lg:py-8 xl:mt-1 xl:w-[1200px] '>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:font-light'><a href='#'>Govind Chavan</a></h1>
                <ul className='hidden md:flex text-xl gap-8'>
                    {
                        navLinks.map(({ id, name }) => (
                            <li key={id} className='cursor-pointer hover:font-semibold'><a href={`#${name}`}>{name}</a></li>

                        ))
                    }
                </ul>

                <div onClick={() => setMenu(!menu)}
                    className='flex relative md:hidden '>
                    {
                        menu ? <RxCross2 size={30} /> : <TbMenuDeep size={30} />
                    }
                    {
                        menu && (
                            <ul className='flex flex-col text-lg absolute top-10 -left-20 outline-gray rounded-3xl gap-2 z-10 bg-Mercury p-6'>
                                {
                                    navLinks.map(({ id, name }) => (
                                        <li key={id} className='hover:font-semibold'><a href={`#${name}`}>{name}</a></li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>


            </nav>

        </div>
    )
}

export default Navbar