const usersReducer = (state = [], action) => {
    console.log(action, "action")
    return { users: action.users }
}

export default usersReducer