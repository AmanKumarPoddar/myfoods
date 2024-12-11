import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left  flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>

            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className="p-2 text-white bg-black shadow-lg  mx-16 rounded-lg"
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;