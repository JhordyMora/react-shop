// ocupen el comando “rafce” para crear el componente.
import React from 'react';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Layout from '../Containers/Layout';
import Login from '../Containers/Login';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RecoveryPassword from '../Containers/RecoveryPassword';
import "../styles/global.css";

const App = () => {
    return (
        //Manera de hacer en versiones antiguas
        // <BrowserRouter>
        // <Switch> //en vez de Routes
        //     <Layout>
        //         <Route exact path='/' component={Home}/> //se usaba component en vez de element
        //         <Route exact path='/Login' component={Login}/>
        //         <Route exact path='recovery-password' component={RecoveryPassword}/>
        //         <Route component={NotFound}/>
        //     </Layout>
        // </Switch> 
        // </BrowserRouter>
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />			
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
        </BrowserRouter>    
    )
}

export default App