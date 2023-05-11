import { createBrowserRouter } from "react-router-dom";

import DetailsPage from "../components/Details";
import ErrorPage from "../components/ErrorPage";
import Loader from "../components/Loader";
import App from "../App";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: Loader,
        errorElement: <ErrorPage/>,
    },
    {
        path: "/details/:name",
        element: <DetailsPage />,
        loader: Loader,
        errorElement: <ErrorPage/>,
    }
]);

export default Router;