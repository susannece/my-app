import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'   
import CrudDemo from './CrudDemo' 

const DemoRouter = () => {

    const Welcome = () => <h1>Welcome</h1>
    const Home = () => <h1>Home</h1>
    const Person = () => <h1>Person</h1>
    const About = () => <h1>About</h1>
    const NotFound = () => <h1>Not Found</h1>

    const Header = () => {
        return(
            <nav className='nav bg-primary nav-fill'>
                <Link to='welcome' className='nav-link text-light'>Welcome</Link>
                <Link to='home' className='nav-link text-light'>Home</Link>
                <Link to='person' className='nav-link text-light'>Person</Link>
                <Link to='about' className='nav-link text-light'>About</Link>
                <Link to='crud' className='nav-link text-light'>CrudDemo</Link>
            </nav>
        )
    }

    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Welcome}/>
                    <Route path='/welcome' component={Welcome}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/person' component={Person}/>
                    <Route path='/about' component={About}/>
                    <Route path='/crud' component={CrudDemo}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default DemoRouter