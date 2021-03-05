const initialState = {
  accessToken: null,
  refreshToken: null,
  userSpotify: {
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  },
  user: {
    id: 0,
    email: '',
    username: ''
  },
  isLogin: false,
  loading: false
}

const userReducers = (state=initialState, action) => {
  switch(action.type){
    case 'GET_USER_SPOTIFY':
      return {...state, userSpotify: action.payload }
    case 'LOGIN_USER':
      return {...state, user: action.payload}
    case 'LOGIN_STATUS':
      return {...state, isLogin: action.payload }
    default: 
      return state
  }
}
export default userReducers