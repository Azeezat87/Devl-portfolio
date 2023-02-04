import Image from 'next/image'
import Form from '../components/form'
import {useState} from 'react'

export default function Contact() {
  // const [booking, setBooking] = useState(false);
  // const [quote, setQuote] = useState(false);
  // const [hello, setHello] = useState(false);
  const [contact, setContact] = useState("")
 
  return (
    <section
      id='contact'
      style={{ backgroundColor: contact ? 'rgba(46,48,75,.5)' : '#f1f1f1' }}
      className='sticky-section bg-[#f1f1f1] p-14 md:w-full md:px-7'
    >
      <div className='mb-8'>
        <h1 className='text-[32px] font-semibold text-[#2e304b] md:text-[24px] md:font-bold md:text-black'>
          Contact me
        </h1>
      </div>
      <div className='mb-12 md:mb-16'>
        <h3 className='mb-2 text-2xl font-semibold text-[#2e304b] md:text-[18px] md:font-bold md:text-black'>
          Don&apos;t be shy!
        </h3>
        <p className='text-[#6b6c7b] font-semibold md:font-bold'>
          If you have a project in mind or would like to make an enquiry simply
          select one of the following options.
        </p>
      </div>

      <div>
        <div className='flex items-center mb-8'>
          <button
            onClick={() => setContact('booking')}
            className='bg-[#fd8e8e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-5'
          >
            <Image
              priority
              src='/images/emoji.png'
              className='brightness-110 contrast-100 h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
              height='0'
              width='0'
              sizes='100vw'
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold md:font-bold text-black'>
            I&apos;d like to book you in
          </p>
        </div>

        {contact === 'booking' && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col md:h-[96%] md:w-[92%] md:left-4 md:-top-3 md:rounded-xl md:p-7'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#fd8e8e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-4'>
                <Image
                  priority
                  src='/images/emoji.png'
                  className='brightness-110 contrast-100 h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
                  height='0'
                  width='0'
                  sizes='100vw'
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold md:text-black md:mr-16'>
                I&apos;d like to book you in
              </p>
              <button onClick={() => setContact('')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60 md:ml-0'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form type={contact} />
          </div>
        )}

        <div className='flex items-center mb-8'>
          <button
            onClick={() => setContact('quote')}
            className='bg-[#fde58e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-5'
          >
            <Image
              priority
              src='/images/emoji2.png'
              className='brightness-110 contrast-100 h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
              height='0'
              width='0'
              sizes='100vw'
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold md:text-black md:font-bold text-black'>
            I&apos;d like a quote for a project
          </p>
        </div>

        {contact === 'quote' && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col md:h-[96%] md:w-[92%] md:left-4 md:-top-3 md:rounded-xl md:p-7'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#fde58e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-4'>
                <Image
                  priority
                  src='/images/emoji2.png'
                  className='brightness-110 contrast-100 h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
                  height='0'
                  width='0'
                  sizes='100vw'
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold md:text-black md:text-base md:mr-10'>
                I&apos;d like a quote for a project
              </p>
              <button onClick={() => setContact('')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60 md:ml-0'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form type={contact} />
          </div>
        )}

        <div className='flex items-center'>
          <button
            onClick={() => setContact('hello')}
            className='bg-[#8efdb0] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-5'
          >
            <Image
              priority
              src='/images/emoji3.png'
              className='h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
              height='0'
              width='0'
              sizes='100vw'
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold md:font-bold text-black'>
            I&apos;d just like to say hello
          </p>
        </div>

        {contact === 'hello' && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col md:h-[96%] md:w-[92%] md:left-4 md:-top-3 md:rounded-xl md:p-7'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#8efdb0] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8 md:h-[50px] md:w-[50px] md:mr-4'>
                <Image
                  priority
                  src='/images/emoji3.png'
                  className='brightness-110 contrast-100 h-[40px] w-[40px] md:h-[30px] md:w-[30px]'
                  height='0'
                  width='0'
                  sizes='100vw'
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold md:text-black md:mr-16 md:text-base'>
                I&apos;d just like to say hello
              </p>
              <button onClick={() => setContact('')}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60 md:ml-0'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form type={contact} />
          </div>
        )}
      </div>
    </section>
  );
}
