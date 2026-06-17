import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className=''>
            <p className='text-center bg-primary-3 pt-[16px] pb-[15px]'>
                10% Off when you subscribe to our emails. T&Cs apply
            </p>
            <nav className='max-w-[1440px] w-full mx-auto px-[80px]'>
                <div className='flex flex-row gap-[20px]'>
                    <Link href='/'>New In</Link>
                    <Link href='/'>Collections</Link>
                    <Link href='/'>Sale</Link>
                    <button>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 16.6667L13.1694 13.1694M15 8.75C15 5.29822 12.2018 2.5 8.75 2.5C5.29822 2.5 2.5 5.29822 2.5 8.75C2.5 12.2018 5.29822 15 8.75 15C12.2018 15 15 12.2018 15 8.75Z" stroke="#1A1A1A" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <Link href='/'>
                </Link>
            </nav>
        </header>
    )
}

export default Navbar