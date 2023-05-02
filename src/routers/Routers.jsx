import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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