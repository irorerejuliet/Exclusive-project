import { salesTime } from "../Constants/salesData";

const SalesTime = () => {
    return (
      <>
        <div className="md:flex flex-row justify-between items-center py-8">
          <div className="md:flex flex-row  items-center gap-20 md:space-y-0 space-y-10">
            <h2 className="text-3xl font-bold mb-4 leading-[4%] md:py-0 py-5 md:mr-0 mr-42">
              Flash Sales
            </h2>
            <div className="flex gap-4 items-center">
              {salesTime.map(({ id, title, time }) => (
                <div key={id}>
                  <h3 className="text-xs font-medium text-center mr-8">{title}</h3>
                  <div className="flex items-center justify-between ">
                    <span className="text-3xl font-bold">{time}</span>
                    <button className="text-[#E07575] text-2xl font-semibold">
                      :
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 md:py-0 py-5">
            <img
              src="/images/icons_arrow-left.svg"
              alt="arrow-left"
              className="shadow rounded-full p-1 border border-gray-100"
            />
            <img
              src="/images/icon-arrow-right.svg"
              alt="arrow-right"
              className="shadow rounded-full p-2 border border-gray-100"
            />
          </div>
        </div>
      </>
    );
}

export default SalesTime