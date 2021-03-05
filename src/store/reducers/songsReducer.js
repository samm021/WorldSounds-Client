const initState = {
  songs: {
    loading: false,
    error: null,
    data: []
  },
  artists: {
    loading: false,
    error: null,
    data: []
  },
  bubbleChildren: {
    loading: false,
    error: null,
    data: []
  },
  bubbleArtists: {
    loading: false,
    error: null,
    data: ''
  }
}

const songsReducer = (state = initState, action) => {
  switch (action.type) {
    // synchronous songs
    case 'FETCHING_SONGS':
      return {
        ...state,
        songs: { ...state.songs, loading: true}
      }
    case 'ERROR_FETCH_SONGS':
      return {
        ...state,
        songs: { ...state.songs, error: action.payload}
      }
    case 'FETCHED_SONGS':
      return {
        ...state,
        songs: { ...state.songs, loading: false, error: null, data: action.payload}
      }
    // syncronous artists
    case 'FETCHING_ARTISTS':
      return {
        ...state,
        artists: { ...state.artists, loading: true}
      }
    case 'ERROR_FETCH_ARTISTS':
      return {
        ...state,
        artists: { ...state.artists, error: action.payload}
      }
    case 'FETCHED_ARTISTS':
      return {
        ...state,
        artists: { ...state.artists, loading: false, error: null, data: action.payload}
      }
    // syncronous bubblechildren
    case 'FETCHING_BUBBLEARTISTS':
      return {
        ...state,
        bubbleChildren: { ...state.bubbleChildren, loading: true}
      }
    case 'ERROR_FETCH_BUBBLECHILDREN':
      return {
        ...state,
        bubbleChildren: { ...state.bubbleChildren, error: action.payload}
      }
    case 'FETCHED_BUBBLECHILDREN':
      return {
        ...state,
        bubbleChildren: { ...state.bubbleChildren, loading: false, error: null, data: action.payload}
      }
    // synchronouse bubbleartists
    case 'FETCHING_BUBBLEARTISTS':
      return {
        ...state,
        bubbleArtists: { ...state.bubbleArtists, loading: true}
      }
    case 'ERROR_FETCH_BUBBLEARTISTS':
      return {
        ...state,
        bubbleArtists: { ...state.bubbleArtists, error: action.payload}
      }
    case 'FETCHED_BUBBLEARTISTS':
      return {
        ...state,
        bubbleArtists: { ...state.bubbleArtists, loading: false, error: null, data: action.payload}
      }
    case 'CLEAR_SONGS':
      return {
        ...state,
        songs: { ...state.songs, data: []}
      }
    default:
      return state
  }
}

export default songsReducer