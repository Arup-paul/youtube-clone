import React, { useState } from 'react';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/homeScreen";
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";

import './_app.scss'
import LoginScreen from "./screens/loginScreen/loginScreen";



const Layout = ({children}) => {
    const [sidebar,setSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setSidebar((prevState)=>
            !prevState
        )
    }
    return  (
        <>
            <Header handleToggleSidebar={ handleToggleSidebar } />
            <div className="app__container   ">
                <Sidebar
                    sidebar={ sidebar }
                    handleToggleSidebar={ handleToggleSidebar }
                />
                <Container fluid className="app_main  ">
                    {children}
                </Container>

            </div>
        </>
    )
}

const  App = () =>  {
    return  <Router>

        <Switch>
        <Route path="/" exact >
            <Layout>
                <HomeScreen />
            </Layout>
        </Route>

        <Route path="/auth" exact>
             <LoginScreen />
        </Route>

        <Route path="/search" exact>
            <Layout>
                <h1>Search Result</h1>
            </Layout>
        </Route>

            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    </Router>
}

export default App;