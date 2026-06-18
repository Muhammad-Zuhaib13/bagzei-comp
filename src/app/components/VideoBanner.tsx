'use client'
import React, { useState } from "react"
import Link from "next/link"
import ScreenContainer from "./ScreenContainer"
import Image from "next/image"

const VideoBanner = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const data = {
        videoSrc: '/assets/videos/bagei-home-banner-video.mp4',
        title: 'Meet the Mosaic Cabas',
        description: 'Our new tote designed for everything the day holds.',
        cta: {
            label: 'EXPLORE THE COLLECTION',
            href: '#'
        },
        bags: [
            {
                id: 1,
                img: '/assets/images/home/bag-1.png',
                alt: 'bag-1',
            },
            {
                id: 2,
                img: '/assets/images/home/bag-2.png',
                alt: 'bag-2',
            }, {
                id: 3,
                img: '/assets/images/home/bag-3.png',
                alt: 'bag-3',
            }

        ]
    }
    const { videoSrc, title, description, cta, bags } = data;
    
    return (
        <div className='w-full lg:min-h-[calc(100svh-120px)] md:min-h-[calc(100svh-110px)] min-h-[calc(100svh-80px)] relative '>
            <video
                src={videoSrc ?? '/assets/videos/bagei-home-banner-video.mp4'}
                className="h-full w-full object-cover absolute inset-0 "
                autoPlay={true}
                playsInline
                muted
                loop={true}
                preload="auto"
                controls={false}
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
            />
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 55.48%, rgba(0, 0, 0, 0.8) 100%)'
                }}
            />
            <ScreenContainer element="section" className="relative lg:min-h-[calc(100svh-120px)] md:min-h-[calc(100svh-110px)] min-h-[calc(100svh-80px)]  z-10 flex flex-col justify-end lg:pb-[70px] md:pb-[40px] pb-[30px]">
                {/* animation expanding show all images intial one */}
                <div 
                    className="w-fit absolute lg:top-[80px] md:top-[40px] bg-[#FFFFFF80] lg:right-0 md:right-[24px] h-[82px] md:flex hidden flex-row gap-[8px] justify-center items-center backdrop-blur-[10px] rounded-[4px] pl-[6px] py-[6px] pr-[8px]"
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <ul className="flex flex-row rounded-[6px] overflow-hidden gap-[0px]">
                        {
                            bags?.map((item, index) =>
                                <li 
                                    key={item.img} 
                                    className={`h-[70px] relative  transition-all duration-300 ease-in-out ${
                                        isExpanded 
                                            ? 'w-[56px] opacity-100 ml-[0px] ' 
                                            : index === 0 
                                                ? 'w-[56px] opacity-100 bg-white' 
                                                : 'w-0 opacity-0 ml-0 overflow-hidden'
                                    }`}
                                    style={{
                                        transitionDelay: isExpanded ? `${index * 100}ms` : '0ms'
                                    }}
                                >
                                    <Image 
                                        src={item?.img} 
                                        alt={item.alt} 
                                        fill 
                                        className="w-full h-full object-cover object-center hover:bg-white transition delay-100" 
                                    />
                                </li>
                            )
                        }
                    </ul>
                    <button
                        onMouseEnter={() => setIsExpanded(true)}
                        className="flex-shrink-0"
                    >
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 ease-in-out"
                        >
                            {/* Horizontal line - always visible */}
                            <path 
                                d="M4.08337 7L9.91671 7" 
                                stroke="#1A1A1A" 
                                stroke-width="1.25" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                            />
                            {/* Vertical line - rotates to minus when expanded */}
                            <path 
                                d="M7.005 4.08833L7.005 9.92167" 
                                stroke="#1A1A1A" 
                                stroke-width="1.25" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                                className={`transition-all duration-300 ease-in-out origin-center ${
                                    isExpanded ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                }`}
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col lg:gap-[16px] md:gap-[10px] gap-[10px] text-primary-1">
                    {
                        title && <h1 className="font-banner-title-50 font-ChronicleDisplay">{title}</h1>
                    }
                    {
                        description && <p className="font-banner-text-18 font-Akkurat font-normal md:w-fit w-[241px] ">{description}</p>
                    }
                    {
                        cta?.href && <Link className="font-banner-link-18 font-Akkurat font-normal uppercase underline underline-offset-3 " href={cta?.href}>{cta?.label}</Link>
                    }

                </div>
            </ScreenContainer>
        </div>
    )
}

export default VideoBanner