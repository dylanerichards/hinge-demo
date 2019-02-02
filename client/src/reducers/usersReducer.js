const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.users
      }

    default: 
      return {}
  }
}

export default usersReducer