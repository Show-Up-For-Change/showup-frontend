import axios from 'axios'

//Action Creators

const GET_LEADERS = "GET_LEADERS"

//Actions

const getLeaders = (leaders) => ({
  type: GET_LEADERS,
  leaders
})

//Thunks

export const fetchLeaders = () => async dispatch => {
  try {
    const {data} = await axios.get('https://salty-reef-54378.herokuapp.com/thought_leaders')
    dispatch(getLeaders(data))

  } catch (err) {
    console.error(err)
  }
}

//Initial State

const initialState = {
  leaders: []
}

//Reducer

export default function leaderReducer (state = initialState, action) {
  switch (action.type){
    case GET_LEADERS:
      return {...state, leaders: action.leaders}
    default:
      return state
  }
}
