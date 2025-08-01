import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <Image 
                src="/footer-grid.svg"
                alt="grid"
                width={1920}
                height={1080}
                className="w-full h-full opacity-50 object-cover"
            />
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                I am always open to <span className="text-purple">learn new things</span>
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s connect!
            </p>
            <a href="mailto:vinli@bu.edu">
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Vincent Li</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <a href={profile.link}> 
                            <Image src={profile.img} alt={profile.id} width={20} height={20} /> 
                        </a>
                        
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer