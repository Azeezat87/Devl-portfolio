import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Button(props) {
 const [navbar, setNavbar] = useState(false)

 return (
   <div className='fixed top-16 left-16 z-10 md:top-8 md:left-8'>
     <button
       onClick={() => setNavbar((prev) => !prev)}
       className='absolute z-10'
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
         'absolute p-[30px] bg-white rounded-2xl md:p-6 whitespace-nowrap',
         'overflow-hidden transition-all duration-[100ms]',
         navbar
           ? 'h-[520px] w-[340px] -mt-8 -ml-8 rounded-[10px] md:h-[450px] md:-mt-4 md:-ml-5'
           : 'h-[50px] w-[50px] rounded-[56px]',
       ].join(' ')}
     >
       <div className='h-[520px] w-[352px] overflow-hidden mt-8'>
         <span className='text-[#2e304b] text-[24px] font-semibold fixed top-20 left-[152px] md:left-20 md:top-5'>
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
   </div>
 );
};
