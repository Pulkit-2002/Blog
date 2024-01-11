// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/article/:id" component={Article} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
}

export default App;
