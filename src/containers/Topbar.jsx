import { connect } from 'react-redux'
import Topbar from '../components/Topbar'
import {
    getSessionData, getUserRole,
    logOut, onUpdateLogInModal
} from '../ducks/session'

const mapStateToProps = (state, props) => {
    return {
        session_data: getSessionData(state, props),
        role: getUserRole(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogOut: () => dispatch(logOut()),
    onHandleLogInModal: (modal_state) => dispatch(onUpdateLogInModal(modal_state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
