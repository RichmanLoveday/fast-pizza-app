import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQty({ pizzaId, currentQty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        ➖
      </Button>
      <span className="text-sm font-medium">{currentQty}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        ➕
      </Button>
    </div>
  );
}

UpdateItemQty.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQty: PropTypes.number,
};

export default UpdateItemQty;
