import React from 'react'
import Image from 'next/image'

export default function Nav() {
  return (
    <div>
      <div className=' p-8 w-fit bg-white absolute -top-6 -left-8 rounded-lg'>
        <header className=''>
          <button
            
            className='flex justify-center items-center gap-6 mb-6'
          >
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
    </div>
  );
}
