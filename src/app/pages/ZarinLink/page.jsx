import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            {/* section 1 --> banner */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto bg-[#f1f5fe] rounded-2xl'>
                    <div className='w-full my-10 flex justify-center items-center p-4'>
                        <div className='w-full sm:w-[70%] xl:w-[50%] flex flex-wrap justify-start items-center xl:mx-7'>
                            <hgroup className='text-black flex flex-wrap my-10'>
                                <p className='w-full text-[#303030] font-bold text-[25px]'>زرین‌لینک</p>
                                <h1 className='text-[25px] font-bold mb-5'>درگاه پرداختِ فروشگاه‌‌های مبتنی بر شبکه‌‌ی اجتماعی</h1>
                                <p className='leading-loose text-[#505050] text-justify font-bold'>درگاه پرداختِ فروشگاه‌‌‌های مبتنی بر شبکه‌‌‌ی اجتماعی‌با استفاده از زرین‌‌‌لینک، به‌‌‌سادگی فرآیند فروش محصولات یا خدمات خود را در شبکه‌‌‌های اجتماعی یا وب‌‌‌سایت خود مدیریت کنید و فروش بیش‌‌‌تری داشته باشید.</p>
                            </hgroup>
                            <div className='flex flex-wrap w-full justify-center xl:justify-start *:ml-4 *:cursor-pointer mt-16'>
                                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 rounded-xl'>ساخت زرین لینک</span>
                            </div>
                        </div>
                        <figure className='hidden lg:flex lg:w-[50%] h-full justify-center items-center mx-10'>
                            <Image className='h-full flex items-center justify-center' src={'/zarinlink.svg'} width={500} height={250} />
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
                            <h2 className='w-full text-[30px] font-bold'>ویژگی‌های زرین‌لینک</h2>
                            {/* empty section */}
                            <div className='w-full'>
                                <div className='w-full h-[50px]'></div>
                            </div>
                            {/* empty section */}
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap items-center px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            group
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>لینک پرداخت شخصی</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>برای خرید، پرداخت، یا انتقال مبلغ به حساب تعریف شده، می‌‌توان از لینک پرداخت شخصی و بدون مبلغ از پیش تعیین شده استفاده کرد.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            inventory_2
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>مدیریت محصولات</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>با زرین‌‌لینک می‌‌توان به صورت جداگانه، برای هر محصول فروشگاه سقف ثبت سفارش تعیین کرد و یک لینک پرداخت با قیمت مشخص و مجزا به آن اختصاص داد.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            thumb_up
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>دریافت اطلاعات مشتریان</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>فروشندگان می‌‌توانند با مشاهده و دریافت اطلاعات پرداخت‌‌کنندگان خود، مانند نام، نام خانوادگی، آدرس ایمیل و شماره تماس، با مشتریان خود در ارتباط باشند.</p>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start items-center my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            mood
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>تکمیل فرآیند خرید</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>پس از این‌‌که مشتری پرداخت خود را نهایی می‌‌کند، فروشنده می‌‌تواند پیامی با مضمون دلخواه و مرتبط با تراکنش‌‌های موفق یا ناموفق برای مشتری خود ارسال کند.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            confirmation_number
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>کد تخفیف</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>فروشنده به‌‌راحتی می‌‌تواند لینک کد تخفیف موردنظر خود را در زرین‌‌لینک تعریف و مشخص کند و در اختیار مشتریان خود قرار دهد.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            shopping_basket
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>تعریف تعداد سفارش</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>در زرین‌‌لینک محدودیتی در تعریف تعداد سفارش برای هر محصول وجود ندارد.</p>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-center *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start items-center my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            mood
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>عدم محدودیت انتقال وجه</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>با سقف انتقال وجه ۵۰ میلیون تومانی با زرین‌‌لینک، دیگر نیازی نیست مشتریان برای انتقال مبالغ بالا به خودپرداز یا شعب بانکی مراجعه کنند.</p>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            mood
                                        </span>
                                        <h2 className='text-[24px] text-right font-bold text-[#28457b] mx-2'>مدیریت امورمالی و تراکنش‌‌ها</h2>
                                    </div>
                                    <p className='w-[85%] text-[#303030] mt-1 leading-8 text-justify'>در پنل مدیریتی زرین‌‌پال، گزارش دقیقی از تمام تراکنش‌‌ها بر اساس محصول، تاریخ، مبلغ و نام پرداخت‌‌کننده قابل مشاهده است و تایید تراکنش‌‌‌‌ها، نیازی به چک کردن فیش‌‌های واریزی با بانک مبدا نخواهد داشت.</p>
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
                                <h2 className='text-[25px] font-bold mb-5'>تعرفه‌‌‌‌‌‌‌‌‌ی زرین‌‌‌لینک</h2>
                                <p className='leading-loose text-[#505050] text-justify font-bold'>در هر تراکنش با زرین‌لینک، مبلغ ۰.۰۲٪ تا سقف ۱۰،۰۰۰ تومان + ۲۰۰ تومان به صورت انتخابی از شخص پرداخت‌کننده یا پذیرنده کسر خواهد شد.</p>
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
            {/* section 4 --> Publish links */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto'>
                    <div className='w-full my-10 flex flex-wrap justify-center items-center p-4'>
                        <hgroup className='w-full flex flex-wrap'>
                            <h2 className='text-[30px] font-bold mb-5'>روش انتشار لینک ها</h2>
                            <p className='text-[#303030] font-bold leading-10 text-justify'>زمانی‌‌که فرد در حساب کاربری خود در زرین‌پال، یک محصول فیزیکی یا دیجیتالی ثبت می‌کند، یک زرین‌لینک اختصاصی برای آن محصول ساخته می‌شود. با قرار دادن زرین‌لینک دریافتی در وب‌سایت فروشگاه یا ارسال برای مخاطبان شبکه‌های اجتماعی، پس از این‌که مشتری/خریدار روی زرین‌لینک محصول کلیک می‌کند، مستقیما به صفحه‌ی پرداخت آن محصول هدایت می‌شود و در چند ثانیه خرید خود را نهایی می‌کند.</p>
                        </hgroup>
                        <div className='w-full flex my-10 justify-between'>
                            <hgroup className='w-[45%] flex flex-wrap'>
                                <h2 className='text-[30px] font-bold mb-5'>لینک پرداخت محصول</h2>
                                <p className='text-[#303030] font-bold leading-10 text-justify'>با استفاده از «لینک پرداخت محصول» به‌‌‌راحتی می‌‌‌توان برای هر محصول، یک قیمت مجزا و متفاوت نسبت به سایر محصولات مشخص کرد و برای هر کدام، یک لینک پرداخت اختصاصی ساخت. در این مدل پرداختی، فروشندگان می‌‌‌توانند به دلخواه شرح کوتاهی در مورد نوع محصول در لینک پرداخت قرار دهند تا مشتری با جزئیات بیش‌‌‌تری از محصول آشنا شود.</p>
                            </hgroup>
                            <hgroup className='w-[45%] flex flex-wrap'>
                                <h2 className='text-[30px] font-bold'>لینک پرداخت شخصی</h2>
                                <p className='text-[#303030] font-bold leading-10 text-justify'>درگاه پرداخت شخصی جز سریع‌ترین راه حل های پرداخت و دریافت پول بین اشخاص است که یکی از سرویس های محبوب درگاه پرداخت اینترنتی زرین پال محسوب می شود. لینک شخصی جایگزین مناسبی برای دستگاه‌های پوز سیار و اپلیکیشن های کارت به کارت با بالاترین میزان امنیت است.</p>
                            </hgroup>
                        </div>
                    </div>
                </div>
            </section>
            {/* section 4 --> Publish links */}
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
                            <h2 className='w-full text-[30px] font-bold'>زرین‌‌‌لینک برای چه افرادی با چه کسب و کاری مناسب است؟</h2>
                            {/* empty section */}
                            <div className='w-full'>
                                <div className='w-full h-[50px]'></div>
                            </div>
                            {/* empty section */}
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between items-center *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap items-center px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            verified
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>فریلنسرها</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            alt_route
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>مدرسین خصوصی</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            lock
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>پرداخت در محل</h2>
                                    </div>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            store
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>فروشگاه‌‌‌های اینترنتی</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            mosque
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>هیئت‌‌‌های مذهبی</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            extension
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>بلاگرها</h2>
                                    </div>
                                </section>
                            </article>
                            <article className='w-full flex flex-wrap lg:flex-nowrap justify-between *:mx-3 *:my-5'>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            mosque
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>خیریه‌‌‌ها</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            location_city
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>قرض‌‌‌الحسنه‌‌‌های خانگی</h2>
                                    </div>
                                </section>
                                <section className='w-full lg:w-1/3 flex flex-wrap content-start px-3'>
                                    <div className='flex items-center justify-start my-5'>
                                        <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-lg p-1">
                                            medication
                                        </span>
                                        <h2 className='text-[21px] text-right font-bold text-black mx-2'>پزشکان</h2>
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
            {/* section 5 --> zarinLink count  */}
            <section className='w-full flex flex-wrap justify center my-10'>
                <div className='w-full md:w-[90%] 2xl:w-[60%] 2xl:container mx-auto bg-[#f1f5fe] rounded-lg flex justify-center'>
                    <p className='font-bold text-[35px] p-6'>
                        تا این لحظه بیش از
                        <span className='text-[#28457b]'>۲۷۰.۰۰۰</span>
                        زرین‌‌لینک ساخته شده است
                    </p>
                </div>
            </section>
            {/* section 5 --> zarinLink count  */}
            {/* empty section */}
            <div className='w-full'>
                <div className='w-full h-[50px]'></div>
            </div>
            {/* empty section */}
        </div>
    )
}
