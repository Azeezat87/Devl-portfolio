import Link from 'next/link'
import Image from 'next/image'

export default function Project() {
  return (
    <section id='project' className='sticky-section bg-white'>
      <div className='p-14'>
        <h1 className='text-[32px] font-semibold text-[#2e304b]'>Projects</h1>
        <p className='text-[#6b6c7b] font-semibold'>
          Swipe or drap below to see a small selection of projects I&apos;ve worked on.
        </p>
      </div>
      <div>
        <ul className='flex gap-10 w-fit'>
          <li className='relative bg-blue-300 h-[400px] w-96 rounded-[10px] flex items-center justify-center'>
            <Link href='#'>
             <Image
             priority
             src='/images/burger2.png'
             width={400}
             height={400}
             alt=''
             />
             <div className='mb-0 absolute bottom-6 px-5'>
              <h3>General People</h3>
              <p>Delivery pioneering yet practical workplaces</p>
             </div>
            </Link>
          </li>

          <li className='relative bg-blue-300 h-[400px] w-96 rounded-[10px] flex items-center justify-center'>
            <Link href='#'>
             <Image
             priority
             src='/images/burger2.png'
             width={400}
             height={400}
             alt=''
             />
             <div className='mb-0 absolute bottom-6 px-5'>
              <h3>General People</h3>
              <p>Delivery pioneering yet practical workplaces</p>
             </div>
            </Link>
          </li>

          <li className='relative bg-blue-300 h-[400px] w-96 rounded-[10px] flex items-center justify-center'>
            <Link href='#'>
             <Image
             priority
             src='/images/burger2.png'
             width={400}
             height={400}
             alt=''
             />
             <div className='mb-0 absolute bottom-6 px-5'>
              <h3>General People</h3>
              <p>Delivery pioneering yet practical workplaces</p>
             </div>
            </Link>
          </li>

          <li className='relative bg-blue-300 h-[400px] w-96 rounded-[10px] flex items-center justify-center'>
            <Link href='#'>
             <Image
             priority
             src='/images/burger2.png'
             width={400}
             height={400}
             alt=''
             />
             <div className='mb-0 absolute bottom-6 px-5'>
              <h3>General People</h3>
              <p>Delivery pioneering yet practical workplaces</p>
             </div>
            </Link>
          </li>

          <li className='relative bg-blue-300 h-[400px] w-96 rounded-[10px] flex items-center justify-center'>
            <Link href='#'>
             <Image
             priority
             src='/images/burger2.png'
             width={400}
             height={400}
             alt=''
             />
             <div className='mb-0 absolute bottom-6 px-5'>
              <h3>General People</h3>
              <p>Delivery pioneering yet practical workplaces</p>
             </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
