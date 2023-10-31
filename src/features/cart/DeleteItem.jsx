import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzId }) {
  const dispacth = useDispatch();

  return (
    <Button onClick={() => dispacth(deleteItem(pizzId))} type="small">
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzId: PropTypes.number,
};

export default DeleteItem;
