import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Button from './Button';

const ContactSection = () => {
    const form = useRef();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({ firstname: "", email: "", subject: "", message: "" });
        }
    }, [isSubmitSuccessful, reset]);

    const sendEmail = () => {

        emailjs
            .sendForm('service_5gko60p', 'template_hb34imq', form.current, {
                publicKey: 'K5ngr7YPEnHAsdB7p',
            })
            .then(
                () => {
                    toast.success("Message Send successfully");
                    console.log('SUCCESS!');
                },
                (error) => {
                    toast.error("Error in Sending Message");
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='bg-Mercury'>
            <div className='flex flex-col md:w-[90%] lg:w-[80%] mx-auto gap-4 md:gap-10 px-8 sm:px-16 pt-4 xl:w-[1200px]'>
                <div className='flex flex-col w-full font-medium gap-3'>
                    <h1 id='Contact Me' className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-orange '>Contact Me</h1>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#343d68aa]'>Questions, Thoughts, Or Just Want To Say Hello?</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(sendEmail)} ref={form} className='flex items-center mx-auto md:w-[90%] lg:w-[80%]'>
                        <div className='flex flex-col gap-0 w-full mx-auto text-lg font-noraml'>
                            {/* firstname */}

                            <input
                                className='flex items-center w-full h-10 rounded-md px-3 border-none mt-7 shadow-inputShadow'
                                type='text'
                                name='firstname'
                                id='firstname'
                                placeholder='Enter Your Name'
                                {...register("firstname", { required: true })}
                            />
                            {
                                errors.firstname && (
                                    <span className='text-orange font-normal text-sm mt-2'>* Please Enter Your Name</span>
                                )
                            }

                            {/* email */}

                            <input
                                className='flex items-center w-full h-10 rounded-md px-3 border-none mt-7 shadow-inputShadow'
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                            />
                            {
                                errors.email && (
                                    <span className='text-orange font-normal text-sm mt-2'>* Please Enter Your Email</span>
                                )
                            }

                            {/* subject */}

                            <input
                                className='flex items-center w-full h-10 rounded-md px-3 border-none mt-7 shadow-inputShadow'
                                type='text'
                                name='subject'
                                id='subject'
                                placeholder='Enter Your Subject'
                                {...register("subject", { required: true })}
                            />
                            {
                                errors.subject && (
                                    <span className='text-orange font-normal text-sm mt-2'>* Please Enter Your Subject</span>
                                )
                            }

                            {/* message */}

                            <textarea
                                className='flex items-center w-full rounded-md pt-2 px-3 border-none mt-7 shadow-inputShadow'
                                name='message'
                                id='message'
                                rows={6}
                                placeholder='Enter Your Message'
                                {...register("message", { required: true })}
                            />
                            {
                                errors.message && (
                                    <span className='text-orange font-normal text-sm mt-2'>* Please Enter Your Message</span>
                                )
                            }


                            <button type='submit' className='btn-pink flex items-center hover:scale-90 bg-orange text-white gap-3 py-3.5 px-10 flex-initial my-10 w-fit text-base sm:text-lg xl:text-xl font-normal shadow-buttonShoadow border-0'>
                                Send Message
                                <FaPaperPlane size={24} />
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection