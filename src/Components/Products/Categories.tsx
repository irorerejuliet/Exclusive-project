
const Categories = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="bg-[#DB4444] w-4 h-10 rounded-[5px]"></div>
        <p className="text-[#DB4444] text-base font-semibold">Today's</p>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Browse By Category</h4>
        <button className="text-white bg-[#DB4444] md:py-3 py-1 px-2 md:px-5 rounded-md md:w-[159px] w-20">
          View All
        </button>
      </div>
      <div>
        <div className="w-[170px] shadow border border-gray-200 py-3 px-1 rounded-4 ">
            <img src="/images/Category-CellPhone.svg" alt="cellPhone" className="ml-10"/>
            <p>Phones</p>
        </div>
      </div>
       <div className="w-full border-t border-gray-200"></div>
    </div>
  );
}

export default Categories
