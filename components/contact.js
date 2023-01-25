import Image from 'next/image'
import Form from '../components/form'
import {useState} from 'react'

export default function Contact() {
  const [booking, setBooking] = useState(false);
  const [quote, setQuote] = useState(false);
  const [hello, setHello] = useState(false);
 
  return (
    <section id='contact' className='sticky-section bg-[#f1f1f1] p-14'>
      <div className='mb-8'>
        <h1 className='text-[32px] font-semibold text-[#2e304b]'>Contact me</h1>
      </div>
      <div className='mb-12'>
        <h3 className='mb-2 text-2xl font-semibold text-[#2e304b]'>
          Don&apos;t be shy!
        </h3>
        <p className='text-[#6b6c7b] font-semibold'>
          If you have a project in mind or would like to make an enquiry simply
          select one of the following options.
        </p>
      </div>

      <div>
        <div className='flex items-center mb-8'>
          <button
            onClick={() => setBooking(true)}
            className='bg-[#fd8e8e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'
          >
            <Image
              priority
              src='/images/emoji.png'
              className='brightness-110 contrast-100'
              height={40}
              width={40}
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold'>
            I&apos;d like to book you in
          </p>
        </div>

        {booking && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#fd8e8e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
                <Image
                  priority
                  src='/images/emoji.png'
                  className='brightness-110 contrast-100'
                  height={40}
                  width={40}
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold'>
                I&apos;d like to book you in
              </p>
              <button onClick={() => setBooking(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form />
          </div>
        )}

        <div className='flex items-center mb-8'>
          <button
            onClick={() => setQuote(true)}
            className='bg-[#fde58e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'
          >
            <Image
              priority
              src='/images/emoji2.png'
              className='brightness-110 contrast-100'
              height={40}
              width={40}
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold'>
            I&apos;d like a quote for a project
          </p>
        </div>

        {quote && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#fde58e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
                <Image
                  priority
                  src='/images/emoji2.png'
                  className='brightness-110 contrast-100'
                  height={40}
                  width={40}
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold'>
                I&apos;d like a quote for a project
              </p>
              <button onClick={() => setQuote(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form />
          </div>
        )}

        <div className='flex items-center'>
          <button
            onClick={() => setHello(true)}
            className='bg-[#8efdb0] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'
          >
            <Image
              priority
              src='/images/emoji3.png'
              className=''
              height={40}
              width={40}
              alt=''
            />
          </button>
          <p className='text-lg text-[#2e304b] font-semibold'>
            I&apos;d just like to say hello
          </p>
        </div>

        {hello && (
          <div className='h-[90%] min-w-7xl absolute top-0 -left-72 p-8 bg-white rounded-lg mt-8 z-10 overflow-hidden flex flex-col'>
            <div className='flex items-center mb-8 z-10'>
              <span className='bg-[#8efdb0] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
                <Image
                  priority
                  src='/images/emoji3.png'
                  className='brightness-110 contrast-100'
                  height={40}
                  width={40}
                  alt=''
                />
              </span>
              <p className='text-lg text-[#2e304b] font-semibold'>
                I&apos;d just like to say he
              </p>
              <button onClick={() => setHello(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 ml-60'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <Form />
          </div>
        )}
      </div>
    </section>
  );
}
