const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
          ...state,
        users: action.users
      }
    case "GET_USER":
      return {
          ...state,
        user: action.user
      }

    default: 
      return {}
  }
}

export default usersReducer