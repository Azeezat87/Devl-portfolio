import Link from 'next/link'
import {useState} from 'react'
import Image from 'next/image'
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

export default function Right(props) {
  const [navbar, setNavbar] = useState(false)
  
  
 return (
   <section className='fixed h-screen w-1/2 bg-[#2e304b] text-[#fd8e8e] flex flex-col items-start p-[30px] md:w-screen md:sticky md:top-0 md:p-0'>
     <div className='relative z-[1000]'>
       <button
         onClick={() => setNavbar((prev) => !prev)}
         className='absolute top-5 left-8 md:top-[30px] z-10'
       >
         <span
           style={{ backgroundColor: props.theme }}
           className={
             'flex items-center justify-center rounded-[50%] w-[61px] h-[61px] md:w-[50px] md:h-[50px]'
           }
         >
           <Image
             priority
             src='/images/burger.png'
             className='mr-0.5 brightness-100 contrast-125 h-10 w-10 md:h-8 md:w-8'
             height='0'
             width='0'
             sizes='100vh'
             alt='project'
           />
         </span>
       </button>

       <div
         className={[
           'absolute top-5 left-8 p-[30px] bg-white rounded-2xl md:top-[30px] md:p-6',
           'overflow-hidden transition-all duration-300',
           navbar
             ? 'h-[520px] w-[352px] -mt-6 -ml-7 rounded-[10px] md:-mt-3 md:-ml-4'
             : 'h-[50px] w-[50px] rounded-[56px]',
         ].join(' ')}
       >
         <div className='h-[520px] w-[352px] overflow-hidden mt-8'>
           <span className='text-[#2e304b] text-[24px] font-semibold absolute top-[38px] right-24 md:left-20 md:top-5'>
             <p>Burger menu</p>
           </span>
           <div className='mt-14 md:mt-8'>
             <ul>
               <li className='mb-8 md:mb-5'>
                 <h4
                   onClick={() => setNavbar(false)}
                   className='text-[#2e304b] text-[18px] font-semibold'
                 >
                   <Link href='#about'>About</Link>
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Delicately tender with a slice of cheese.
                 </p>
               </li>
               <li className='mb-8 md:mb-5'>
                 <h4
                   onClick={() => setNavbar(false)}
                   className='text-[#2e304b] text-[18px] font-semibold'
                 >
                   <Link href='#client'>Clients</Link>
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Our great selection from the best in town.
                 </p>
               </li>
               <li className='mb-8 md:mb-5'>
                 <h4
                   onClick={() => setNavbar(false)}
                   className='text-[#2e304b] text-[18px] font-semibold'
                 >
                   <Link href='#project'>Projects</Link>
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Served on a bed of frontend tech.
                 </p>
               </li>
               <li className='mb-10 md:mb-8'>
                 <h4
                   onClick={() => setNavbar(false)}
                   className='text-[#2e304b] text-[18px] font-semibold'
                 >
                   <Link href='#contact'>Contact</Link>
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   A superb choice to finish the day
                 </p>
               </li>
             </ul>

             <ul className='flex gap-2'>
               <li>
                 <button
                   onClick={() => props.setTheme(props.colors.red)}
                   className='h-5 w-5 rounded-full bg-[#fd8e8e]'
                 ></button>
               </li>
               <li>
                 <button
                   onClick={() => props.setTheme(props.colors.amber)}
                   className='h-5 w-5 rounded-full bg-[#fde58e]'
                 ></button>
               </li>
               <li>
                 <button
                   onClick={() => props.setTheme(props.colors.green)}
                   className='h-5 w-5 rounded-full bg-[#8efdb0]'
                 ></button>
               </li>
             </ul>
           </div>
         </div>
       </div>

       <div className='mt-[130px] ml-8 md:mt-80 '>
         <div style={{ color: props.theme }}>
           <div className='mb-6 md:mb-8 '>
             <h1 className='text-5xl font-semibold leading-tight md:text-3xl md:leading-normal md:w-[88%]'>
               Hello. I’m a freelance user interface developer
             </h1>
           </div>
           <div className='mb-16 md:mb-8'>
             <p className='text-[17px] font-semibold w-[80%] md:text-[15px] md:w-[95%]'>
               My name’s Ibrahim Olaitan. I craft user interfaces using modern frontend web technologies.
             </p>
           </div>
           <div
             style={{ borderColor: props.theme, '--bg-color': props.theme }}
             id='let-work'
             className='border-2 rounded-full w-[217px] py-[14px] px-[28px] flex justify-center mb-10 hover:text-black whitespace-nowrap md:py-[12px] md:px-[20px] md:mb-64'
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
             <Link
               href={config.rightPage_twitter}
               target='_blank'
               rel='noopener noreferrer'
               className='text-white underline underline-offset-1'
             >
               Twitter
             </Link>
             ,{' '}
             <Link
               href={config.rightPage_github}
               target='_blank'
               rel='noopener noreferrer'
               className='text-white underline underline-offset-1'
             >
               GitHub
             </Link>{' '}
             and{' '}
             <Link
               href={config.rightPage_linkedin}
               target='_blank'
               rel='noopener noreferrer'
               className='text-white underline underline-offset-1'
             >
               LinkedIn
             </Link>
             .
           </p>
           <p>
             Download{' '}
             <Link href={config.rightPage_resume} className='text-white underline underline-offset-1'>
               my resume
             </Link>{' '}
             (PDF 296kb)
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}