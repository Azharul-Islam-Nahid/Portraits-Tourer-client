import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
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
            path:'/serviceDetail/:id',
            element:<Servicedetails></Servicedetails>,
            loader:({params})=>fetch(`http://localhost:5000/allservices/${params.id}`)
        }
      ]
    }
  ]);

  export default router;