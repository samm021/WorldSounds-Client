const initialState = {
  genre: '',
  genres: []
}

export const favoriteReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_FAVORITE':
      return {...state, genre: action.payload}
    case 'GET_FAV_GENRE':
      return {...state, genres: action.payload}
    default:
      return state
  }
}