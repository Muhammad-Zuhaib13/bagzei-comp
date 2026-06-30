"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import './product-details.css'

const ProductDetailsTabMob = ({data}:{data:any}) => {

    const [open, setOpen] = useState<number | null>(null)
    const answerRefs = useRef<(HTMLDivElement | null)[]>([])
    const [isReadMore, setIsReadMore] = useState(false)
    if(!data) {return null}
    const { productImages, accordion, productDetails, ctaContact, cta, title, itemCode, price } = data
    return (
        <section className="w-full md:flex lg:hidden flex-col items-start lg:mb-[50px] md:mb-[40px] mb-[20px]">

            {/* LEFT — image stack */}
            <ul className="lg:w-[50%] w-full flex flex-col">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    slidesPerGroup={1}
                    speed={500}
                    className={`w-full h-[516px] lg:h-[400px] relative`}
                    modules={[Pagination]}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                    }}
                >
                    {productImages && productImages?.map((item: any) => (
                        <SwiperSlide key={item?.title} className=" overflow-hidden h-full w-full">
                            <img
                                src={item.img}
                                alt={`${title} – view ${item.id}`}
                                className="w-full h-full object-cover object-center"
                            />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler absolute md:bottom-[39px] bottom-[20px] mx-auto z-10 left-0 right-0">
                        <div className="custom-pagination !relative flex flex-row justify-center items-center gap-[4px] "></div>
                    </div>
                </Swiper>
                {productImages.map((item:any) => (
                    <li key={item.id} className="w-full lg:h-[670px] h-[516px] overflow-hidden lg:block hidden">
                        <img
                            src={item.img}
                            alt={`${title} – view ${item.id}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </li>
                ))}
            </ul>

            {/* RIGHT — sticky panel */}
            <div
                className="lg:w-[50%] w-full self-start lg:px-[55px]"
            >
                {/* Hide webkit scrollbar */}
                <style>{`
                    .pd-panel::-webkit-scrollbar { 
                        display: none; 
                    }
                    .pd-panel {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                <div className="pd-panel lg:max-w-[500px] md:px-[24px] px-[16px] mx-auto md:py-[40px] py-[20px]  flex flex-col">

                    {/* Header */}
                    <div className="flex justify-between items-start md:gap-[40px] gap-[30px] mb-[40px]">
                        <div>
                            <p className="font-menu-nav-14 font-Akkurat tracking-[0.25em] uppercase text-mid-grey md:mb-[30px] mb-[24px]">
                                {itemCode}
                            </p>
                            <h1 className="font-card-24 tracking-wide text-primary-2 font-Akkurat">
                                {title}
                            </h1>
                            <p className="tracking-wide font-Akkurat text-mid-grey font-text-18">
                                {price}
                            </p>
                        </div>
                        <button aria-label="Add to wishlist" className="mt-1 shrink-0 p-1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3.6095 10.0395L10 16.6667L16.3905 10.0395C17.1009 9.30278 17.5 8.30358 17.5 7.26171C17.5 5.09214 15.804 3.33334 13.7119 3.33334C12.7073 3.33334 11.7438 3.74722 11.0334 4.48394L10 5.55557L8.96664 4.48394C8.25624 3.74722 7.29273 3.33334 6.28807 3.33334C4.19598 3.33334 2.5 5.09214 2.5 7.26171C2.5 8.30358 2.8991 9.30278 3.6095 10.0395Z" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col justify-center items-center gap-[20px] md:mb-[30px] mb-[20px]">
                        <button className="w-full py-[17px] rounded-[8px] bg-primary-2 text-primary-1 font-text-18 tracking-[0.2em] hover:bg-neutral-700 transition-colors duration-200">
                            {cta.label}
                        </button>
                        <button className="w-fit border-neutral-200 border-b tracking-[0.2em] uppercase font-footer-copyright-14 text-primary-2 font-Akkurat transition-colors duration-200">
                            {ctaContact.label}
                        </button>
                    </div>

                    {/* Description */}
                    <div className={`flex flex-col ${isReadMore ? 'gap-[20px]' : 'pag-0'} font-product-16 font-Akkurat text-mid-grey`}>
                        <div className={`${!isReadMore ? 'lg:h-[164px] md:h-[156px] h-[164px] overflow-y-hidden' : 'h-auto'} relative`}>
                            <div className='h-full flex flex-col gap-[30px]'>
                                {productDetails?.desc?.map((item: any, index: number) => (
                                    <p className={`tracking-wide`} key={item?.id}>
                                        {item?.text}
                                    </p>
                                ))}
                            </div>
                            {!isReadMore && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 pointer-events-none h-[39px]"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 50%, #FFFFFF 100%)',
                                        backdropFilter: 'blur(1px)',
                                        WebkitBackdropFilter: 'blur(1px)',
                                    }}
                                />
                            )}
                        </div>

                        <button className='text-primary-2 border-b w-fit border-[var(--color-black)]' onClick={() => setIsReadMore((pre) => !pre)}>
                            {
                                !isReadMore ? 'Read more' : 'Read Less'
                            }
                        </button>
                    </div>

                    <hr className="border-neutral-200 md:mt-[40px] mt-[30px]" />

                    {/* Accordions */}
                    <ul className="flex flex-col divide-y divide-neutral-200">
                        {accordion.map((item:any, index:number) => {
                            const isOpen = open === index
                            return (
                                <li key={item.id}>
                                    <button
                                        className="w-full md:py-[18px] py-[12px] flex justify-between items-center text-primary-2 font-text-18 font-Akkurat text-left"
                                        onClick={() => setOpen(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="tracking-[0.18em]">
                                            {item.question}
                                        </span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-300"
                                            style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)' }}
                                        >
                                            {isOpen ? (
                                                // Minus icon
                                                <path
                                                    d="M2.92872 9.99999L17.0708 9.99999"
                                                    stroke="#1A1A1A"
                                                    strokeWidth="1.07143"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            ) : (
                                                // Plus icon
                                                <>
                                                    <path
                                                        d="M9.99977 2.92894V17.0711"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="1.07143"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M2.92872 9.99999L17.0708 9.99999"
                                                        stroke="#1A1A1A"
                                                        strokeWidth="1.07143"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </>
                                            )}
                                        </svg>
                                    </button>
                                    <div
                                        ref={el => { answerRefs.current[index] = el }}
                                        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                                        style={{
                                            maxHeight: isOpen
                                                ? `${answerRefs.current[index]?.scrollHeight ?? 500}px`
                                                : '0px'
                                        }}
                                    >
                                        <p className="font-product-16 font-Akkurat text-mid-grey tracking-wide pb-[18px]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default ProductDetailsTabMob