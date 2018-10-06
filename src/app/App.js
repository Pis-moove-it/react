import React from 'react';
import { hot } from 'react-hot-loader';
import Header from "./home/components/Header";
import global from "./home/css/global.css"

const App = () => (
    <div>
        <Header/>
    </div>
);

export default hot(module)(App);
