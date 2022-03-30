import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import usersData from '../../data/users'

const LogIn = ({ open, onLogIn, onHandleModal }) => {

    const [error, setError] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (!open) {
            setError(null)
            setUsername("")
            setPassword("")
        }
    }, [open])

    const onClose = () => onHandleModal(false)

    const onChange = (event, id) => {
        if (id === 'username')
            setUsername(event.target.value.toString().toUpperCase())
        if (id === 'password')
            setPassword(event.target.value)
    }

    const onSubmit = () => {
        const user = usersData.find(user => user.username.toUpperCase() === username && user.password === password)

        if (user && user !== -1) {
            setError(null)
            onLogIn({ user })
            onClose()
        }
        else
            setError("Invalid user or wrong password")
    }

    return (
        <div className={open ? 'login-modal login-modal-open' : 'login-modal'}>
            <div className="login-content position-relative">
                <div className='login-close' onClick={onClose}>
                    <i className="bi bi-x"></i>
                </div>
                <h4 className="login-title">Log In</h4>
                <div className="login-form">
                    <input value={username} className="form-control" placeholder="Username" type="text" onChange={(event) => onChange(event, 'username')} />
                    <input value={password} className="form-control" placeholder="Password" type="password" onChange={(event) => onChange(event, 'password')} />
                </div>
                <span className="text-danger">{error}</span>
                <button className="login-button btn btn-primary" onClick={onSubmit}>
                    Log In
                </button>
            </div>
        </div>
    )

}

LogIn.propTypes = {
    open: PropTypes.bool.isRequired,
    onLogIn: PropTypes.func.isRequired,
    onHandleModal: PropTypes.func.isRequired,
}

export default LogIn
