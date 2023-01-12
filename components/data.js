              
<section className='fixed h-screen w-1/2 bg-[#2e304b] text-[#fd8e8e] flex flex-col items-start p-[60px]'>
     <div className='relative'>
       <div className=' p-8 w-fit bg-white absolute -top-6 -left-8 rounded-lg'>
         <header className=''>
           <button
             onClick={() => setNavbar((prev) => !prev)}
             className='flex justify-center items-center gap-6 mb-6'>
             <span className='flex items-center justify-center bg-[#fd8e8e]  rounded-[50%] w-[60px] h-[60px]'>
               <Image
                 priority
                 src='/images/burger2.png'
                 className=''
                 height={40}
                 width={40}
                 alt='project'
               />
             </span>
             <span className='text-black text-[23px] font-semibold'>
               Burger menu
             </span>
           </button>
         </header>
         
         <div className='flex-1'>
           <div>
             <ul>
               <li className='mb-6'>
                 <h4 className='text-black text-[18px] font-semibold'>About</h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Delicately tender with a slice of cheese.
                 </p>
               </li>
               <li className='mb-6'>
                 <h4 className='text-black text-[18px] font-semibold'>
                   Clients
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Our great selection from the best in town.
                 </p>
               </li>
               <li className='mb-6'>
                 <h4 className='text-black text-[18px] font-semibold'>
                   Projects
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   Served on a bed of frontend tech.
                 </p>
               </li>
               <li className='mb-8'>
                 <h4 className='text-black text-[18px] font-semibold'>
                   Contact
                 </h4>
                 <p className='text-[#6b6c7b] text-[16px] font-medium'>
                   A superb choice to finish the day
                 </p>
               </li>
             </ul>
             <ul className='flex gap-2'>
               <li>
                 <button className='h-5 w-5 rounded-full bg-[#fd8e8e]'></button>
               </li>
               <li>
                 <button className='h-5 w-5 rounded-full bg-[#fde58e]'></button>
               </li>
               <li>
                 <button className='h-5 w-5 rounded-full bg-[#8efdb0]'></button>
               </li>
             </ul>
           </div>
         </div>
       </div>
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
       <div className='border-2 border-[#fd8e8e] rounded-full w-[217px] py-[14px] px-[28px] mb-10 hover:bg-[#fd8e8e] hover:text-black'>
         <Link href='#contact'>
           <p className='text-lg font-semibold'>Let&apos;s work together!</p>
         </Link>
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
   </section>