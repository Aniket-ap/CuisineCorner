import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="shadow-md m-5 p-2 w-72 transition duration-500 ease-in-out transform hover:scale-105 rounded-lg overflow-hidden">
      <img
        className="object-cover h-48 w-full"
        alt="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <div className="text-gray-600 text-sm">{cuisines.join(", ")}</div>
        <div
          className={`flex items-center mt-2 w-12 ${
            avgRating >= 4
              ? "bg-green-500"
              : avgRating >= 3
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 20 20">
            <path d="M10 13.64l-5.3 3.2 1.1-6.4L1.05 6.36l6.4-.93L10 0l2.55 5.43 6.4.93-4.75 4.88 1.1 6.4L10 13.64z" />
          </svg>
          <span className="text-white ml-1">{avgRating}</span>
        </div>
        <div className="mt-2">
          <span className="font-medium text-gray-900">
            ₹{costForTwo / 100} FOR TWO
          </span>
          <span className="text-gray-600"> &#183; {deliveryTime} MINS</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
