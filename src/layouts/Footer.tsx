
// Icons 
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='h-20 grid grid-cols-1 md:grid-cols-3 items-center justify-around text-white px-5 md:px-20'>
      <div className='w-full'>
        <p>Designed and Developed By Natnael Engeda</p>
      </div>
      <div className='w-full text-center'>
        <p>Copyright &copy; 2023</p>
      </div>
      <div className="w-full flex flex-row items-center justify-center md:justify-end gap-5 py-5">
        <AiOutlineGithub
          className="icons-style-small"
          onClick={() => {
            window.open("https://www.github.com/nattyengeda");
          }} />
        <AiOutlineTwitter
          className="icons-style-small"
          onClick={() => {
            window.open("https://www.twitter.com/nattyengeda")
          }} />
        <AiFillLinkedin
          className="icons-style-small"
          onClick={() => {
            window.open("https://www.linkedin.com/in/natnael-engeda-9202a51b7/")
          }}
        />
        <AiOutlineInstagram
          className="icons-style-small"
          onClick={() => {
            window.open("https://www.instagram.com/nattyengeda")
          }}
        />
      </div>

    </footer>
  )
}
