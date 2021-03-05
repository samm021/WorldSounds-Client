const initialState = {
  artist: {},
  artistsList: [],
  searchArtist: [], 
  loading: false,
  error: null
}

export default function ouputSearchReducers(state = initialState, action) {
  switch(action.type){
    case "INPUT_ARTIST": 
      return {...state, artist: action.payload }
    case "INPUT_ARTISTSLIST": 
      console.log(action.payload, 'dari reducer');
     return {...state, artistsList: action.payload }
    case "INPUT_SEARCH_ARTIST":
      return {...state, searchArtist: action.payload}
    default:
      return state
  }
}