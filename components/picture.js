import Image from 'next/image'

export default function Picture(props) {
 return (
   <section
     style={{ backgroundColor: props.theme }}
     className='sticky-section bg-[#fd8e8e]'
   >
     <Image
       priority
       src='/images/ibrahim.jpg'
       className='mix-blend-multiply brightness-125 saturate-0 object-cover rotate-90'
       height={680}
       width={680}
       alt='picture'
     />
   </section>
 );
}