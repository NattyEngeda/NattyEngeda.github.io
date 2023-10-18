import SkillBox from './components/SkillBox';

// Images 
import html_css_js from '../assets/images/skills/html-css-js.svg';
import reactjs from '../assets/images/skills/reactjs.svg';
import nextjs from '../assets/images/skills/nextjs.svg';
import flutterimg from '../assets/images/skills/flutter.png';
import laravel from '../assets/images/skills/laravel.png';
import phpimg from '../assets/images/skills/php.webp';
import ts from '../assets/images/skills/ts.png';
import nodejs from '../assets/images/skills/nodejs.png';
import vuejs from '../assets/images/skills/vuejs.png';
import python from '../assets/images/skills/python2.png';
import expressjs from '../assets/images/skills/express.png';
import mysql from '../assets/images/skills/mysql.svg';
import mongodb from '../assets/images/skills/mongodb.svg';
import sqlite from '../assets/images/skills/sqlite.png';

export default function Skills() {
  return (
    <div className='w-full min-h-screen md:px-20'>
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
            <div className='flex flex-col gap-10'>

              {/* Basic */}
              <div>
                <h1 className='text-3xl md:text-4xl font-llight '>Basics</h1>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5'>
                  <SkillBox link={'https://www.w3schools.com/html/'} name={'HTML/CSS/JS'} image={html_css_js} />
                  <SkillBox link={'https://www.typescriptlang.org/'} name={'Typescript'} image={ts} />
                  <SkillBox link='https://www.python.org/' name={'Python'} image={python} />
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h1 className='text-3xl md:text-4xl font-llight '>Frameworks</h1>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5'>
                  <SkillBox link='https://react.dev/' name={'React.js'} image={reactjs} />
                  <SkillBox link='https://nextjs.org/' name={'Next.js'} image={nextjs} />
                  <SkillBox link='https://vuejs.org/' name={'Vue.js'} image={vuejs} />
                  <SkillBox link='https://flutter.dev/' name={'Flutter'} image={flutterimg} />
                </div>
                <div className='h-10'>
                </div>
              </div>

              {/* Backend */}
              <div>
                <h1 className='text-3xl md:text-4xl font-llight '>Backend</h1>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5'>
                  <SkillBox link='https://www.php.net/' name={'PHP'} image={phpimg} />
                  <SkillBox link='https://nodejs.org/en' name={'Node.js'} image={nodejs} />
                  <SkillBox link='https://expressjs.com/' name={'Express.js'} image={expressjs} />
                  <SkillBox link='https://laravel.com/' name={'Laravel'} image={laravel} />
                </div>
              </div>


              {/* Database */}
              <div>
                <h1 className='text-3xl md:text-4xl font-llight '>Database</h1>
                <div className='flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5'>
                  <SkillBox link='https://www.mysql.com/' name={'MySQL'} image={mysql} />
                  <SkillBox link='https://www.mongodb.com/' name={'MongoDB'} image={mongodb} />
                  <SkillBox link='https://www.sqlite.org/index.html' name={'SQLite'} image={sqlite} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}
