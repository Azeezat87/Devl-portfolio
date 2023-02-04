import { config } from '../utils/config'

export default function About() {
 return (
   <section id='about' className='sticky-section bg-white flex flex-col px-14 py-10 md:w-full md:px-7'>
     <div className='mb-6 md:mb-8'>
       <h1 className='font-semibold text-[32px] text-[#2e304b] mb-5 md:text-2xl md:font-bold md:mb-8'>
         About me
       </h1>
       <h3 className='font-semibold text-2xl text-[#2e304b] md:text-lg md:font-bold md:leading-6'>
         {config.aboutMe_h3}
       </h3>
     </div>
     <div className="mb-5 md:mb-8">
       <h4 className='text-[#2e304b] text-lg font-semibold mb-2 md:text-base md:font-bold'>Technical</h4>
       <p className='text-[#6b6c7b] text-base font-medium md:text-base md:font-bold'>
         {config.aboutMe_paragraph1}
       </p>
     </div>
     <div className=''>
       <h4 className='text-[#2e304b] text-lg font-semibold mb-2 md:text-base md:font-bold'>Personal</h4>
       <p className='text-[#6b6c7b] text-base font-medium mb-5 md:text-base md:font-bold md:mb-8'>
         {config.aboutMe_paragraph2}
       </p>
       <p className='text-[#6b6c7b] text-base font-medium md:text-base md:font-bold'>
         So, let&apos;s work together !
       </p>
     </div>
   </section>
 );
}
