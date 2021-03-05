import axios from 'axios'
let bearerToken = 'BQA0t0kfMOdBC7WnfCAIXvtEhNseAUBm77GFP_4TTcY8wT0PEq5wMbS8EnAsk5aIQHarwWqHQl5VkmyvXYwiJ7IDTqjOEERjJwUsstHAOL3_WJpd7y2_QaM4doEaD0112JjXxXqvXW1XixPNL0EHEd3kBnTSRg-Tq4W690Nl-1RYOSuf5iaKrMZJKUJyYL7rpztveLuu_O_MVMrE8n2ErYimN6DnJTDjjyusXxChGIxQG93tAuu-BBKZymk'

export function inputArtist(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_ARTIST',
      payload
    })
  }
}

export function inputArtistsList(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_ARTISTSLIST',
      payload
    })
  }
}

export function inputSearchArtist(payload) {
  return function (dispatch) {
    dispatch({ 
      type: 'INPUT_SEARCH_ARTIST',
      payload
    })
  }
}

export function searchingArtist(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
      })
      .then(({ data }) => { 
        dispatch(inputSearchArtist(data.artists.items))
      })
      .catch(err => {
        if(err.response.data.error.status === 401){
          axios('http://54.179.61.252:6300/refresh',{
            method: 'post',
            data: {
              refresh_token: 'AQCtUUG3wGfrPnm08O9mAqGtxRtZe9FTdvpEN6T13_0ANh8-LZ1gGLO37K3NSUrfX22PuInmXQBdrG73BumquPN_fDP3B0uJYZD2GJViUM5yohrdd2n4GKtYkXQObDgY7YA'
            }
          })
          .then(({data}) => {
            bearerToken = data.body.access_token
            dispatch(searchingArtist(url))
          })
          .catch(err => {
            console.log(err)
          })
        }
      })
  }
}

export function getArtist(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
    })
    .then(({ data }) => { 
      const newArtist = {
        name: data.name,
        followers: data.followers.total,
        images: data.images[0].url,
        genres: data.genres
      }
      dispatch(inputArtist(newArtist))
    })
    .catch(err => {
      if(err.response.data.error.status === 401){
        axios('http://54.179.61.252:6300/refresh',{
          method: 'post',
          data: {
            refresh_token: 'AQCtUUG3wGfrPnm08O9mAqGtxRtZe9FTdvpEN6T13_0ANh8-LZ1gGLO37K3NSUrfX22PuInmXQBdrG73BumquPN_fDP3B0uJYZD2GJViUM5yohrdd2n4GKtYkXQObDgY7YA'
          }
        })
        .then(({data}) => {
          bearerToken = data.body.access_token
          dispatch(getArtist(url))
        })
        .catch(err => {
          console.log(err)
        })
      }
    })
  }
}

export function getArtistList(url) {
  return (dispatch) => {
    axios.get(url, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`
      }
      })
      .then(({ data }) => { 
        dispatch(inputArtistsList(data.artists.items))
      })
      .catch(err => {
        if(err.response.data.error.status === 401){
          axios('http://54.179.61.252:6300/refresh',{
            method: 'post',
            data: {
              refresh_token: 'AQCtUUG3wGfrPnm08O9mAqGtxRtZe9FTdvpEN6T13_0ANh8-LZ1gGLO37K3NSUrfX22PuInmXQBdrG73BumquPN_fDP3B0uJYZD2GJViUM5yohrdd2n4GKtYkXQObDgY7YA'
            }
          })
            .then(({data}) => {
              bearerToken = data.body.access_token
              dispatch(getArtistList(url))
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
  }
}
