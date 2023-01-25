import Nav from '../components/nav'
import Link from 'next/link'
import {useState} from 'react'
import Image from 'next/image'



export default function Right(props) {
  const [navbar, setNavbar] = useState(false)
  
  
 return (
   <section className='fixed h-screen w-1/2 bg-[#2e304b] text-[#fd8e8e] flex flex-col items-start p-[30px]'>
     <div className=''>
       <div
         className={[
           'absolute p-[30px] w-fit bg-white rounded-2xl',
           'overflow-hidden transition-all duration-1000',
           navbar
             ? 'h-fit w-fit rounded-[10px] '
             : 'h-12 w-12 rounded-[56px] translate-y-[1.90rem] translate-x-[1.90rem]',
         ].join(', ')}
       >
         <button
           onClick={() => setNavbar((prev) => !prev)}
           className={
             !navbar
               ? 'absolute top-0 left-0'
               : 'flex flex-wrap gap-8 items-center mb-8'
           }
         >
           <span
             style={{backgroundColor: props.theme}}
             className={'flex items-center justify-center rounded-[50%] w-[61px] bg-[#fd8e8e] h-[61px]' }>
             <Image
               priority
               src='/images/burger.png'
               className='mr-0.5 brightness-100 contrast-125'
               height={40}
               width={40}
               alt='project'
             />
           </span>
           <span className='text-[#2e304b] text-[24px] font-semibold'>
             <p>Burger menu</p>
           </span>
         </button>

         <div className=''>
           <div>
             <ul>
               <li className='mb-8'>
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
               <li className='mb-8'>
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
               <li className='mb-8'>
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
               <li className='mb-10'>
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
                 className='h-5 w-5 rounded-full bg-[#fd8e8e]'></button>
               </li>
               <li>
                 <button
                   onClick={() => props.setTheme(props.colors.amber)} 
                   className='h-5 w-5 rounded-full bg-[#fde58e]'></button>
               </li>
               <li>
                 <button 
                 onClick={() => props.setTheme(props.colors.green)}
                 className='h-5 w-5 rounded-full bg-[#8efdb0]'></button>
               </li>
             </ul>
           </div>
         </div>
       </div>

       <div className='mt-[130px] ml-8'>
         <div style={{color: props.theme}}>
         <div className='mb-6'>
           <h1 className='text-5xl font-semibold leading-tight'>
             Hello. I’m a freelance user interface developer
           </h1>
         </div>
         <div className='mb-16'>
           <p className='text-[17px] font-semibold'>
             My name’s Ibrahim Olaitan. I craft user interfaces using
             <br />
             modern frontend web technologies.
           </p>
         </div>
         <div 
             style={{ borderColor: props.theme, '--bg-color': props.theme }}
             id='let-work'
             className='border-2 rounded-full w-[217px] py-[14px] px-[28px] flex justify-center mb-10 hover:text-black whitespace-nowrap'>
             <Link href='#contact'>
             <p className='text-lg font-semibold'>Let&apos;s work together!</p>
           </Link>
         </div>
         </div>

         <div className='text-[#b5b6bd] text-sm font-semibold'>
           <p>
             Find me at{' '}
             <Link
               href='https://twitter.com'
               target='_blank'
               rel='noopener noreferrer'
               className='text-white underline underline-offset-1'
             >
               Twitter
             </Link>
             ,{' '}
             <Link
               href='https://github.com/'
               target='_blank'
               rel='noopener noreferrer'
               className='text-white underline underline-offset-1'
             >
               GitHub
             </Link>{' '}
             and{' '}
             <Link
               href='https://www.linkedin.com'
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
             <Link href='#' className='text-white underline underline-offset-1'>
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