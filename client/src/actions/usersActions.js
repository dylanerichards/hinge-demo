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
    return (dispatch) => {
        axios.get(`/users/${id}`)
            .then(response => {
                dispatch({ type: "GET_USER", user: response.data })
            })
    }
}