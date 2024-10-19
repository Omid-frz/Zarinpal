import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            {/* section 1 --> banner */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto bg-[#f1f5fe] rounded-2xl'>
                    <div className='w-full flex justify-center items-center p-4'>
                        <div className='w-full sm:w-[70%] xl:w-[50%] flex flex-wrap justify-start items-center xl:mx-10'>
                            <hgroup className='text-black flex flex-wrap my-10'>
                                <p className='w-full text-[#303030] font-bold text-[25px]'>درگاه پرداخت اینترنتی   IPG</p>
                                <h1 className='text-[30px] font-bold mb-5'>مهندسی شده برای رشد و فروش بیش‌تر</h1>
                                <p className='leading-10 text-[#505050] text-justify font-bold'>درگاه پرداخت زرین‌پال، به واسطه‌ی قابلیت مسیردهی هوشمند، با اتصالِ همزمان به درگاه‌های متنوع و معتبر شاپرکی (PSP)، کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و باعث افزایش درصد تراکنش‌های موفق می‌شود.</p>
                            </hgroup>
                            <div className='flex flex-wrap w-full justify-center xl:justify-start *:ml-4 *:cursor-pointer mt-10'>
                                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 rounded-xl'>ساخت درگاه پرداخت</span>
                            </div>
                        </div>
                        <figure className='hidden lg:flex lg:w-[50%] h-full justify-center items-center mx-10'>
                            <Image className='h-full flex items-center justify-center' src={'/pay.svg'} width={500} height={250} />
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
                            <h2 className='w-full text-[30px] font-bold'>مزایای درگاه پرداخت اینترنتی زرین‌پال</h2>
                            {/* empty section */}
                            <div className='w-full'>
                                <div className='w-full h-[50px]'></div>
                            </div>
                            {/* empty section */}
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap items-center px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            verified
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>کارمزد رایگان</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>با هدف حمایت از کسب و کارها، کاربران جدید می‌توانند در ماه اول عضویت خود، به‌صورت کاملا رایگان از خدمات زرین‌پال بهره‌مند شوند.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            alt_route
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>مسیردهی هوشمند</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>با پیاده‌سازی جدیدترین استانداردهای پرداخت، درصد تراکنش‌های ناموفق را به حداقل می‌رساند.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            lock
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>امنیتِ پرداخت</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>برای خرید، پرداخت، یا انتقال مبلغ به حساب تعریف شده، می‌‌توان از لینک پرداخت شخصی و بدون مبلغ از پیش تعیین شده استفاده کرد.</p>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start items-center my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            headset_mic
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>تکمیل فرآیند خرید</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            check_circle
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>تسویه‌حسابِ روزانه</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>یک روز پس از انجام تراکنش، حداکثر تا ساعت ۱۷، مبلغ پرداختی با کسر کارمزد، به‌صورت خودکار به حساب پذیرنده واریز می‌شود.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            extension
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>تنوع افزونه‌ها</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>زرین‌پال برای اتصال. درگاه پرداخت،. منبعی از متنوع‌ترین افزونه‌ها را همراه با آموزشِ نحوه اتصال و پشتیبانی فنی در اختیار صاحبان کسب‌وکارها قرار می‌دهد.</p>
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
                                <h2 className='text-[25px] font-bold mb-5'>تعرفه‌‌‌ی درگاه پرداخت اینترنتی</h2>
                                <p className='text-[#505050] text-justify font-bold leading-10'>در هر تراکنش با درگاه پرداخت اینترنتی زرین‌پال، کارمزد ۱٪ تا سقف ۶۰۰۰ تومان + ۲۵۰ تومان کسر می‌شود. همچنین کاربران جدید می‌توانند در ماه اول عضویت در زرین‌پال، با شرط دارا بودن اینماد و کد درگاه مالیاتی، از سرویس‌ درگاه پرداخت به صورت کاملا رایگان بهره‌مند شوند و تنها <Link className='text-[#0091ff] border-b-[1px] border-[#0091ff]' href={'/'}>کارمزد شاپرکی</Link> پرداخت نمایند.</p>
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
            {/* section 4 --> properties */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] 2xl:w-[65%] 2xl:container mx-auto'>
                    <div className='w-full flex justify-center p-4'>
                        <div className='w-full flex flex-wrap justify-start items-center mr-7'>
                            <h2 className='w-full text-[30px] font-bold'>درگاه پرداخت زرین‌پال، برای چه افرادی و چه کسب و کاری مناسب است؟</h2>
                            {/* empty section */}
                            <div className='w-full'>
                                <div className='w-full h-[50px]'></div>
                            </div>
                            {/* empty section */}
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between items-center *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap items-center px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            store
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>کسب و کارهای اینترنتی</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            alt_route
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>ارائه‌دهندگان خدمات رمزارز</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            movie
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>پلتفرم‌های نمایش فیلم <br />و سریال ( VOD )</h2>
                                    </div>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            store
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>بازارگاه‌ها( Marketplace )</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            sports_esports
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>بازی‌سازان</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            extension
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>سرویس‌دهنده‌ها</h2>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 4 --> properties */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[50px]'></div>
            </div>
            {/* empty section */}
        </div>
    )
}
