import Tilt from 'react-parallax-tilt';

export default function SkillBox({ name, image }: { name: string, image: string }) {
  return (
    <Tilt gyroscope={true}>
      <div
        className="flex justify-center items-center sm:w-[260px] w-full sm:h-[300px] h-[250px] rounded-xl backdrop-blur-sm bg-[#ffffff0a] shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-up">
        <img
          draggable="false"
          alt=""
          loading="lazy"
          width="888"
          height="442"
          decoding="async"
          data-nimg="1"
          className="w-[200px] h-fit"
          src={image} />
        <div
          className="absolute bottom-5">{name}
        </div>
      </div>
    </Tilt>
  )
}
