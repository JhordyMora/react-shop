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

const App = () => {
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
        <BrowserRouter>
        <Layout>
            <Routes>
                    <Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route path="*" component={NotFound} />
            </Routes>
        </Layout>
        </BrowserRouter>    
    )
}

export default App