import { salesTime } from "../Constants/salesData";

const MusicExperience = () => {
  return (
    <div className="bg-black text-white flex justify-between py-20 px-20">
      <div className="">
        <p className="text-[#00FF66] text-base font-bold">Categories</p>
        <h2 className="text-5xl leading-[60px] tracking-[4%] font-semibold ">
          Enhance Your <br /> Music Experience
        </h2>
        <div className="flex gap-4 ">
          {salesTime.map(({ id, title, time }) => (
            <div
              key={id}
              className=" flex flex-col justify-center items-center rounded-full bg-white text-black size-[62px] my-5 "
            >
              <span className="text-lg font-bold">{time}</span>
              <h3 className="flex text-xs font-medium text-center ">{title}</h3>
            </div>
          ))}
        </div>
        <button className="text-lg bg-[#00FF66] text-white py-2 px-4 w-[171px] rounded-4">
          Buy now
        </button>
      </div>
      <img src="/images/JBL_BOOMBOX_2_HERO_image.svg" alt="jblBoomBox" />
    </div>
  );
};

export default MusicExperience;
