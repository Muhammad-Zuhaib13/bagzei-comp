import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TwoCardsSection = () => {
    const data = [{
        img: '/assets/images/home/rectangle-1.png',
        title: 'Accessories',
        description: 'The coveted style on everybody\'s wishlist',
        cta: {
            label: 'EXPLORE THE KITE COLLECTION',
            href: '#'
        },
    }, {
        img: '/assets/images/home/rectangle-2.png',
        title: 'Best sellers',
        description: 'The coveted style on everybody\'s wishlist',
        cta: {
            label: 'EXPLORE THE KITE COLLECTION',
            href: '#'
        },
    }]
    
    return (
        <section className='w-full grid lg:grid-cols-2 grid-cols-1 md:mt-[40px] mt-[30px]'>
            {
                data && data?.map((item) => {
                    return (
                        <div 
                            key={item?.title} 
                            className='w-full group lg:h-[784px] md:h-[767px] h-[425px] relative overflow-hidden flex flex-col justify-end lg:p-[40px] md:px-[24px] py-[40px] px-[16px]'
                        >
                            {/* Image with zoom effect only */}
                            <div className='w-full h-full absolute inset-0 overflow-hidde border border-primary-1'>
                                <div className='w-full h-full transition-transform duration-700 ease-out group-hover:scale-110'>
                                    <Image 
                                        src={item?.img} 
                                        alt={item?.title || ''} 
                                        className='object-cover object-center' 
                                        fill 
                                    />
                                </div>
                            </div>
                            
                            
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 75.83%, rgba(0, 0, 0, 0.8) 98.59%)'
                                }}
                            />
                            
                           
                            <div className="flex flex-col text-primary-1 relative z-10">
                                {
                                    item?.title && (
                                        <h1 className="font-section-title-32 font-ChronicleDisplay lg:mb-[10px]">
                                            {item?.title}
                                        </h1>
                                    )
                                }
                                {
                                    item?.description && (
                                        <p className="font-text-18 font-Akkurat font-normal md:mb-[20px] mb-[10px]">
                                            {item?.description}
                                        </p>
                                    )
                                }
                                {
                                    item?.cta?.href && (
                                        <Link 
                                            className="font-text-18 font-Akkurat font-normal uppercase underline underline-offset-3" 
                                            href={item?.cta?.href}
                                        >
                                            {item?.cta?.label}
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default TwoCardsSection