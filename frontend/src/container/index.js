import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import Header from './Header'
import Home from './Home'
export default class index extends Component {
    render() {
        return (
            <Provider store={store()}>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path='/' component={Home}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
