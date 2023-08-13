import Image from 'next/image'
import { Button } from './modules'

export const Introduction = () => {
    return (
        <div className='w-full h-full grid grid-cols-2 items-center justify-around animate-scale'>
            <div className='mx-auto border'>
                <Image src='/profile.png' width={400} height={400} alt='Profile' />
            </div>
            <div className='text-center md:text-start border'>
                <div className='mb-5'>
                    <p className='text-yellow-400 font-black text-4xl md:text-6xl uppercase'>Welcome!</p>
                    <p className='text-blue-400 font-black text-4xl md:text-6xl uppercase'>I am Gpx Zero</p>
                </div>
                <p className='text-blue-400 font-light font-ubuntu text-md mb-5'>
                    Experienced full-stack developer and graphic designer, Passionate about diverse technologies, adept at simplifying and creating adaptable digital systems. Continuously thirsty for innovation.
                </p>
                <Button>Contact Me</Button>
            </div>
        </div>
    )
}