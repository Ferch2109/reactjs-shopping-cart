import React from 'react'
import { connect } from 'react-redux'
import { createBrowserHistory } from "history"
import MainRouter from './routes/router'
import Topbar from './containers/Topbar'
import { getSessionData } from './ducks/session'
import LogIn from './containers/LogIn'

const history = createBrowserHistory()

const App = () => {

    return (
        <div>
            <LogIn />
            <Topbar history={history} />
            <div className="container">
                <MainRouter history={history} />
                <footer>
                    <small>
                        powered by <a href="http://www.kikoya.mx/">Kikoya</a>
                    </small>
                </footer>
            </div>
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        getSessionData: getSessionData(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    //handleLogOut: (id) => dispatch(handleLogOut(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
