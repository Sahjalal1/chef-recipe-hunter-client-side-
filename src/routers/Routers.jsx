import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Register";
import ChefDetails from "../pages/Home/ChefDetails/ChefDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/chefs`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/chefDetails/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/chefs/${params.id}`),
                
            }
            
           
            
        ]
    },
    // {
    //         path: 'news',
    //         element: <NewsLayout></NewsLayout>,
    //         children: [
    //             {
    //                 path: ':id',
    //                 element: <News></News>
                    
    //             }
    //         ]
    // }
])

export default router;