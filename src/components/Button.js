import React from 'react'

const Button = ({ text }) => {
    return (
        // <div className='bg-orange w-fit shadow-2xl text-white origin-left hover:text-black hover:bg-white transition duration-200'>
        //     <p className='py-2 px-5 lg:px-6 xl:py-3 xl:px-9 font-medium z-10 text-xs sm:text-sm lg:text-base xl:text-lg'>{text}</p>
        // </div>

        <div className="btn-pink font-medium py-2 px-5 lg:px-6 xl:py-2 xl:px-7 text-xs sm:text-sm lg:text-base xl:text-lg" id="btn">{text}</div>
    )
}

export default Button