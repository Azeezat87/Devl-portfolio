import { useState } from "react";

const id = () => Math.random().toString(36);

export default function Client() {
  const [isHovering, setIsHovering] = useState(new Array(6).fill(false))

  function handleMouseOver(i){
     setIsHovering((prev) => {
      const next = [...prev]
      next[i] = true
      return next
     });
  };

  const handleMouseOut = (i) => {
    setIsHovering((prev) => {
      const next = [prev]
      next[i] = false
      retrun
    });
  };

  

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
          onMouseOver={() => handleMouseOver(item)}
          onMouseOut={handleMouseOut}
          className='bg-[#f1f1f1] p-16 flex justify-center hover:bg-white transition duration-1000 ease-in-out'
        >
          {item}
          {isHovering && (
            <div>
          <p className='text-xs'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni,
            nisi.{' '}
          </p>
           </div>
      )}
        </div>
      ))}

      
    </section>
  );
}
