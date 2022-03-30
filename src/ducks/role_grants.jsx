// reducer
export default function roles(state = []) {
    return state; // nothing to do here, but we need roles node in redux store
}

// selectors
export function getRoles(state, props) {
    return state.roles;
}

export function getRole(state, props) {
    const role = state.roles.find(item => item.role === props.role)
    return role && role !== -1 ? role : null
}
