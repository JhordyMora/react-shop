// ocupen el comando “rafce” para crear el componente.
import React from 'react';
import { BrowserRouter, Routes, Switch, Route } from 'react-router-dom';
import Layout from '../Containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import "../styles/global.css";
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        //Manera de hacer en versiones antiguas
        // <BrowserRouter>
        // <Layout>
        //      <Switch> //en vez de Routes
        //         <Route exact path='/' component={Home}/> //se usaba component en vez de element
        //         <Route exact path='/Login' component={Login}/>
        //         <Route exact path='recovery-password' component={RecoveryPassword}/>
        //         <Route component={NotFound}/>
        //     </Switch>
        // </Layout> 
        // </BrowserRouter>
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route exact path="/login" element={<Login/>} />
                            <Route exact path="/password-recovery" element={<PasswordRecovery/>} />
                            <Route exact path="/send-email" element={<SendEmail/>} />
                            <Route exact path="/new-password" element={<NewPassword/>} />
                            <Route exact path="/account" element={<MyAccount/>} />
                            <Route exact path="/signup" element={<CreateAccount/>} />
                            <Route exact path="/checkout" element={<Checkout/>} />
                            <Route exact path="/orders" element={<Orders/>} />
                            <Route path="*" element={<NotFound/>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>    
    )
}

export default App