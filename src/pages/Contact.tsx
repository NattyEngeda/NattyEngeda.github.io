
// Image 
import contactme from '../assets/images/contact-me.png';

export default function Contact() {
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <div>
        <h1 className='text-3xl'>Contact Me</h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img src={contactme} alt="Contact Me Image" />
        </div>
           <div>
            
        </div>

      </div>

    </div>
  )
}
