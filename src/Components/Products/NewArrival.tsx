const NewArrival = () => {
    return (
      <div className="">
        <div className="flex gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className="text-primary text-base font-semibold">Featured</p>
        </div>
        <h3 className="text-3xl font-semibold  ">New Arrival</h3>
        <div className="flex justify-between gap-10 ">
          <div className="relative">
            <div className="bg-black text-white w-[570px] p-14">
              <img src="/images/PlayStation-5.svg" alt="" className="" />
              <div className=" absolute top-96  w-[250px]">
                <h5 className=" text-2xl font-semibold mr-16">PlayStation 5</h5>
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
                className="ml-32"
              />
              <div className=" absolute bottom-5  left-6 w-[255px]">
                <h5 className=" text-2xl font-semibold  pr-2">
                  Women’s Collections
                </h5>
                <p className="text-sm font-normal  ">
                  Featured woman collections that give you another vibe.
                </p>
                <p className="underline text-base font-medium pr-36">
                  Shop now
                </p>
              </div>
            </div>
            <div className="flex gap-5 py-4 relative">
              {/* speakers card */}
              <div className="w-[270px] h-[270px]  bg-[#1F1F1F] text-white ">
                <img
                  src="/images/Speakers.svg"
                  alt="speaker"
                  className="text-center m-auto pt-6 "
                />
                <div className="absolute bottom-10 w-[191px] pl-2">
                  <h5 className=" text-2xl font-semibold pr-16">Speakers</h5>
                  <p className="text-sm font-normal">
                    Amazon wireless speakers
                  </p>
                  <p className="underline text-base font-medium pr-[89px] pt-2">
                    Shop now
                  </p>
                </div>
              </div>
              {/* Perfume card */}
              <div className="bg-[#2C2C2C] text-white size-[270px]  relative">
                <img
                  src="/images/Perfume.svg"
                  alt="perfumes"
                  className="text-center m-auto pt-6"
                />
                <div className="absolute bottom-6 pl-4">
                  <h5 className=" text-2xl font-semibold pr-16 ">Perfume</h5>
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
}


export default NewArrival