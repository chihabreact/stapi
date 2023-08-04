import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { HomePage, ReviewDetails, Categories } from "./Pages/index";
import { SiteHeader } from "./components/index";
import LayOut from "./layout/LayOut";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut></LayOut>}>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route
        path="/details/:id"
        element={<ReviewDetails></ReviewDetails>}
      ></Route>
      <Route path="/category/:id" element={<Categories></Categories>}></Route>
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
