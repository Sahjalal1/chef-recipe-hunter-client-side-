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
            },



        ]
    },
    {
        path: 'chef',
        element: <Chef></Chef>,
        children: [
            {
                path: '/chef/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/login',
                element: <Login></Login>
            },
            {
                path: '/chef/registration',
                element: <Registration></Registration>
            },  
            {
                path: '/chef/chefDetails/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-mdsahjalalrahim-gmailcom.vercel.app/chefs/${params.id}`),

            }
        ]
    }
])

export default router;