import { connect } from 'react-redux'
import LogIn from '../components/LogIn'
import { logIn, onUpdateLogInModal, getLogInModalState } from '../ducks/session'

const mapStateToProps = (state, props) => {
    return {
        open: getLogInModalState(state, props),
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLogIn: (user) => dispatch(logIn(user)),
    onHandleModal: (modal_state) => dispatch(onUpdateLogInModal(modal_state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
