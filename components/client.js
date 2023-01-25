import { useState } from "react";

const id = () => Math.random().toString(36);

export default function Client() {
  // const [isHovering, setIsHovering] = useState(false)

  

  return (
    <section className='sticky-section bg-white grid grid-cols-2 gap-0.5 text-xl'>
      {[
        'SomeOne',
        'RAGGED EDGE',
        'the hoxton',
        'AllofUs',
        'Foolproof',
        'parallel',
        'Somo',
        'Rotate',
      ].map((item, index) => (
        <div
          id={id()}
          key={index}
          // onMouseOver={() => setIsHovering(true)}
          // onMouseOut={() => setIsHovering(false)}
          className='bg-[#f1f1f1] p-16 flex justify-center hover:bg-white transition duration-1000 ease-in-out'
        >
          {item}
        </div>
      ))}
    </section>
  );
}
