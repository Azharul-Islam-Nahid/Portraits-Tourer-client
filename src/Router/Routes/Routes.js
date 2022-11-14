import { createBrowserRouter } from "react-router-dom";
import Addservice from "../../components/Addservice/Addservice";
import Allservices from "../../components/Allservices/Allservices";
import Blog from "../../components/Blog/Blog";
import Errorpage from "../../components/Errorpage/Errorpage";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import MyReviews from "../../components/Myreview/MyReview";
import Register from "../../components/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Servicedetails from "../../components/Servicedetails/Servicedetails";
import Main from "../../Layout/Main";
import PrivateRoute from "../Privateroute/Privateroute";


const router =createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allservices',
            element:<Allservices></Allservices>
        },
        {
            path:'/serviceDetail/:id',
            element:<Servicedetails></Servicedetails>,
            loader:({params})=>fetch(`https://portraits-tourer-server-side.vercel.app/allservices/${params.id}`)
        },
        {
          path:'/review/:id',
          element:<Reviews></Reviews>,
          loader:({params})=>fetch(`https://portraits-tourer-server-side.vercel.app/allservices/${params.id}`)
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/addservice',
          element:<PrivateRoute><Addservice></Addservice></PrivateRoute>
        },
        {
          path:'/myreview',
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/faq',
          element:<Faq></Faq>
        }
      ]
    },
    {
        path: '*',
        element: <Errorpage></Errorpage>
    }
  ]);

  export default router;