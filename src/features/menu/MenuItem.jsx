import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQtyById } from "../cart/cartSlice";
import UpdateItemQty from "../cart/UpdateItemQty";

/* eslint-disable*/
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQtyById(id));
  const isInCart = currentQuantity > 0;

  const handleAdddTocart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    // dispacth nee item
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <>
              <p className="text-sm font-medium uppercase text-stone-500">
                Sold out
              </p>
            </>
          )}
          {isInCart && (
            <div className="flex items-center justify-between sm:gap-8">
              <UpdateItemQty pizzaId={id} currentQty={currentQuantity} />
              <DeleteItem pizzId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAdddTocart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
