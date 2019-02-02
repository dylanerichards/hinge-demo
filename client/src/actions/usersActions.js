import axios from "axios"

export const getUsers = (dispatch) => {
    console.log("get users called")
    return (dispatch) => {
        axios
        .get("/users")
        .then(res => {
          return { type: "GET_USERS", users: res.data }
        })
    }
}