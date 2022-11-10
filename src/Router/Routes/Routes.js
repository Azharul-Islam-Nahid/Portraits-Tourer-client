import { createBrowserRouter } from "react-router-dom";
import Allservices from "../../components/Allservices/Allservices";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Reviews from "../../components/Reviews/Reviews";
import Servicedetails from "../../components/Servicedetails/Servicedetails";
import Main from "../../Layout/Main";


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
            loader:({params})=>fetch(`http://localhost:5000/allservices/${params.id}`)
        },
        {
          path:'/review/:id',
          element:<Reviews></Reviews>,
          loader:({params})=>fetch(`http://localhost:5000/allservices/${params.id}`)
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ]);

  export default router;