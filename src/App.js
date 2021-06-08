import React, { useState } from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/homeScreen";

import './_app.scss'

const  App = () =>  {

    const [sidebar,setSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setSidebar((prevState)=>
            !prevState
        )
    }

    return (
        <>
         <Header handleToggleSidebar={ handleToggleSidebar } />
           <div className="app__container border border-info">
               <Sidebar
                   sidebar={ sidebar }
                   handleToggleSidebar={ handleToggleSidebar }
               />
               <Container fluid className="app_main border border-warning">
                  <HomeScreen />
               </Container>

           </div>
        </>
    );
}

export default App;