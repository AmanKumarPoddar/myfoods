import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId, id } =
    props.resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-2 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher order Component that takes RestroCard as input

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
