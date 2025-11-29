const NewArrival = () => {
  return (
    <div className="">
      <div className="flex gap-6 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Featured</p>
      </div>
      <h3 className="text-3xl font-semibold  ">New Arrival</h3>
      <div className="grid lg:grid-cols-2 gap-[30px]">
        <div className="relative">
          <div className="bg-black text-white w-full  p-14">
            <img src="/images/PlayStation-5.svg" alt="" className="" />
            <div className=" absolute bottom-24  w-[250px] space-y-2">
              <h5 className=" text-2xl font-semibold">PlayStation 5</h5>
              <p className="text-sm font-normal ">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="underline text-base font-medium ">Shop now</p>
            </div>
          </div>
        </div>
        <div className="">
          {/* Women Collection card */}
          <div className="bg-black text-white  relative">
            <img
              src="/images/WomensCollection.svg"
              alt=""
              className="ml-72  pt-10"
            />
            <div className=" absolute top-52 space-y-2  left-8 w-[570px] h-[284px]">
              <h5 className=" text-2xl font-semibold">Women’s Collections</h5>
              <p className="text-sm font-normal">
                Featured woman collections that give you another vibe.
              </p>
              <p className="underline text-base font-medium">Shop now</p>
            </div>
          </div>
          <div className="flex justify-between mt-4 gap-5  relative ">
            {/* speakers card */}
            <div className="w-[350px] h-[284px]  bg-[#1F1F1F] text-white">
              <img
                src="/images/Speakers.svg"
                alt="speaker"
                className="text-center m-auto pt-6 "
              />
              <div className="absolute bottom-6 left-8">
                <h5 className=" text-2xl font-semibold pb-1">Speakers</h5>
                <p className="text-sm font-normal">Amazon wireless speakers</p>
                <p className="underline text-base font-medium pt-1">Shop now</p>
              </div>
            </div>
            {/* Perfume card */}
            <div className="bg-[#2C2C2C] text-white w-[350px] h-[284px]  relative">
              <img
                src="/images/Perfume.svg"
                alt="perfumes"
                className="text-center m-auto pt-6 "
              />
              <div className="absolute bottom-6 left-6">
                <h5 className=" text-2xl font-semibold  ">Perfume</h5>
                <p className="text-sm font-normal pt-1">
                  GUCCI INTENSE OUD EDP
                </p>
                <p className="underline text-base font-medium pr-20 pt-2">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
