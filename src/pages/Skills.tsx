import SkillBox from './components/SkillBox';

// Images 
import html_css_js from '../assets/images/skills/html-css-js.svg';
import reactjs from '../assets/images/skills/reactjs.svg';
import nextjs from '../assets/images/skills/nextjs.svg';
import flutterimg from '../assets/images/skills/flutter.png';

export default function Skills() {
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full mx-auto flex flex-col gap-5 md:gap-8 p-2 px-5 md:px-0 py-10 container font-ProductSans'>
        <div>
          <h1 className='text-5xl md:text-6xl font-bold '>Overview.</h1>
        </div>
        <div className='w-full md:w-[80%]'>
          <p>
            I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like Next.js, React.js, Tailwind, Bootstap and MUI. I'm a quick learner
            and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to
            life!
          </p>
        </div>
        <div className='flex flex-col gap-5'>
          <div>
            <h1 className='text-5xl md:text-6xl font-semibold '>Skills.</h1>
          </div>
          <div>

            {/* Basic */}
            <div>
              <h1 className='text-3xl md:text-4xl font-llight '>Basics</h1>
              <div className='flex flex-col md:flex-row gap-10 p-2 py-5'>
                <SkillBox name={'HTML/CSS/JS'} image={html_css_js} />
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h1 className='text-3xl md:text-4xl font-llight '>Frameworks</h1>
              <div className='flex flex-col  md:flex-row gap-10 p-2 py-5'>
                <SkillBox name={'React.js'} image={reactjs} />
                <SkillBox name={'Next.js'} image={nextjs} />
                <SkillBox name={'Flutter'} image={flutterimg} />

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
