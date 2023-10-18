// Image 
import { useForm } from 'react-hook-form';
import contactme from '../assets/images/contact-me.png';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  var api = '5758881380:AAHvZKhH78uXTsuJa-b7F987Ii3vxrpRc2A';

  const onSubmit = async (data: any) => {
    await axios.post(`https://api.telegram.org/bot${api}/sendMessage`, {
      chat_id: '359753050',
      parse_mode: 'html',
      text: `<b>Name:</b> ${data.name} \n<b>Email:</b> ${data.email} \n<b>Message:</b> ${data.message}`
    }).then((res) => {
      if (res.status == 200) {
        reset();
        toast.success('Message Sent Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  }

  return (
    <div className='flex flex-col gap-10 items-center justify-center md:py-10 font-ProductSans'>
      <div>
        <h1 className=' text-3xl md:text-6xl font-bold '>Contact Me</h1>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>

        {/* Image */}
        <div>
          <img src={contactme} alt="Contact Me Image" />
        </div>

        {/* Form */}
        <div className='flex flex-col items-center justify-start gap-10 py-5'>
          <div>
            <p className='text-2xl md:text-3xl font-bold '>Get in Touch</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex flex-col items-cetner justify-start px-5 md:px-20 gap-5'
          >
            <input
              placeholder='Name'
              className="py-3 rounded-md px-5 w-full border-0 outline-none bg-gray-100 "
              type="text"
              {...register("name")}
            />
            <input
              placeholder='Email'
              className="py-3 rounded-md px-5 w-full border-0 outline-none bg-gray-100"
              type="text"
              {...register("email")}
            />
            <textarea
              placeholder='Message'
              className="py-2 rounded-md px-5 w-full border-0 outline-none bg-gray-100"
              rows={10}
              {...register("message")}
            />
            <div className='2'>
              <button
                type='submit'
                className='transition py-2 px-4 bg-[#017f6c] text-white rounded-md hover:border hover:border-[#017f6c] hover:bg-transparent hover:text-[#017f6c]'>
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
