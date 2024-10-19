'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
export default function Header() {
    const [isFixed, setIsFixed] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsFixed(true)
            } else {
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <header className='w-full justify-between'>
                {/* headTop */}
                <figure className="w-full bg-center bg-no-repeat bg-[url('/more.svg')] bg-black flex flex-wrap justify-center items-center">
                    <Link href={'/'} className='w-full h-[50px] flex flex-wrap justify-center items-center  text-white font-bold text-[18px]'>
                        زرین‌پالِ امروز، بدون مرز است.
                        <div className='bg-[#FFFFFF40] mx-3 rounded-2xl hover:bg-[#ffffff52] flex flex-wrap justify-center items-center p-[2px]'>
                            {/* <Link href={'/'} className=''></Link> */}
                            <div className='text-[12px] mx-1 font-medium' htmlFor="">مطالعه بیشتر</div>
                            <span className="material-symbols-outlined">
                                arrow_circle_left
                            </span>
                        </div>
                    </Link>
                </figure>
                {/* headTop */}
                {/* headBottom */}
                <section className='w-full flex flex-wrap 2xl:container justify-center mx-auto my-3'>
                    <div className={`w-full flex lg:w-[60%] justify-center duration-300 ${isFixed ? 'fixed w-full h-[60px] top-0 bg-[#ffffffb8] my-0 backdrop-blur-xl z-[100] border-b border-[#0000001a]' : ''}`}>
                        <Link href='/' className='w-2/3 lg:w-[20%] xl:w-[15%] bg-[url("/logo.svg")] bg-center bg-no-repeat'></Link>
                        <nav className='flex flex-wrap w-[70%] justify-end items-center'>
                            <ul className='hidden lg:flex flex-wrap *:mx-3 text-[14px] text-[#303030d7]'>
                                <li>
                                    <Link href={''} className='flex justify-center items-center'>محصولات
                                        <span className="material-symbols-outlined text-[16px]">
                                            keyboard_arrow_down
                                        </span>
                                    </Link>
                                </li>
                                <li><Link href={'/pages/Tariffs'}>تعرفه ها</Link></li>
                                <li><Link href={'/'}>توسعه دهندگان</Link></li>
                                <li><Link href={'/pages/Contact'}>تماس با ما</Link></li>
                                <li>
                                    <Link href={'/'} className='flex justify-center items-center'>بیش تر
                                        <span className="material-symbols-outlined !text-[16px]">
                                            keyboard_arrow_down
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <div className='w-1/3 flex justify-end ml-5 lg:hidden overflow-hidden'>
                                <span
                                    className="material-symbols-outlined cursor-pointer !text-[30px] !font-bold text-[#25457B]"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)} // تغییر وضعیت منو
                                >
                                    menu
                                </span>
                            </div>
                        </nav>
                        <div className='hidden xl:flex xl:w-[15%] justify-center items-center'>
                            <Link href={'/'} className='bg-[#e8effe99] text-[#25457B] rounded-[20px] px-3 py-2 hover:bg-[#e4c50026]'>
                                زرین‌پال من
                            </Link>
                        </div>
                    </div>
                </section>
                {isMenuOpen && ( // نمایش منو در صورت باز بودن
                    <div className="fixed top-0 left-0 w-full h-auto bg-white z-[1000] duration-300 transition-transform transform translate-y-0 backdrop-blur-md">
                        <div className="flex justify-end p-4">
                            <span
                                className="material-symbols-outlined cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                close
                            </span>
                        </div>
                        <ul className="flex flex-col items-center *:w-full text-[#1e1e1eeb] *:my-2">
                            <li><Link href={'/pages/Tariffs'}>تعرفه ها</Link></li>
                            <li><Link href={'/'}>اپلیکیشن</Link></li>
                            <span className='w-full h-[1px] bg-[#74747459] my-4'></span>
                            <li><Link href={'/'}>سوالات متداول</Link></li>
                            <li><Link href={'/'}>محصولات</Link></li>
                            <li><Link href={'/pages/Contact'}>تماس با ما</Link></li>
                            <li className='text-[#25457B] bg-[#eeeeee] h-[50px] flex items-center pr-5'><Link className='bg-[#e8effe99] px-2 py-1' href={'/pages/Contact'}>زرین‌پال من</Link></li>
                        </ul>
                    </div>
                )}
                {/* headBottom */}
            </header>
        </div>
    )
}
