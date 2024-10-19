import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='w-full h-[200px]'>
        <section className='w-full md:w-[90%] xl:w-[60%] 2xl:container mx-auto'>
          {/* zarin family */}
          <div className='w-full flex flex-wrap justify-center items-center rounded-2xl border'>
            <div className='w-full flex flex-wrap justify-center items-center my-7 *:my-3'>
              <h2 className='w-full lg:text-[30px] font-bold text-center'>به خانواده‌ی یک میلیونی زرین‌پال بپیوندید.</h2>
              <p className='w-full text-[#515151] lg:text-[22px] text-center'>یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما</p>
              <span className='flex justify-center items-center bg-gradient-to-r from-[#ffd900] to-[#ffe422] px-4 py-2 rounded-xl cursor-pointer'>شروع کنید</span>
            </div>
          </div>
          {/* zarin family */}
          {/* empty section */}
          <div className='w-full'>
            <div className='w-full h-[50px]'></div>
          </div>
          {/* empty section */}
          {/* footers link */}
          <section className='w-full flex flex-wrap justify center my-10'>
            <div className='w-full 2xl:container mx-auto rounded-lg'>
              <div className='flex'>
                <section className='hidden w-[70%] lg:flex *:ml-16'>
                  <div className='*:my-7'>
                    <h2 className='text-[22px] font-bold hover:text-[#21457f]'>محصولات</h2>
                    <ul className='text-[#4f4f4f] text-[18px] *:mt-4'>
                      <li>
                        <Link href={'/pages/ZarinLink'}>زرین‌لینک</Link>
                      </li>
                      <li>
                        <Link href={'/pages/Payment-gateway'}>درگاه پرداخت اینترنتی</Link>
                      </li>
                      <li>
                        <Link href={'/pages/ZarinCard'}>زرین‌کارت</Link>
                      </li>
                      <li>
                        <Link href={'/'}>عیان</Link>
                      </li>
                      <li>
                        <Link href={'/'}>استرداد وجه</Link>
                      </li>
                      <li>
                        <Link href={'/'}>تسویه پیش از موعد</Link>
                      </li>
                      <li>
                        <Link href={'/'}>تسهیم فردایی</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='*:my-7'>
                    <h2 className='text-[22px] font-bold hover:text-[#21457f]'>آشنایی با زرین‌پال</h2>
                    <ul className='text-[#4f4f4f] text-[18px] *:mt-4'>
                      <li>
                        <Link href={'/'}>تعرفه‌ها</Link>
                      </li>
                      <li>
                        <Link href={'/'}>درباره ما</Link>
                      </li>
                      <li>
                        <Link href={'/'}>سوالات متداول</Link>
                      </li>
                      <li>
                        <Link href={'/pages/Affilate'}>همکاری در فروش</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='*:my-7'>
                    <h2 className='text-[22px] font-bold hover:text-[#21457f]'>ارتباط بیشتر</h2>
                    <ul className='text-[#4f4f4f] text-[18px] *:mt-4'>
                      <li>
                        <Link href={'/pages/Contact'}>تماس با ما</Link>
                      </li>
                      <li>
                        <Link href={'/'}>قوانین و مقررات</Link>
                      </li>
                      <li>
                        <Link href={'/pages/Policy'}>حریم خصوصی</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='*:my-7 ml-0'>
                    <h2 className='text-[22px] font-bold hover:text-[#21457f]'>منابع</h2>
                    <ul className='text-[#4f4f4f] text-[18px] *:mt-4'>
                      <li>
                        <Link href={'/'}>دریافت شماره شبا</Link>
                      </li>
                      <li>
                        <Link href={'/'}>زرین‌بین</Link>
                      </li>
                      <li>
                        <Link href={'/'}>توسعه‌دهندگان</Link>
                      </li>
                      <li>
                        <Link href={'/'}>وبلاگ</Link>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* social media */}
                <section className='w-full lg:w-[30%] flex flex-wrap justify-center'>
                  <div className='*:my-7'>
                    <h2 className='text-[22px] font-bold hover:text-[#21457f]'>نوشته شده توسط امید فیروزی</h2>
                    <p className='text-[18px] font-bold hover:text-[#21457f]'>لینک شبکه های اجتماعی:</p>
                    <div className='*:m-2 flex justify-center'>
                      <Link target='_blank' href={'https://github.com/Omid-frz'}>
                        <i className="bi bi-github text-[#28457b] text-[30px] bg-slate-200 rounded-lg px-2 py-1 flex justify-center items-center"></i>
                      </Link>
                      <Link target='_blank' href={'https://linkedin.com/in/omid-firouzi-9793a62a9'}>
                        <i className="bi bi-linkedin text-[#28457b] text-[30px] bg-slate-200 rounded-lg px-2 py-1 flex justify-center items-center"></i>
                      </Link>
                      <Link target='_blank' href={'https://instagram.com/omid._web'}>
                        <i className="bi bi-instagram text-[#28457b] text-[30px] bg-slate-200 rounded-lg px-2 py-1 flex justify-center items-center"></i>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
          {/* footers link */}
          {/* empty section */}
          <div className='w-full'>
            <div className='w-full h-[50px]'></div>
          </div>
          {/* empty section */}
        </section>
      </footer>
    </div>
  )
}
