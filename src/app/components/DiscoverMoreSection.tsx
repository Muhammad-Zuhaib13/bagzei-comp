import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const DiscoverMoreSection = () => {
    const data = [{
        img: '/assets/images/home/bag-discover-more.png',
        title: 'Summer Shop',
        description: 'Discover our curated edit of summer essentials, from on-trend raffia baskets to effortless crossbody bags.',
        cta: {
            label: 'Discover More',
            href: '#'
        },
        isReverse:false,
    }]
    return (
        <section className='w-full md:my-[40px] my-[30px]'>
            {
                data && data?.map((item) => {
                    return <div key={item?.title} className='w-full   relative overflow-hidden grid md:grid-cols-2'>
                        <div className='w-full relative lg:h-[780px] md:h-[550px] h-[425px]'>
                            <Image src={item?.img} alt={item?.title || ''} className='object-cover object-center' fill />
                        </div>
                        
                        <div className="flex flex-col lg:gap-[30px] gap-[10px] justify-center lg:items-center text-primary-2 lg:text-center lg:px-[46px] px-[24px] md:pt-0 pt-[20px]">
                            {
                                item?.title && <h1 className="font-section-title-32 font-ChronicleDisplay">{item?.title}</h1>
                            }
                            {
                                item?.description && <p className="font-text-18 lg:w-[85%] w-full font-Akkurat font-normal">{item?.description}</p>
                            }
                            {
                                item?.cta?.href && <Link className="font-text-18 font-Akkurat font-normal uppercase underline underline-offset-3 lg:mt-0 md:mt-[20px] mt-[10px]" href={item?.cta?.href}>{item?.cta?.label}</Link>
                            }
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default DiscoverMoreSection