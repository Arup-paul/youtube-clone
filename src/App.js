import React, { useState,useEffect } from 'react';
import  { useSelector  } from 'react-redux';
import { useHistory } from "react-router-dom";
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/watchScreen/searchScreen'
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import {Container} from "react-bootstrap";
import HomeScreen from "./screens/homeScreen/homeScreen";
import {Route,Switch,Redirect} from "react-router-dom";

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

    const {accessToken,loading} = useSelector(state=>state.auth)

    const history = useHistory();

    useEffect(() => {
        if(!loading && !accessToken){
             history.push('/auth')
        }
    },[accessToken,loading,history])

    return(
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

            <Route path="/search/:query" exact>
                <Layout>
                      <SearchScreen />
                </Layout>
            </Route>

        <Route path="/watch/:id" exact>
              <Layout>
                  <WatchScreen />
               </Layout>
       </Route>

            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    )
}



export default App;