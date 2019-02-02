const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.users
      }
    case "GET_USER":
      return {
        user: action.user
      }

    default: 
      return {}
  }
}

export default usersReducer