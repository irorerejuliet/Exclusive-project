import { Link } from "react-router-dom";
import { sidebarList } from "../Constants/sidebarList";

const Sidebar = () => {
  return (
    <div className="w-[217px] border-r pr-6">
      {sidebarList.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 text-[16px] cursor-pointer hover:text-black/70"
        >
          <Link to={item.path}>{item.name}</Link>

          {/* This shows the first two items with arrows */}
          {index < 2 && (
            <img
              src="/images/GreaterThanIcon.svg"
              alt="arrow"
              className="w-4 h-4 opacity-70"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar
