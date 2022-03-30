import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HomeView from '../views/HomeView'
import TicketView from '../views/TicketView'

const MainRouter = ({ history }) => {
console.log(history.location.pathname)
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={HomeView} />
                <Route exact path='/ticket' component={TicketView} />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default MainRouter