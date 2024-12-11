import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // If data is not available, show the shimmer
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // Initialize categories as an empty array to avoid undefined issues
  let categories = [];

  if (resInfo?.cards[4].groupedCard) {
    categories =
      resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  } else if (resInfo?.cards[5].groupedCard) {
    categories =
      resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
  } else {
    console.log("Neither cards[4] nor cards[5] exist");
  }

  // Log the categories array for debugging
  // console.log(categories);

  // Ensure categories is an array before mapping
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xls">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* Check if categories exist before attempting to map */}
      {categories && categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))
      ) : (
        <p>No categories available</p>
      )}
    </div>
  );
};

export default RestroMenu;
