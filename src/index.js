import React from 'react'
import ReactDOM from 'react-dom'
import ListingPage from "./pages/ListingPage";
import {Route, BrowserRouter as Router} from "react-router-dom";
import MappingPage from "./pages/MappingPage";

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={ListingPage}/>
            <Route path="/map/:id" component={MappingPage}/>
        </div>
    </Router>
);


ReactDOM.render(routing,document.querySelector("#root"));
