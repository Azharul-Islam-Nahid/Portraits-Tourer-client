import { Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {

  
  return (
      <div>
        <Helmet>
          <title>portraits tourer- home</title>
        </Helmet>
        <Toaster></Toaster>
        <RouterProvider router={router}></RouterProvider>
      </div>
  );
}

export default App;
