import { categoriesData } from "../../Components/Constants/categoriesData";

const Categories = () => {
  return (
    <div>
      <div className="flex  gap-4 items-center">
        <div className="bg-primary w-4 h-10 rounded-[5px]"></div>
        <p className="text-primary text-base font-semibold">Today's</p>
      </div>
      <div className="flex justify-between  items-center mb-7">
        <h4 className="md:text-3xl font-semibold">Browse By Category</h4>
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
      <div className="grid md:grid-cols-6 gap-5  grid-cols-1">
        {categoriesData.map(({ id, image, title }) => (
          <div
            className=" shadow border border-gray-200 py-3 px-1 rounded-4 text-center"
            key={id}
          >
            <img src={image} alt="cellPhone" className="text-center m-auto" />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <div className="w-full border-t border-gray-200 mt-20"></div>
    </div>
  );
};

export default Categories;
