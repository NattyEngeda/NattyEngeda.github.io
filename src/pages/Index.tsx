import { Link } from 'react-router-dom';

// Images 
import gmailIcon from '../assets/images/icons/gmail.png';
import linkedInIcon from '../assets/images/icons/linkedin.png';
import githubIcon from '../assets/images/icons/github.png';
import instagramIcon from '../assets/images/icons/instagram.png';
import programmerImage from '../assets/images/programmer.png';
import coolPic from '../assets/images/cool_pic.svg';

export default function Index() {
  return (
    <div className='w-full  relative flex flex-col'>
      <div className='w-full mx-auto container  grid grid-cols-1 md:grid-cols-2 md:px-20 py-10'>
        {/* First Grid */}
        <div className='flex flex-col gap-10 items-start justify-start  p-5 font-ProductSans text-fontColor'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold font-ProductSans '>Natnael Engeda</h1>
            <p className='text-xl md:text-xl lg:text-3xl font-semibold'>(Fullstack Developer)</p>
            <div>
              <p
                className='text-lg  lg:text-3xl text-[#6B7385]'>A passionate individual who always thrives to work on end to end products which develop sustainable and highly scalable social and technical systems to create impact.</p>
            </div>

            <div className='flex flex-col gap-5'>
              <div>
                <p className='text-2xl text-fontColor2'>Contact Me: </p>
              </div>
              <div className='flex flex-row px-2 gap-5'>

                {/* Gmail Icon */}
                <div
                  onClick={() => window.open('mailto:nattynengeda@gmail.com')}
                  className='rounded-full bg-fontColor w-auto p-2 cursor-pointer'>
                  <img
                    className='w-6 h-6'
                    src={gmailIcon}
                    alt="Gmail Icon" />
                </div>

                {/* LinkedIn Icon */}
                <div
                  onClick={() => window.open('https://www.linkedin.com/in/natnaelengeda/')}
                  className='rounded-full bg-white w-auto p-1 cursor-pointer'>
                  <img
                    className='w-8 h-8'
                    src={linkedInIcon}
                    alt="Gmail Icon" />
                </div>

                {/* Github Icon */}
                <div
                  onClick={() => window.open('https://www.github.com/nattyengeda')}
                  className='rounded-full bg-white w-auto p- cursor-pointer'>
                  <img
                    className='w-10 h-10'
                    src={githubIcon}
                    alt="Gmail Icon" />
                </div>

                {/* Instagram Icon */}
                <div
                  onClick={() => window.open('https://www.instagram.com/nattyengeda')}
                  className='rounded-full bg-white w-auto p-1 cursor-pointer'>
                  <img
                    className='w-8 h-8'
                    src={instagramIcon}
                    alt="Gmail Icon" />
                </div>
              </div>

              {/* Projects */}
              <div className='px-2 py-5'>
                <Link
                  to='/portfolio'
                  className='px-10 py-3 rounded-xl border-4 border-fontColor2 hover:text-white text-ProductSans hover:bg-[#14213D] hover:border-[#14213D]'>
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Second Grid */}
        <div className=' flex items-start justify-center py-10'>
          <img
            className='w-[80%] md:w-full'
            src={coolPic}
            alt="Programmer Image" />
        </div>
      </div>
      <div className='flex items-center justify-center font-ProductSans py-2'>
        <p><span className='text-fontColor2'>Made by </span>&#128512; <span className='font-bold'>Natnael Engeda</span></p>
      </div>
    </div>
  )
}
