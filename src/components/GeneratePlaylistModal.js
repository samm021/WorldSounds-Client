import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '../store/actions/favoriteAction'
import { clearSongs, fetchSongs } from '../store/actions/songsAction'
import { generatePlaylist } from '../store/actions/favoriteAction'

export default function GeneratePlaylistModal() {
  const dispatch = useDispatch()
  const { genres } = useSelector(state => state.favoriteReducer)
  const { songs } = useSelector(state => state.songsReducer)
  const [favGenreForm, setFavGenreForm] = useState({
      genre: '',
      playlistName: '',
      description: ''
})

  const handleChange = (e) => {
      const { name, value } = e.target
      const favGenre = { ...favGenreForm, [name]: value }
        setFavGenreForm(favGenre)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchSongs(favGenreForm.genre))
  }

  useEffect(() => {
      if (songs.data.length > 0) {
        dispatch(generatePlaylist(favGenreForm, songs.data))
        dispatch(clearSongs())
      }
    }, [songs])

  return (
      <>
      <div className="modal-dialog">
      <div className="modal-content"  style={{ borderRadius: '8px' }}>
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Generate playlist</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
        {/* FORM */}
        <form className="form-floating" >
          <div className=" form-floating " >
            <input className="form-control" type="text" id="playlist-name" name="playlistName" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/><br></br>
            <label className="form-label" for="email-username-login" >Playlist Name</label>
          </div>
          <div className="select" >
              <select onChange={(e) => handleChange(e)} name="genre" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)' }}>
                <option disabled>Please select your Genre</option>
                {genres?.map(genre => {
                  return (
                    <option value={genre.Genre}>{genre.Genre}</option>
                  )
                })}
              </select>
            </div>
          <div className="form-floating">
            <input className="form-control" id="description" type="text" name="description" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
            <label className="form-label" for="description" >Description</label>
          </div>
        </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: '#303960', border: 'none', marginBottom: '5px'  }} onClick={handleSubmit}>Create</button><br></br>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}