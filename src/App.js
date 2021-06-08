import React from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/homeScreen";

function App( ) {
    return (
        <>
         <Header />
           <div className="app_conatiner">
               <Sidebar />
               <Container className="app_main">
                  <HomeScreen />
               </Container>

           </div>
        </>
    );
}

export default App;