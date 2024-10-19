import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            {/* section 1 --> banner*/}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-[90%] xl:w-[60%] 2xl:container mx-auto bg-[#fbf6f1] rounded-2xl'>
                    <div className='w-full flex flex-wrap justify-center items-center p-4'>
                        <figure className='hidden lg:flex w-full  justify-center items-center'>
                            <Image src={'/prices.svg'} width={450} height={0} />
                        </figure>
                        <div className='w-full flex flex-wrap justify-center items-center xl:mx-10'>
                            <hgroup className='text-black flex flex-wrap mb-5'>
                                <h1 className='text-[25px] font-bold mb-5 leading-relaxed'>تعرفه‌ها</h1>
                                <p className='leading-loose text-justify text-[#505050]'>زرین‌‌پال با ارائه‌‌ی یک فرمول شفاف و منصفانه برای کارمزدها، امکانی فراهم کرده تا کاربران جدید، در ماه اول عضویت، تسویه‌‌حساب خود را به صورت کاملا رایگان و تنها با کسر <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>کارمزد شاپرکی</Link> نهایی کنند. با این هدف که در شروع فعالیت‌‌ کسب و کارها نقش حمایتی و در ادامه‌‌ی آن نقش موثری داشته باشیم. این یعنی شروع یک بازی بُرد بُرد .</p>
                            </hgroup>
                        </div>
                    </div>
                    <figure className='w-full flex flex-wrap justify-center -mb-[25px] relative'>
                        <Image src={'/arrowbottom.svg'} width={100} height={100} />
                        <span className="material-symbols-outlined !text-[25px] absolute top-[5px] !font-bold cursor-pointer">
                            keyboard_arrow_down
                        </span>
                    </figure>
                </div>
            </section>
            {/* section 1 --> banner*/}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[100px]'></div>
            </div>
            {/* empty section */}
            {/* section 2 --> tariffs */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full 2xl:w-[60%] 2xl:container mx-auto'>
                    <div className='w-full flex flex-wrap justify-center p-4'>
                        <article className='w-full flex justify-start items-center'>
                            <h1 className='text-[25px] font-bold'>تعرفه‌‌ها در زرین‌‌پال</h1>
                        </article>
                        {/* empty section */}
                        <div className='w-full'>
                            <div className='w-full h-[50px]'></div>
                        </div>
                        {/* empty section */}
                        <section className='w-full flex flex-wrap lg:flex-nowrap justify-between'>
                            <div className='w-full mb-5 lg:w-[60%]'>
                                <section className='w-full border rounded-xl'>
                                    <article className='w-full flex justify-center content-baseline *:mx-3'>
                                        <section className='w-full flex justify-center content-baseline py-2 border-b-[2px]'>
                                            <div className='w-[40%] flex items-center border-l-2'>
                                                <h2 className='text-[18px] font-bold text-[#505050] mx-2'>تسویه‌‌حساب در ماه اول‌</h2>
                                            </div>
                                            <div className='w-[60%] mr-4'>
                                                <p className='text-[#303030] mt-1 leading-8 font-bold'>رایگان (تنها پرداخت <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>کارمزد شاپرکی</Link>)</p>
                                            </div>
                                        </section>
                                    </article>
                                    <article className='w-full flex justify-center content-baseline *:mx-3'>
                                        <section className='w-full flex py-2 border-b-[2px]'>
                                            <div className='w-[40%] flex items-center border-l-2'>
                                                <h2 className='text-[18px] font-bold text-[#505050] mx-2'>تسویه‌حساب به حساب بانکی</h2>
                                            </div>
                                            <div className='w-[60%] mr-4'>
                                                <p className='text-[#303030] mt-1 leading-8 font-bold'><span className='text-[#00b894]'>۱٪</span> تا سقف <span className='text-[#00b894]'>۶،۰۰۰</span>تومان + ۲۵۰ تومان به ازای هر تراکنش</p>
                                            </div>
                                        </section>
                                    </article>
                                    <article className='w-full flex justify-center content-baseline *:mx-3'>
                                        <section className='w-full flex py-2'>
                                            <div className='w-[40%] flex items-center border-l-2'>
                                                <h2 className='text-[18px] font-bold text-[#505050] mx-2'>زرین‌لینک</h2>
                                            </div>
                                            <div className='w-[60%] mr-4'>
                                                <p className='text-[#303030] mt-1 leading-8 font-bold'><span className='text-[#00b894]'>۰.۰۲٪</span> تا سقف <span className='text-[#00b894]'>۱۰،۰۰۰</span>تومان + ۲۵۰ تومان به ازای هر تراکنش</p>
                                            </div>
                                        </section>
                                    </article>
                                </section>
                            </div>
                            <div className='w-full lg:w-[35%] bg-[#2b4a83] text-white rounded-xl p-7'>
                                <hgroup>
                                    <h2 className='text-[30px] font-bold mb-4'>کسب‌وکارهای بزرگ</h2>
                                    <p className='w-[95%] font-bold leading-[50px]'>چنان‌‌چه تراکنش‌‌های شما، از سقف ۱۰۰ تراکنش در روز بیش‌‌تر است، پیشنهاد می‌‌کنیم این مورد را در صفحه‌‌ی زیر، با ما در میان بگذارید، تا جهت ارائه‌‌ی موثرترین راه‌‌کار، با شما تماس بگیریم.</p>
                                </hgroup>
                                <div className='w-[50%] my-5'>
                                    <Link className='w-full flex justify-center items-center bg-[#e8effe99] py-2 font-bold rounded-lg text-[#28457b]' href={'/pages/Contact'}>
                                        تماس با ما
                                        <span className="material-symbols-outlined transform rotate-180 px-2">
                                            arrow_forward
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            {/* section 2 --> tariffs */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[100px]'></div>
            </div>
            {/* empty section */}
            {/* section 2 --> tariffs */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full 2xl:w-[60%] 2xl:container mx-auto'>
                    <div className='w-full flex flex-wrap p-4 *:my-2'>
                        <h2 className='w-full flex justify-start items-center text-[25px] font-bold'>توضیحات بیش‌‌تر را این‌‌جا بخوانید:</h2>
                        <p className='text-[#505050] text-[px] font-bold'>تعرفه‌های فوق منوط به ثبت کد مالیاتی و نماد اعتماد می‌باشد.</p>
                        <ul className='text-[#505050] leading-10 text-[18px] *:my-4'>
                            <li >
                                <p>1- پس از هر تراکنش موفق، بلافاصله کارمزد آن محاسبه و کسر خواهد شد و موجودی قابل تسویه، حداکثر یک روز بعد، تا ساعت ۱۷ به حساب پذیرنده واریز می‌‌شود.</p>
                            </li>
                            <li>
                                <p>2- فرآیند تسویه‌‌حساب پذیرندگان در روزهای تعطیل رسمی، مطابق با فرآیند پرداخت‌‌یاری، به روز پس از تعطیلی موکول می‌‌شود.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* section 2 --> tariffs */}
        </div>
    )
}
