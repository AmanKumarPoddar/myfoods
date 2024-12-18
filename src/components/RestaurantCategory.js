import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    console.log("Clicked");
  };
  // console.log(data);
  return (
    <div>
      {/* Header  */}
      <div className="bg-gray-50 p-4 shadow-lg w-6/12 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "🔼" : "🔽"}</span>
        </div>

        {/* body  */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
