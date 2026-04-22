import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Home from './Components/Home';
import Layout from './Components/Layout'
import Blog from './Components/Blog';
import About from './Components/About';
import Aboutt from './Components/Pages/page';
import Footer from'./Components/Footer'
import Block from './Block';
import Notfound from './Components/Notfound';
// import All1 from './assets/Cards-num/All1';
// import All2 from './assets/Cards-num/All2';
// import All3 from './assets/Cards-num/All3';
// import All4 from './assets/Cards-num/All4';
// import All5 from './assets/Cards-num/All5';
import Details from './Components/Details';


let x= createBrowserRouter([
  {path:"",element:<Layout/>,
    children : [
    {index:true , element:<Home/>},
  {path:"blog", element:<Blog/>,
    
    
    // children: [
    //       { index: true, element: <All1 /> },
    //       { path: "1", element: <All1 /> },
    //       { path: "2", element: <All2 /> },
    //       { path: "3", element: <All3 /> },
    //       { path: "4", element: <All4 /> },
    //     { path: "5", element: <All5 /> },]






  },

  {path:"blog/:id", element:<Details/>},
  {path:"about", element:<About/>},
{path:"*", element:<Notfound/>}  ]
},



])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<RouterProvider router={x}></RouterProvider>  


  </>
  )
}

export default App
