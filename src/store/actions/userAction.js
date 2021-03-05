import axios from 'axios'
import { toast } from 'react-toastify'
const url = 'http://54.179.61.252:6300'
let bearerToken = "BQAED1QL7fJQaQMWgE_qT0cHgK26kaY1TsI5bXxsgoyoN_n-TtjrK_QjQrTWscf2pyoGt2PwnuaN2lX43a47nFlDrZzpSWEK-SLj1smqMDjmzp-DT5iWUr70lQLsH_buXvznJ_iOpdAY2Cqbj7MqDPpywxtN_h5CuDqsogktTr0a-c5MFohj3bn8yVq1Mh2nXk9qtRvnlxA8AGfGwOvoUsiQkBjlQJ3cDjS0VzN39fB_5BJLrO-3QgeIeSH2rUjI-dzrC86z_chrrZ6zwRKtvjEo6CE0U90ukRsstx8fAccu"


const setUser = (user) => {
  return {
    type: 'LOGIN_USER',
    payload: user
  }
}

const getSpotifyUserdata = (data) => {
  return {
    type: 'GET_USER_SPOTIFY',
    payload: data
  }
}

export const setLoginStatus = (status) => {
  return {
    type: 'LOGIN_STATUS',
    payload: status
  }
}

export function setUserData(payload) {
  return async (dispatch) => {
    try{
      const user = await axios({
        method: 'post',
        url: `${url}/login`,
        data: {
          validator: payload.validator,
          password: payload.password
        }
      })
      localStorage.setItem('access_token_local', user.data.access_token)
      dispatch(setUser(user.config.data))
      dispatch(setLoginStatus(true))
      toast.success('Login Successful!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
    catch(err) {
      toast.dark(err.response.data.msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
  }
}

export function register(payload) {
  return async (dispatch) => {
    try {
      const newUser = await axios({
        url: `${url}/register`,
        method: 'post',
        data: {
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      })
      toast.success('Register Successful ' + newUser.data.username, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
    }
    catch(err) {
    toast.dark(err.response.data.msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
    }
  }
}

export function getDataUser() {
  return async (dispatch) => {
    try {
      const user = await axios({
        url: `${url}/user`,
        method: 'GET',
        headers: {
          access_token: localStorage.access_token_local
        }
      })
      const data = {
        id: user.data.id,
        username: user.data.username,
        email: user.data.email
      }
      dispatch(setUser(data))
    } catch(err) {
      console.log(err)
    }
  }
}

export function getSpotifyUser() {
  return async (dispatch) => {
    try {
      const spotifyUser = await axios({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`
        }
      })
      dispatch(getSpotifyUserdata(spotifyUser.data))
    } catch (err) {
      let refresh_token = ''
      if(localStorage.refresh_token){
        refresh_token = localStorage.refresh_token
        if(err.response.data.error.status === 401){
          axios('http://54.179.61.252:6300/refresh',{
            method: 'post',
            data: {
              refresh_token: refresh_token
            }
          })
          .then(({data}) => {
            bearerToken = data.body.access_token
            dispatch(getSpotifyUser(url))
          })
          .catch(err => {
            console.log(err)
          })
        }
      }
      console.log(err.response.data.error);
    }
}
}