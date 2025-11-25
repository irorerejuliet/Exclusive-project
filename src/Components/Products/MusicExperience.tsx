import { salesTime } from "../Constants/salesData";


const MusicExperience = () => {
  return (
    <div className="bg-black text-white flex justify-between items-center py-20 px-12 w-[1170px]">
      <div className="">
        <p className="text-[#00FF66] text-base font-bold">Categories</p>
        <h2 className="text-5xl font-semibold w-[443px]">
          Enhance Your Music Experience
        </h2>
        <div className="flex gap-4 justify-center">
          {salesTime.map(({ id, title, time }) => (
            <div
              key={id}
              className=" flex flex-col justify-center items-center rounded-full bg-white text-black size-[62px] "
            >
              <span className="text-3xl font-bold">{time}</span>
              <h3 className="flex text-xs font-medium text-center ">{title}</h3>
            </div>
          ))}
        </div>
      </div>
      <img src="/images/JBL_BOOMBOX_2_HERO_image.svg" alt="jblBoomBox" />
    </div>
  );
}

export default MusicExperience
