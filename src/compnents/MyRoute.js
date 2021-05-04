import React,{Component} from 'react'
import Header from './Pages/Header'
import About from './Pages/About'
import Portfolio from './Pages/Potfolio'
import {Switch,Route} from 'react-router-dom'


class MyRoute extends Component
{
    render()
    {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Header} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                </Switch>
            </div>
        );
    }
}
export default MyRoute