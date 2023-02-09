import Link from 'next/link'
import Image from 'next/image'

export default function Project() {
  return (
    <section id='project' className='sticky-section bg-white md:w-full'>
      <div className='p-14 md:pl-8 pt-[100px]'>
        <h1 className='text-[32px] font-semibold text-[#2e304b] md:text-[24px] md:font-bold'>Projects</h1>
        <p className='text-[#6b6c7b] font-semibold md:text-black md:mt-1'>
          Swipe or drap below to see a small selection of projects I&apos;ve worked on.
        </p>
      </div>

    </section>
  );
}
