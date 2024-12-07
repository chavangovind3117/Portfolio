import React from 'react'
import Card from './Card';
import Html from "../assets/stack/HTML.png";
import Css from "../assets/stack/CSS.png";
import Tailwind from "../assets/stack/Tailwind.png";
import Js from "../assets/stack/Javascript.svg";
import ExpressJs from "../assets/stack/Express.png";
import MongoDB from "../assets/stack/MongoDB.svg";
import NodeJs from "../assets/stack/NodeJs.svg";
import Redux from "../assets/stack/Redux.svg";
import ReactPng from "../assets/stack/React.png";
import image1 from "../assets/projects/Project1.png";
import image2 from "../assets/projects/Project2.png";
import image3 from "../assets/projects/tic-tac-toe.png";
// import image4 from "../assets/projects/weatherApp.jpg";
import image4 from "../assets/projects/weatherapp.png";
import image5 from "../assets/projects/Project5.png";
import image6 from "../assets/projects/Studynotionth.png";



const Project = () => {

    const cart1 = [Html, Css, Tailwind];
    const cart2 = [Html, Css, Js];
    const cart3 = [Html, Css, Js];
    const cart4 = [Html, Css, Js];
    const cart5 = [Html, Css, Js, Tailwind, ReactPng];
    const cart6 = [Html, Css, Js, Tailwind, ReactPng, Redux, NodeJs, ExpressJs, MongoDB];
    // const cart3 = [Html, Css, Js, Tailwind, ReactPng];

    const descList = [
        {
            id: 1,
            image: [image1],
            href: "https://govind-razorpay-clone.netlify.app",
            gitrepo: "https://github.com/chavangovind3117/Tic-Tac-Toe-Game.git",
            title: "Razorpay Clone",
            description: "Its is a clone static website which includes HTML & Tailwind Css created from scratch",
        },
        {
            id: 2,
            image: [image2],
            href: "https://govind-password-generator-webappli.netlify.app",
            gitrepo: "https://github.com/chavangovind3117/Password-Generator-App.git",
            title: "Generate Password",
            description: "A platform used to Generate Random & strong password",
        },
        {
            id: 3,
            image: [image3],
            href: "https://govind-tic-tac-toe-game-appli.netlify.app",
            gitrepo: "https://github.com/chavangovind3117/Tic-Tac-Toe-Game.git",
            title: "Tic_Tac_Toe",
            description: "A Website for two player game it force to think one step far from your opponents ",
        },
        {
            id: 4,
            image: [image4],
            href: "https://govind-weather-application-clone.netlify.app",
            gitrepo: "https://github.com/chavangovind3117/Weather-App-Project.git",
            title: "Weather App",
            description: "A Website for getting information about Temperature , Wind speed Humidity , clouds according to city location",
        },
        {
            id: 5,
            image: [image5],
            href: "https://govind-shopify-appi.netlify.app",
            gitrepo: "https://github.com/chavangovind3117/Shopping-Cart-App",
            title: "Shopping Cart App",
            description: "A Website for adding items to cart , and shopping through cart , in this app redux is used to maintain the state of an item",
        },
        {
            id: 6,
            image: [image6],
            href: "https://study-notion-frontend-57dmgqaxn-govind-chavans-projects.vercel.app/",
            gitrepo: "https://github.com/chavangovind3117/StudyNotion-Hosting",
            title: "StudyNotion",
            description: "a feature-rich online learning platform enabling secure user authentication, course creation, and CRUD operations for courses and user data.",
        }
    ]


    return (
        <div className='bg-Mercury mt-20'>
            <div className='felx flex-col w-[95%] sm:w-[80%]  mx-auto sm:p-4 xl:w-[1200px]'>
                <h1 id='Projects' className='flex w-full justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-orange pt-7'>Projects</h1>
                <div className='flex flex-col gap-20 sm:gap-28 w-[90%] py-12 sm:[&>*:nth-child(even)]:translate-x-20 translate-x-4 sm:-translate-x-4'>

                    <Card skillIcon={cart1} desc={descList[0]}
                    />
                    <Card skillIcon={cart2} desc={descList[1]}
                    />
                    <Card skillIcon={cart3} desc={descList[2]}
                    />
                    <Card skillIcon={cart4} desc={descList[3]}
                    />
                    <Card skillIcon={cart5} desc={descList[4]}
                    />
                    <Card skillIcon={cart6} desc={descList[5]}
                    />

                </div>
            </div>
        </div>
    )
}

export default Project