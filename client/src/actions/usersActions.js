import axios from "axios"

export const getUsers = (dispatch) => {
    return (dispatch) => {
        axios.get("/users")
            .then(res => {
                dispatch({ type: "GET_USERS", users: res.data })
            })
    }
}

export const getUser = (id) => {
    return (dispatch, getState) => {
        const usersLoaded = getState().users && getState().users.users

        if (usersLoaded) {
            const user = getState().users.users.filter(user => {
                return user.id == id
            })[0]

            dispatch({ type: "GET_USER", user: user })
        } else {
            axios.get(`/users/${id}`)
                .then(response => {
                    dispatch({ type: "GET_USER", user: response.data })
            })
        }
    }
}