import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Topbar = ({ history, session_data, role, onLogOut, onHandleLogInModal }) => {

    const [menu, setMenu] = useState(false)

    const onOpenLogInModal = () => onHandleLogInModal(true)
    const onHandleLogOut = () => {
        onLogOut()
        setMenu(false)
    }
    const onToggleMenu = () => setMenu(menu => !menu)

    const onGoHome = () => history.push('/')

    return (
        <div className="topbar-root">
            <h1 className="topbar-title" onClick={onGoHome}>Virtual Shop</h1>
            {session_data ?
                <>
                    <div className='topbar-menu'>
                        <div className='topbar-list'>
                            {role && role.modules.map((module, key) => {
                                const last = role.modules.length !== key+1
                                return (
                                    <span
                                        key={`topbar-item-${key.toString()}`}
                                        className={last ? 'border' : ''}
                                    >
                                        {module.option}
                                    </span>
                                )
                            })}
                        </div>
                        <div className='topbar-avatar' onClick={onToggleMenu}>
                        <div className="topbar-user">
                            <span className="text-primary">{session_data.username[0]}</span>
                        </div>
                        {menu ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
                        </div>
                    </div>
                </>
                :

                <button
                    type="button"
                    className='topbar-button'
                    id="buttonLogIn"
                    data-bs-toggle="modal"
                    data-bs-target="#logInModal"
                    onClick={onOpenLogInModal}
                >
                    Log In
                </button>
            }
            {menu &&
                <div className='topbar-menu-list'>
                    <span onClick={onHandleLogOut}>Log out</span>
                </div>
            }
        </div >
    )

}

Topbar.propTypes = {
    onLogOut: PropTypes.func.isRequired,
    onHandleLogInModal: PropTypes.func.isRequired,
}

export default Topbar
