import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CrudDemo from "./CrudDemo";

const Welcome = () => {return <h1>Welcome</h1>}
const About = () => {return <h1>About</h1>}
const Home = () => {return<h1>Home</h1>}
const Person = () => <h1>Person</h1>
const NotFound = () => <h1>Not Found</h1>
 
const DemoRouter = () => {
    return(
        <div className="container">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/welcome" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Route path="/person" component={Person} />
                    <Route path="/notfound" component={NotFound} />
                    <Route path="/cruddemo" component={CrudDemo} />
                </Switch>
            </Router>
        </div>
    )
}

const Header = () => {
    return(
        <nav className="nav bg-primary nav-fill ">
            <Link className="nav-link text-light" to="/welcome">Welcome</Link>
            <Link className="nav-link text-light" to="/about">About</Link>
            <Link className="nav-link text-light" to="/home">Home</Link>
            <Link className="nav-link text-light" to="/person">Person</Link>
            <Link className="nav-link text-light" to="/notfound">Not Found</Link>
            <Link className="nav-link text-light" to="/cruddemo">Crud Demo</Link>
        </nav>
    );
}

export default DemoRouter