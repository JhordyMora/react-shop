// ocupen el comando “rafce” para crear el componente.
import React from 'react';
import Layout from '../Containers/Layout';
import Login from '../Containers/Login';
import "../styles/global.css";

const App = () => {
    return (
        <Layout>
            <Login/>
        </Layout>
    )
}

export default App