import Head from 'next/head';
import Button from '../components/button'
import Right from '../components/right'
import Picture from '../components/picture'
import About from '../components/about'
import Client from '../components/client'
import Project from '../components/project'
import Contact from '../components/contact'
import { useState } from 'react'


const colors = {
  red: '#fd8e8e',
  amber: '#fde58e',
  green: '#8efdb0'
};

export default function Home() {
  const [theme, setTheme] = useState(colors.red);
  

  return (
    <>
      <div className='h-screen overflow-hidden'>
        <main className='h-screen overflow-y-auto w-screen scroll-smooth'>
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
