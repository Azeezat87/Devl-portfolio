import Image from 'next/image' 

export default function Contact() {
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
         <button className='bg-[#fd8e8e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
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

       <div className='flex items-center mb-8'>
         <button className='bg-[#fde58e] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
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

       <div className='flex items-center'>
         <button className='bg-[#8efdb0] h-[60px] w-[60px] rounded-full flex items-center justify-center mr-8'>
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
     </div>
   </section>
 );
}
