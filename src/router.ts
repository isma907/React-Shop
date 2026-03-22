import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/cart",
        Component: Cart
    }
]);

