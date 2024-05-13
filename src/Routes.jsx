import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./Pages/dashboard";
import { LoginForm } from "./PageLogin/LoginPage";



const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { LoginForm }  path="/" exact />
           <Route component = { Dashboard }  path="/dashboard" />
       </BrowserRouter>
   )
}

export default Routes;