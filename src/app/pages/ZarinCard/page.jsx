import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            {/* section 1 --> banner */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto bg-[#fbf6f1] rounded-2xl'>
                    <div className='w-full my-10 flex justify-center items-center p-4'>
                        <div className='w-full sm:w-[70%] xl:w-[50%] flex flex-wrap justify-start items-center xl:mx-10'>
                            <hgroup className='text-black flex flex-wrap my-10'>
                                <p className='w-full text-[#303030] font-bold text-[25px]'>زرین‌کارت</p>
                                <h1 className='text-[35px] font-bold mb-5'>طلایی‌ترین کارتِ بانکی</h1>
                                <p className='leading-loose text-[#505050] text-justify font-bold'>زرین‌کارت یک کارتِ بانکی عضو شبکه‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌کارت این امکان را برای کاربران خود فراهم می‌سازد تا در روزهای عادی از تعرفه‌ی کارمزد کم‌تر بهره‌مند شده و در سه‌شنبه‌های طلاییِ زرین‌پال نیز تنها <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>کارمزد شاپرکی</Link> پرداخت نمایند.</p>
                            </hgroup>
                            <strong>توجه: این سرویس موقتا غیرفعال می‌باشد.</strong>
                            <div className='flex flex-wrap w-full justify-center xl:justify-start *:ml-4 *:cursor-pointer mt-16'>
                                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 rounded-xl'>درخواست زرین کارت</span>
                            </div>
                        </div>
                        <figure className='hidden lg:flex lg:w-[50%] h-full justify-center items-center mx-10'>
                            <Image className='h-full flex items-center justify-center' src={'/zarinCard.svg'} width={500} height={250} />
                        </figure>
                    </div>
                    <figure className='w-full flex flex-wrap justify-center -mb-[25px] relative'>
                        <Image className='' src={'/arrowbottom.svg'} width={100} height={100} />
                        <span className="material-symbols-outlined !text-[25px] absolute top-[5px] !font-bold cursor-pointer">
                            keyboard_arrow_down
                        </span>
                    </figure>
                </div>
            </section>
            {/* section 1 --> banner */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[50px]'></div>
            </div>
            {/* empty section */}
            {/* section 2 --> properties */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] 2xl:w-[65%] 2xl:container mx-auto'>
                    <div className='w-full flex justify-center p-4'>
                        <div className='w-full flex flex-wrap justify-start items-center mr-7'>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5 lg:border-b-[2px]'>
                                <section className='w-full lg:w-1/3 lg:border-l-[2px] flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>ویژگی‌های زرین‌کارت</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>زرین‌‌‌‌کارت یک راهکار اساسی برای کنترل سرمایه‌‌‌‌های در حال گردش است که با تسهیل و تسریع فرآیندهای مالی و تغییر مدل کارمزدی، نقش بسیار مهمی در توسعه‌‌‌‌ی کسب و کارها ایفا میکند.</p>
                                </section>
                                <section className='w-full lg:w-1/3 lg:border-l-[2px] flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            verified
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>کاهش کارمزد</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>در روزهای عادی هفته، کارمزد دارندگان زرین‌کارت به‌صورت ۰.۳  درصد تا سقف ۴۰۰۰ تومان به علاوه ۱۲۰ تومان مبلغ ثابت برای هر تراکنش (کارمزد شاپرکی) است که این مبلغ در سه شنبه‌های طلایی به ۰.۲ درصد تا سقف ۴۰۰۰ هزار تومان کاهش می‌یابد.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            alt_route
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>کارمزد رایگان</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>در سه‌شنبه‌های طلایی زرین‌پال، تسویه‌حساب به مقصد زرین‌کارت بدون کسر کارمزد و تنها با پرداخت کارمزد شاپرکی انجام می‌شود.</p>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 lg:border-l-[2px] flex flex-wrap px-3'>
                                    <div className='flex justify-start items-center my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            headset_mic
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>عضو شبکه‌ بانکی کشور</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>به واسطه‌ی درخواست و انتخاب پذیرندگان، زرین‌کارت به عنوان عضو رسمی شبکه‌ی بانکی کشور، صادر می‌شود.</p>
                                </section>
                                <section className='w-full lg:w-1/3 lg:border-l-[2px] flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            headset_mic
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>سهولت انتقال وجه</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>زرین‌کارت طبق قوانین بانک مرکزی کشور، تمام ویژگی‌ها و امکانات یک حساب بانکی رایج را در اختیار کاربران خود قرار می‌دهد.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            lock
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>جامعیتِ استفاده</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>زرین‌کارت تمام امکانات کارت‌های بانکی، مانند پرداخت اینترنتی، پرداخت از طریق دستگاه‌های خودپرداز، انتقال و برداشت وجه را دارد.</p>
                                </section>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 2 --> properties */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[50px]'></div>
            </div>
            {/* empty section */}
            {/* section 3 --> tariffs */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto bg-[#fbf6f1] rounded-2xl'>
                    <div className='w-full my-10 flex justify-center items-center p-4'>
                        <div className='w-full sm:w-[70%] xl:w-[50%] flex flex-wrap justify-start items-center xl:mx-10'>
                            <hgroup className='text-black flex flex-wrap'>
                                <h1 className='text-[25px] font-bold mb-5'>تعرفه‌ی زرین‌‌‌‌کارت</h1>
                                <p className='leading-loose text-[#505050] text-justify font-bold'>با داشتن زرین‌کارت، کارمزد تراکنش‌ها در روزهای عادی هفته، به ۰.۳ درصد تا سقف ۴۰۰۰ تومان به علاوه ۱۲۰ تومان مبلغ ثابت <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>(کارمزد شاپرکی)</Link> برای هر تراکنش کاهش می‌یابد و در صورت تسویه‌حساب به مقصد زرین‌کارت در سه‌شنبه‌های طلاییِ زرین‌پال، کارمزد دریافتی از زرین‌پال کاملا رایگان و صفر در نظر گرفته می‌شود و تنها <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>کارمزد شاپرکی</Link> دریافت می‌شود.</p>
                            </hgroup>
                            <div className='flex flex-wrap w-full justify-center xl:justify-start *:ml-4 *:cursor-pointer mt-10'>
                                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیش‌تر بدانید
                                    <span className="material-symbols-outlined transform rotate-180 px-2">
                                        arrow_forward
                                    </span>
                                </span>
                            </div>
                        </div>
                        <figure className='hidden lg:flex lg:w-[50%] h-full justify-center items-center mx-10'>
                            <Image src={'/tashimLogo.svg'} width={500} height={50} />
                        </figure>
                    </div>
                </div>
            </section>
            {/* section 3 --> tariffs */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[50px]'></div>
            </div>
            {/* empty section */}
        </div>
    )
}
