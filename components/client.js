export default function Client() {
 return (
   <section id='client' className='sticky-section bg-white grid grid-cols-2 gap-0.5 text-xl'>
     {[
       'SomeOne',
       'RAGGED EDGE',
       'the hoxton',
       'AllofUs',
       'Foolproof',
       'parallel',
       'Somo',
       'Rotate',
     ].map((item) => (
       <div key={item} className='bg-[#f1f1f1] p-16 flex justify-center'>
         {item}
       </div>
     ))}
   </section>
 );
}
