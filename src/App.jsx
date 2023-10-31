import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrder,
} from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as updateLoaderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: (
      <>
        <AppLayout />
      </>
    ),
    errorElement: (
      <>
        <Error />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "/menu",
        element: (
          <>
            <Menu />
          </>
        ),
        errorElement: (
          <>
            <Error />
          </>
        ),
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: (
          <>
            <Cart />
          </>
        ),
      },
      {
        path: "/order/new",
        element: (
          <>
            <CreateOrder />
          </>
        ),
        action: createOrder,
      },
      {
        path: "/order/:orderId",
        element: (
          <>
            <Order />
          </>
        ),
        errorElement: (
          <>
            <Error />
          </>
        ),
        action: updateLoaderAction,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  // const x = 23;
  return <RouterProvider router={router} />;
}

export default App;
