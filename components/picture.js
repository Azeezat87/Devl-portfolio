import Image from 'next/image'
import { config } from '../utils/config'

export default function Picture(props) {
 return (
   <section
     style={{ backgroundColor: props.theme }}
     className='sticky-section bg-[#fd8e8e] md:w-full'
   >
     <Image
       priority
       src={config.picture_page}
       className='mix-blend-multiply brightness-125 saturate-0 w-full h-full md:object-contain rotate-90'
       height='0'
       width='0'
       sizes='100vh'
       alt='picture'
     />
   </section>
 );
}