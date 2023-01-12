export default function About() {
 return (
   <section id='about' className='sticky-section bg-white flex flex-col px-14 py-10'>
     <div className='mb-6'>
       <h1 className='font-semibold text-[32px] text-[#2e304b] mb-5'>
         About me
       </h1>
       <h3 className='font-semibold text-2xl text-[#2e304b]'>
         I enjoy working closely with design teams to faithfully translate their
         designs right down to the last pixel. Daily, you&apos;ll find me using
         modern frontend technologies that bring the creative process to life
         just as designers intended them to be.
       </h3>
     </div>
     <div className="mb-5">
       <h4 className='text-[#2e304b] text-lg font-semibold mb-2'>Technical</h4>
       <p className='text-[#6b6c7b] text-base font-medium'>
         Right now you can find me hacking away primarily with Vue.js, Nuxt.js,
         Gridsome, Prismic CMS, GraphQL and in general anything JavaScript, HTML
         and CSS related. Also been known to dabble in React.js and Gatsby from
         time to time or wrestling with Webpack.
       </p>
     </div>
     <div className=''>
       <h4 className='text-[#2e304b] text-lg font-semibold mb-2'>Personal</h4>
       <p className='text-[#6b6c7b] text-base font-medium mb-5'>
         I grew up in Nottingham and moved to London many years ago. Being half
         Italian and half British, I try to visit family in Sicily whenever I
         can to practice (struggling) with the basics of the language.
       </p>
       <p className='text-[#6b6c7b] text-base font-medium'>
         So, let&apos;s work together !
       </p>
     </div>
   </section>
 );
}
