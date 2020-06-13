import axios from 'axios'

//Action Creators

const GET_USER_INFO = "GET_USER_INFO"
const LOGIN = "LOGIN"

//Actions

const getInfo = (info) => ({
  type: GET_USER_INFO,
  info
})

export const login = (email, facebookId) => ({
  type: LOGIN,
  email,
  facebookId
})

//Thunks

export const fetchInfo = (email) => async dispatch => {
  try {
    const {data} = await axios.get(`https://salty-reef-54378.herokuapp.com/user/${email}`)
    dispatch(getInfo(data))
  } catch (err) {
    console.error(err)
  }
}

//Initial State

const initialState = {
  email: null,
  facebookId: null,
  whyStatement: "",
  actionsTaken: [],
  commitments: []
}

//Reducer

export default function userReducer (state = initialState, action) {
  switch (action.type){
    case LOGIN:
      return {...state, email: action.email, facebookId: action.facebookId}
    case GET_USER_INFO:
      return {...state, whyStatement: action.why, actionsTaken: action.actionsTaken, commitments: action.commitments}
    default:
      return state
  }
}
