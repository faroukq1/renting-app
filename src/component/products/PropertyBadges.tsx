import { FaStar } from "react-icons/fa";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";

const PropertyBadges = () => {
  return (
    <div className="mt-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="flex gap-4 items-center text-green-600 font-bold tracking-wider">
          <span className="px-3 py-1 bg-green-200 rounded-lg text-xl font-normal">
            5.0
          </span>
          Perfect
        </h1>
        <div className="flex gap-2 ml-2">
          <div className="badge badge-neutral">Hotels</div>
          <div className="badge badge-error">New Building</div>
          <div className="badge badge-warning">Top Value</div>
        </div>
        <div className="flex gap-1 ml-4">
          {Array.from({ length: 5 }, (_, index) => {
            return <FaStar key={index} className="text-xl text-warning" />;
          })}
        </div>
      </div>
      <div className="flex gap-4">
        <FaRegHeart className="text-xl" />
        <FaRegBookmark className="text-xl" />
      </div>
    </div>
  );
};

export default PropertyBadges;