import React from 'react'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            <section className='w-full flex flex-wrap justify center my-10'>
                {/* page label */}
                <div className='w-full lg:w-[60%] 2xl:container mx-auto bg-gradient-to-r from-[#21254e] to-[#2b4a83] rounded-2xl'>
                    <h2 className='text-[36px] font-bold text-center text-white p-3'>تماس با ما</h2>
                </div>
                {/* page label */}
                {/* empty section */}
                <div className='w-full'>
                    <div className='w-full h-[100px]'></div>
                </div>
                {/* empty section */}
                <div className='w-full lg:w-[60%] 2xl:container mx-auto'>
                    <h1 className='text-[36px] font-bold text-center text-black p-3'>امید فیروزی</h1>
                    <section className='w-full flex flex-wrap justify-center'>
                        <div className='*:my-7'>
                            <p className='text-[22px] font-bold hover:text-[#21457f]'>لینک شبکه های اجتماعی:</p>
                            <div className='*:m-2 flex justify-center'>
                                <Link href={'/'}>
                                    <i class="bi bi-github text-[#28457b] text-[30px] bg-slate-200 rounded-lg p-2"></i>
                                </Link>
                                <Link href={'/'}>
                                    <i class="bi bi-linkedin text-[#28457b] text-[30px] bg-slate-200 rounded-lg p-2"></i>
                                </Link>
                                <Link href={'/'}>
                                    <i class="bi bi-instagram text-[#28457b] text-[30px] bg-slate-200 rounded-lg p-2"></i>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
