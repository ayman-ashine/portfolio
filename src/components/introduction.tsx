'use client'

import Image from "next/image"

export function Introduction() {

    return (

        <div className="section flex-col-reverse md:flex-row">

            <div className="bg-blue-500 origin-top-left -rotate-45 opacity-10 absolute top-0 left-0 w-[80%] h-[100%]"></div>

            <div
                className="flex flex-col justify-center gap-2 w-full h-1/2 md:w-1/2 md:h-full"
            >
                <div className="title">Welcome!</div>
                <div className="title">I am Ayman Achain</div>
                <div className="text">
                    Experienced full-stack developer and graphic designer, Passionate about diverse technologies, adept at simplifying and creating adaptable digital systems. Continuously thirsty for innovation.
                </div>
            </div>

            <div
                className="flex items-center justify-center w-full h-1/2 md:w-1/2 md:h-full"
            >
                <Image
                    className="w-full h-full object-contain"
                    src={'/avatar.png'}
                    width={500}
                    height={500}
                    alt="Avatar"
                />
            </div>

        </div>

    )

}