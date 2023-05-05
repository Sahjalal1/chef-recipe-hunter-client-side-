import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Register";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Chef from "../layouts/Chef/Chef";
import App from "../App";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://server-mdsahjalalrahim-gmailcom.vercel.app/chefs`)
            }

        ]
    },
    {
        path: 'Home',
        element: <Chef></Chef>,
        children: [
            {
                path: '/Home/blog',
                element: <Blog></Blog>
            },
            {
                path: '/Home/login',
                element: <Login></Login>
            },
            {
                path: '/Home/registration',
                element: <Registration></Registration>
            },
            {
                path: '/Home/chefDetails/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-mdsahjalalrahim-gmailcom.vercel.app/chefs/${params.id}`),

            }
        ]
    }
])

export default router;