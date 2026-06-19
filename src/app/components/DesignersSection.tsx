"use client"
import React, { useRef, useState } from 'react';
import ScreenContainer from "./ScreenContainer";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const DesignersSection = () => {
    const swiperRef = useRef<any>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const data = {
        title: "Designers",
        list: [
            {
                id: 1,
                img: "/assets/images/home/designer-1.png",
                href: '#',
                title: "SAINT LAURENT"
            },
            {
                id: 2,
                img: "/assets/images/home/designer-2.png",
                href: '#',
                title: "PRADA"
            },
            {
                id: 3,
                img: "/assets/images/home/designer-3.png",
                href: '#',
                title: "VALENTINO GARAVANI"
            },
            {
                id: 4,
                img: "/assets/images/home/designer-4.png",
                href: '#',
                title: "LOUIS VUITTON"
            },
            {
                id: 5,
                img: "/assets/images/home/designer-5.png",
                href: '#',
                title: "BURBERRY"
            },
            {
                id: 8,
                img: "/assets/images/home/designer-6.png",
                href: '#',
                title: "DIOR"
            }
        ]
    };
    const { title, list } = data;

    return (
        <ScreenContainer>
            <div className="flex flex-col lg:gap-[30px] md:gap-[16px] gap-[10px] w-full overflow-hidden md:mt-[40px] mt-[30px]">
                {
                    title && <h2 className="font-ChronicleDisplay font-section-title-32 text-primary-2">{title}</h2>
                }
                <div className='w-full relative h-auto'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={1}
                        slidesPerGroup={1}
                        speed={500}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            475: { slidesPerView: 2 },
                            530: { slidesPerView: 2 },
                            640: { slidesPerView: 2.5 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                            1279: { slidesPerView: 5 },
                        }}
                        className="w-full"
                    >
                        {
                            list && list?.map((item: any) => {
                                return (
                                    <SwiperSlide key={item?.title} className="w-full group">
                                        <div className='flex flex-col md:gap-[20px] gap-[10px] w-full'>
                                            <div className="max-w-[339px] w-full lg:h-[300px] h-[270px] relative overflow-hidden">
                                                {/* Image container with zoom and grayscale effect */}
                                                <div className='w-full h-full transition-transform duration-700 ease-out group-hover:scale-110'>
                                                    <Image
                                                        src={item?.img}
                                                        alt={item?.title}
                                                        fill
                                                        className="object-cover object-center transition-all duration-700 ease-out lg:grayscale group-hover:grayscale-0"
                                                    />
                                                </div>
                                            </div>
                                            <Link
                                                href={item?.href}
                                                className='font-Akkurat font-text-18 text-primary-2 uppercase block transition-all duration-300 ease-out'
                                            >
                                                {item?.title}
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className={`flex justify-center items-center absolute h-full top-0 w-[30px] z-10 backdrop-blur-[10px] hover:bg-white ${isBeginning
                            ? "hidden"
                            : "block"
                            }`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 17L9 12L14 7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={isEnd}
                        className={`flex justify-center items-center absolute h-full top-0 right-0 w-[30px] z-10 hover:bg-white backdrop-blur-[10px] ${isEnd
                            ? "hidden"
                            : "block"
                            }`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 17L15 12L10 7" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </ScreenContainer>
    )
}

export default DesignersSection;