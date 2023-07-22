import React from 'react';
import {BrowserRouter, Outlet} from "react-router-dom";
import Sidebar from './Sidebar';
import Maincontainer from './Maincontainer';
const Body=()=>{
    return (
        <div className='flex'>
       
           <Sidebar/>
           <Outlet/>
           

        </div>
    )
}
export default Body;