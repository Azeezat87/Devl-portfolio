import { useState } from "react";
import { config } from '../utils/config';

const id = () => Math.random().toString(36);

// const myClient = [
//   {title: 'SomeOne', description: "hello world this is javascript"},
//   {title: 'RAGGED EDGE', description: "hello world this is javascript"},
//   {title: 'the hoxton', description: "hello world this is javascript"},
//   {title: 'AllofUs', description: "hello world this is javascript"},
//   {title: 'Foolproof', description: "hello world this is javascript"},
//   {title: 'parallel', description: "hello world this is javascript"},
//   {title: 'Somo', description: "hello world this is javascript"},
//   {title: 'Rotate', description: "hello world this is javascript"},
// ];

export default function Client() {
   

  return (
    <section className='sticky-section bg-white grid grid-cols-2 gap-0.5 text-xl md:w-full'>
      {config.client_page.map((item, index) => (
        <Card key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}

function Card({ title, description }) {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div
      id={id()}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className='bg-[#f1f1f1] w-full h-full hover:bg-white transition duration-500 ease-in-out'
    >
      {isHovering ? (
        <div className="w-full h-full p-5 flex flex-col justify-center transition-all duration-1000 ">
          <h6 className="font-semibold">{title}</h6>
          <p className="text-base font-medium">{description}</p>
        </div>
      ) : (
        <div className='p-16 flex justify-center font-semibold md:mt-7'>{title}</div>
      )}
    </div>
  );
}