import axios from 'axios'
import { toast } from 'react-toastify'

const addGenre = (genre) => {
  return {
    type: 'ADD_FAVORITE',
    payload: genre
  }
}
const getFavGenre = (genre) => {
  return {
    type: 'GET_FAV_GENRE',
    payload: genre
  }
}
export const getFavorite = () => {
  return async (dispatch) => {
    try {
      const favorite = await axios('http://54.179.61.252:6300/favgenre', {
        method: 'get',
        headers: {
          access_token: localStorage.access_token_local
        }
      })
      dispatch(getFavGenre(favorite.data))
    }
    catch (err) {
      console.log(err)
    }
  }
}
export const deleteGenre = (genre) => {
  return async (dispatch) => {
    try {
      const favorite = await axios('http://54.179.61.252:6300/favgenre/'+ genre.id, {
        method: 'delete',
        headers: {
          access_token: localStorage.access_token_local
        },
        data: {
          id: genre
        }
      })
      dispatch(getFavorite())
    }
    catch (err) {
      console.log(err)
    }
  }
}
export const addFavorite = (genre) => {
  return async (dispatch) => {
    try {
      const favorite = await axios('http://54.179.61.252:6300/favgenre', {
        method: 'post',
        headers: {
          access_token: localStorage.access_token_local
        },
        data: {
          genre: genre
        }
      })

      dispatch(addGenre(favorite))

    }
    catch (err) {
      console.log(err)
    }
  }
}
export const generatePlaylist = (payload, family) => {
  return (dispatch) => {
    let access_token = localStorage.access_token

    const userURL = 'https://api.spotify.com/v1/me'
    const createPlaylistURL = `https://api.spotify.com/v1/users/`
    const addItemPlaylistURL = 'https://api.spotify.com/v1/playlists/'

    let uris = []
    let encodeUris = ''
    for (let i = 0; i < 10; i++) {
      uris.push(family[i].uri)
      encodeUris = encodeUris + encodeURIComponent(family[i].uri) + ','
    }

    let userID = null
    let playlistID = null
    axios.get(userURL, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`
      }
    })
      .then(({ data }) => {
        userID = data.id

        return axios({
          method: 'post',
          url: createPlaylistURL + `${userID}/playlists`,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
          },
          data: {
            "name": payload.playlistName,
            "description": payload.description,
            "public": false
          }
        })
      })
      .then(({ data }) => {
        playlistID = data.id
        return axios({
          method: 'post',
          url: addItemPlaylistURL + `${playlistID}/tracks?uris=${encodeUris}`,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${access_token}`
          },
          data: {
            "uris": encodeUris
          }
        })
      })
      .then(({ data }) => {
        toast.success(`Playlist has been created, check your spotify account! 🎶`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
      })
      .catch(function (err) {
        if (err.response.data.error.status === 401) {
          axios('http://54.179.61.252:6300/refresh', {
            method: 'post',
            data: {
              refresh_token: localStorage.refresh_token
            }
          })
            .then(({ data }) => {
              access_token = data.body.access_token
              dispatch(addFavorite(payload.genre))
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
  }
}


