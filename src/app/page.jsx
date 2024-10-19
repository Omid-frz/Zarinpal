import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* section 1 --> banner*/}
      <section className='w-full flex flex-wrap justify center my-5'>
        <div className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto bg-gradient-to-r from-[#21254e] to-[#2b4a83] rounded-2xl'>
          <div className='w-full my-10 flex justify-center items-center p-4'>
            <div className='w-full sm:w-[70%] xl:w-[50%] flex flex-wrap justify-center items-center xl:mx-10'>
              <hgroup className='text-white flex flex-wrap justify-center text-center my-10'>
                <h1 className='text-[25px] text-justify md:text-[28px] lg:text-[35px] font-bold mb-5 leading-relaxed'>بیش از ۱۴ سال <br />انتخاب مطمئنِ  کسب و کار های آنلاین</h1>
                <p className='leading-loose text-justify'>زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند.</p>
              </hgroup>
              <div className='flex flex-wrap w-full justify-center xl:justify-start *:ml-4 *:cursor-pointer my-16'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-xl'>ثبت نام</span>
                <span className='flex justify-center items-center bg-[#435a8a] px-3 py-2 font-bold rounded-xl text-white'>ورود</span>
              </div>
            </div>
            <figure className='hidden lg:flex lg:w-[50%] justify-center items-center mx-10'>
              <Image src={'home.svg'} width={500} height={100} />
            </figure>
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
      {/* section 2 --> Internet payment */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex justify-center items-center p-4'>
            <figure className='hidden sm:flex sm:w-full xl:w-[50%] justify-center items-center'>
              <Image src={'pg1.svg'} width={500} height={450} />
            </figure>
            <div className='w-full lg:w-[50%] flex flex-wrap justify-start items-center mr-6'>
              <hgroup className='mb-10 w-full flex flex-wrap  items-center'>
                <h3 className='text-[#747480] text-[23px] text-center'>درگاه پرداخت اینترنتی</h3>
                <h2 className='font-bold text-[24px] md:text-[30px] text-center'>مهندسی شده برای رشد و فروش بیش‌تر</h2>
                <p className='max-w-[500px] text-[16px] py-6 text-[#3a3a3a] leading-[40px] text-justify border-b'>درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی(PSPها)،کاربران را به سریع‌ترین و مطمئن‌ترین درگاه بانکی منتقل می‌کند و به واسطه‌ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش‌های موفق می‌شود.</p>
              </hgroup>
              <div className='flex flex-wrap *:ml-4 *:cursor-pointer justify-start'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-lg'>ساخت درگاه پرداخت</span>
                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیشتر بدانید
                  <span className="material-symbols-outlined transform rotate-180 px-2">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2 --> Internet payment */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
      {/* section 3 --> zarin link */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex justify-center items-center p-4'>
            <div className='w-full lg:w-[45%] flex flex-wrap justify-start items-center mr-6'>
              <hgroup className='mb-10 w-full flex flex-wrap items-center'>
                <h3 className='w-full text-[#747480] text-[23px] text-right'>زرین‌لینک</h3>
                <h2 className='font-bold text-[24px] md:text-[30px] text-center'>پرداخت در شبکه‌های اجتماعی</h2>
                <p className='max-w-[500px] text-[16px] py-6 text-[#3a3a3a] leading-[40px] text-justify border-b'>زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود.</p>
              </hgroup>
              <div className='flex flex-wrap *:ml-4 *:cursor-pointer justify-start'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-lg'>ساخت زرین‌لینک</span>
                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیشتر بدانید
                  <span className="material-symbols-outlined transform rotate-180 px-2">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
            <figure className='hidden sm:flex sm:w-full xl:w-[55%] justify-center items-center'>
              <Image src={'social-image.svg'} width={700} height={450} />
            </figure>
          </div>
        </div>
      </section>
      {/* section 3 --> zarin link */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
      {/* section 4 --> zarrin card */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex justify-center items-center p-4'>
            <figure className='hidden sm:flex sm:w-full xl:w-[50%] justify-center items-center'>
              <Image className='flex justify-center items-center' title='زرین‌کارت' src={'zarinCard.svg'} width={420} height={350} />
            </figure>
            <div className='w-full lg:w-[50%] flex flex-wrap justify-start items-center mr-6'>
              <hgroup className='mb-10 w-full flex flex-wrap items-center'>
                <h3 className='w-full text-[#747480] text-[23px] text-right'>زرین‌کارت</h3>
                <h2 className='font-bold text-[24px] md:text-[30px] text-center'>طلایی‌ترین کارتِ بانکی</h2>
                <p className='max-w-[500px] text-[16px] py-6 text-[#3a3a3a] leading-[40px] text-justify border-b'>زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند.</p>
              </hgroup>
              <div className='flex flex-wrap *:ml-4 *:cursor-pointer justify-start'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-lg'>درخواست زرین‌کارت</span>
                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیش‌تر بدانید
                  <span className="material-symbols-outlined transform rotate-180 px-2">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 4 --> zarrin card */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
      {/* section 5 --> sharing */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex justify-center items-center p-4'>
            <div className='w-full lg:w-[50%] flex flex-wrap justify-start items-center mr-6'>
              <hgroup className='mb-10 w-full flex flex-wrap items-center'>
                <h3 className='w-full text-[#747480] text-[23px] text-right'>تسهیم</h3>
                <h2 className='font-bold text-[24px] md:text-[30px] text-center'>درگاه پرداخت اشتراکی</h2>
                <p className='max-w-[500px] text-[16px] py-6 text-[#3a3a3a] leading-[40px] text-justify border-b'>تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود.</p>
              </hgroup>
              <div className='flex flex-wrap *:ml-4 *:cursor-pointer justify-start'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-lg'>درخواست فعال‌سازی تسهیم</span>
                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیش‌تر بدانید
                  <span className="material-symbols-outlined transform rotate-180 px-2">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
            <figure className='hidden sm:flex sm:w-full xl:w-[50%] justify-center items-center'>
              <Image className='flex justify-center items-center' title='درگاه پرداخت اشتراکی' src={'payout.svg'} width={550} height={350} />
            </figure>
          </div>
        </div>
      </section>
      {/* section 5 --> sharing */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
      {/* section 6 --> zarin plus */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex justify-center items-center p-4'>
            <figure className='hidden sm:flex sm:w-full xl:w-[50%] justify-center items-center'>
              <Image className='flex justify-center items-center' title='درگاه پرداخت اشتراکی' src={'zarinplus.svg'} width={400} height={350} />
            </figure>
            <div className='w-full lg:w-[50%] flex flex-wrap justify-start items-center mr-6'>
              <hgroup className='mb-10 w-full flex flex-wrap items-center'>
                <h3 className='w-full text-[#747480] text-[23px] text-right'>زرین‌پلاس</h3>
                <h2 className='font-bold text-[24px] md:text-[30px] text-center'>ابزار هوشمند سوددهی</h2>
                <p className='max-w-[500px] text-[16px] py-6 text-[#3a3a3a] leading-[40px] text-justify border-b'>زرین‌پلاس محصولی از زرین‌پال، فرصتی فراهم کرده است تا کسب و کارها در هر اندازه و دسته‌بندی شغلی، با در دست داشتن ابزاری قدرتمند برای وفادارسازی مشتریان و افزایش فروش محصولات خود، بتوانند کسب و کار خود را به بهترین شکل توسعه و گسترش دهند و جایگاه برترین فروشگاه منطقه را به خود اختصاص دهند.</p>
              </hgroup>
              <div className='flex flex-wrap *:ml-4 *:cursor-pointer justify-start'>
                <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 font-semibold rounded-lg'>پیوستن به زرین‌پلاس</span>
                <span className='flex justify-center items-center bg-[#e8effe99] px-3 py-2 font-bold rounded-lg text-[#28457b]'>بیش‌تر بدانید
                  <span className="material-symbols-outlined transform rotate-180 px-2">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 6 --> zarin plus */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
      {/* section 7 --> properties */}
      <section className='w-full flex flex-wrap justify center my-10'>
        <div className='w-full 2xl:w-[65%] 2xl:container mx-auto'>
          <div className='w-full flex flex-col xl:flex-row justify-center items-center xl:items-start p-4'>
            <article className='w-[90%] xl:w-[35%] flex justify-center items-start mb-14'>
              <hgroup className='flex w-full justify-center flex-wrap'>
                <h2 className='text-[22px] lg:text-[30px] font-bold mb-4'>ویژگی‌های درگاه پرداخت زرین‌پال</h2>
                <p className='text-[14px] text-justify leading-8'>درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود.</p>
              </hgroup>
            </article>
            <div className='w-full lg:w-[65%] flex flex-wrap justify-start items-center xl:mr-7'>
              <article className='w-full flex flex-col sm:flex-row justify-center items-center xl:items-start *:mx-3 lg:border-b-[2px]'>
                <section className='w-[75%] sm:w-[300px]'>
                  <div className='flex items-center'>
                    <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-[15px] p-1">
                      verified
                    </span>
                    <h2 className='text-[18px] lg:text-[24px] font-bold text-[#28457b] mx-2'>ضمانتِ پرداخت</h2>
                  </div>
                  <p className='text-[#303030] mt-1 leading-8'>درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد.</p>
                </section>
                <span className='hidden lg:flex w-[1px] h-[200px] bg-slate-300'></span>
                <section className='w-[75%] mt-16 lg:mt-0 sm:w-[300px]'>
                  <div className='flex items-center'>
                    <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-[15px] p-1">
                      alt_route
                    </span>
                    <h2 className='text-[18px] lg:text-[24px] font-bold text-[#28457b] mx-2'>مسیردهی هوشمند</h2>
                  </div>
                  <p className='text-[#303030] text-right mt-1 leading-8'>استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند.</p>
                </section>
              </article>
              <article className='w-full flex flex-col sm:flex-row justify-center items-center *:mx-3'>
                <section className='w-[75%] mt-16 lg:mt-0 sm:w-[300px] '>
                  <div className='flex items-center mt-5'>
                    <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-[15px] p-1">
                      headset_mic
                    </span>
                    <h2 className='text-[18px] lg:text-[24px] font-bold text-[#28457b] mx-2'>پشتیبانی ۲۴/۷</h2>
                  </div>
                  <p className='text-[#303030] mt-1 leading-8'>هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم.</p>
                </section>
                <span className='hidden lg:flex w-[1px] h-[200px] bg-slate-300'></span>
                <section className='w-[75%] mt-16 lg:mt-0 sm:w-[300px]'>
                  <div className='flex items-center mt-5'>
                    <span class="material-symbols-outlined text-[#28457b] !text-[40px] bg-slate-200 rounded-[15px] p-1">
                      headset_mic
                    </span>
                    <h2 className='text-[18px] lg:text-[24px] font-bold text-[#28457b] mx-2'>امنیتِ پرداخت</h2>
                  </div>
                  <p className='text-[#303030] mt-1 leading-8'>درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست.</p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* section 7 --> properties */}
      {/* empty section */}
      <div className='w-full'>
        <div className='w-full h-[50px]'></div>
      </div>
      {/* empty section */}
    </div>
  )
}
