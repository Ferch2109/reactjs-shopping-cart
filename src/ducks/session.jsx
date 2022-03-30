import { getRole } from './role_grants'
import { getUser } from './users'
// actions
const LOGIN_MODAL = 'session/LOGIN_MODAL'
const SESSION_LOGIN = 'session/LOGIN'
const SESSION_LOGOUT = 'session/LOGOUT'

// reducer
const initialState = {
    login_modal: false,
    session_data: null
}

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_MODAL:
            return handleUpdateLogInModal(state, action.payload)
        case SESSION_LOGIN:
            return handleLogIn(state, action.payload)
        case SESSION_LOGOUT:
            return handleLogOut(state, action.payload)
        default:
            return state
    }
}

const handleUpdateLogInModal = (state, payload) => {
    return {
        ...state,
        login_modal: payload.modal_state
    }
}

const handleLogIn = (state, payload) => {
    let _state = state
    localStorage.setItem('session_data', btoa(payload.user.id))
    _state = {
        ...state,
        session_data: { ...payload.user }
    }

    return _state
}

const handleLogOut = (state, payload) => {
    localStorage.removeItem('session_data')
    return {
        ...state,
        session_data: null
    }
}

// action creators
export function onUpdateLogInModal(modal_state) {
    return {
        type: LOGIN_MODAL,
        payload: {
            modal_state
        }
    }
}

export function logIn(user) {
    return {
        type: SESSION_LOGIN,
        payload: user
    }
}

export function logOut() {
    return {
        type: SESSION_LOGOUT,
        payload: null
    }
}

// selectors
export function getLogInModalState(state, props) {
    return state.session.login_modal
}

export function getSessionData(state, props) {
    //It's better to save the session as a cookie. 
    //When there is a forced reload page the state returns to the initial one 
    let id = Number(atob(localStorage.getItem('session_data')))

    let _session_data = null
    if (state.session.session_data)
        _session_data = state.session.session_data
    else if (id)
        _session_data = getUser(state, { id })

    return _session_data
}

export function getUserRole(state, props) {
    //In case of forced reload page.
    const _session_data = getSessionData(state, props)
    let role = null
    if (_session_data)
        role = _session_data.role
    return getRole(state, { role })
}