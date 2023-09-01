import {
  useRef,
  useState,
} from 'react';

import About from '../components/about';
import Button from '../components/button';
import Client from '../components/client';
import Contact from '../components/contact';
import Picture from '../components/picture';
import Project from '../components/project';
import Right from '../components/right';

const colors = {
  red: '#fd8e8e',
  amber: '#fde58e',
  green: '#8efdb0'
};

export default function Home() {
  const [theme, setTheme] = useState(colors.red);
  const blob = useRef(null)

  // useEffect(() => {
  //   const handleMouse = (event) => {
  //     const { clientX, clientY } = event;
      
  //     blob.current?.animate(
  //       {
  //         left: `${clientX}px`,
  //         top: `${clientY}px`,
  //       },
  //       { duration: 100, fill: 'forwards' }
  //     );
  //   }

  //   document.addEventListener('pointermove', handleMouse)
  //   return () => {
  //     document.removeEventListener('pointermove', handleMouse)
  //   }
  // }, [])

  return (
    <>
      <div className='h-screen overflow-hidden'>
        <main className='w-screen h-screen overflow-y-auto scroll-smooth'>
          {/* <div
            className='bg-[url("/images/cursor3.png")] bg-contain bg-no-repeat bg-center invert h-[40px] aspect-square absolute z-[999] left-[50%] top-[50%] '
            ref={blob}
          ></div> */}
          <Button theme={theme} setTheme={setTheme} colors={colors} />
          <Right theme={theme} setTheme={setTheme} />
          <Picture theme={theme} colors={colors} />
          <About />
          <Client />
          <Project />
          <Contact />
        </main>
      </div>
    </>
  );
}
