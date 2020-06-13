import axios from 'axios'

//Action Creators

const GET_ACTIONS = "GET_ACTIONS"

//Actions

const getActions = (actions) => ({
  type: GET_ACTIONS,
  actions
})

//Thunks

export const fetchActions = () => async dispatch => {
  try {
    const {data} = axios.get('https://salty-reef-54378.herokuapp.com/actions')
    dispatch(getActions(data))

  } catch (err) {
    console.error(err)
  }
}

//Initial State

const initialState = {
  actions: []
}

//Reducer

export default function actionReducer (state = initialState, action) {
  switch (action.type){
    case GET_ACTIONS:
      return {...state, actions: action.actions}
    default:
      return state
  }
}
