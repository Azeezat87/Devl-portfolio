import Link from 'next/link'
import {useState} from 'react'
import { config } from '../utils/config'

// const Lists = ({text, onClick, href}) => {
//   <li className='mb-8'>
//      <h4
//         onClick={onClick}
//         className='text-[#2e304b] text-[18px] font-semibold'
//      >
//        <Link href={href}>{text}</Link>
//      </h4>
//       <p className='text-[#6b6c7b] text-[16px] font-medium'>
//         {text}
//       </p>
//      </li>
// }

const Links = ({href, text}) => (
  <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-white underline underline-offset-1'
  >
  {text}
  </Link>
)

export default function Right(props) {
  
 return (
   <section className='fixed h-screen w-1/2 bg-[#2e304b] text-[#fd8e8e] flex flex-col items-start p-[30px] md:w-screen md:sticky md:top-0 md:p-0'>
     <div className='flex pt-24 pb-8 pl-8 flex-col md:pt-20 h-full md:pb-6'>
         <div style={{ color: props.theme }} className='my-auto'>
           <div className='mb-5 md:mb-8 '>
             <h1 className='text-5xl font-semibold leading-tight md:text-3xl md:leading-normal md:w-[88%]'>
               Hello. I’m a freelance user interface developer
             </h1>
           </div>
           <div className='mb-14 md:mb-8'>
             <p className='text-[17px] font-semibold w-[80%] md:text-[15px] md:w-[95%]'>
               My name’s Ibrahim Olaitan. I craft user interfaces using modern frontend web technologies.
             </p>
           </div>
           <div
             style={{ borderColor: props.theme, '--bg-color': props.theme }}
             id='let-work'
             className='border-2 rounded-full w-[217px] py-[14px] px-[28px] flex justify-center hover:text-black whitespace-nowrap'
           >
             <Link href='#contact'>
               <p className='text-lg font-semibold md:text-base'>
                 Let&apos;s work together!
               </p>
             </Link>
           </div>
         </div>

         <div className='text-[#b5b6bd] text-sm font-semibold'>
           <p>
             Find me at{' '}
             <Links 
               href={config.rightPage_twitter}
               text='Twitter'
             />
             ,{' '}
             <Links 
               href={config.rightPage_github}
               text='GitHub'
             />
             {' '}
             and{' '}
             <Links 
               href={config.rightPage_linkedin}
               text='LinkedIn'
             />
             .
           </p>
           <p>
           Download{' '}
           <a href={config.rightPage_resume} className='text-white underline underline-offset-1' download>my resume</a>
           {' '}
             (PDF 80kb)
           </p>
         </div>
       </div>
   </section>
 );
}