const NewArrival = () => {
    return (
      <div>
        <div className="flex gap-4 items-center">
          <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
          <p className="text-primary text-base font-semibold">Featured</p>
        </div>
        <h3 className="text-3xl font-semibold">New Arrival</h3>
        <div className="relative">
          <div className="bg-black text-white w-[570px] p-14">
            <img src="/images/PlayStation-5.svg" alt="" className="" />
            <div className=" absolute bottom-24 ">
              <h5 className=" text-2xl font-semibold">PlayStation 5</h5>
              <p className="text-sm font-normal w-[250px]">Black and White version of the PS5 coming out on sale.</p>
              <p className="underline text-base font-medium ">Shop now</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div></div>
        </div>
      </div>
    );
}


export default NewArrival