// reducer
export default function users(state = []) {
    return state; // nothing to do here, but we need roles node in redux store
}

// selectors
export function getUsers(state, props) {
    return state.users;
}

export function getUser(state, props) {
    let user = state.users.find(item => item.id === props.id);
    return user && user !== -1 ? user : null
}
