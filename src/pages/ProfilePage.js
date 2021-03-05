import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, GeneratePlaylistModal } from '../components'
import { getDataUser, getSpotifyUser, setLoginStatus } from '../store/actions/userAction'
import { deleteGenre, getFavorite } from '../store/actions/favoriteAction'

export default function UserPage() {
  const dispatch = useDispatch()
  const { user, userSpotify } = useSelector(state => state.userReducer)
  const { genres } = useSelector(state => state.favoriteReducer)
  
  useEffect(() => {
    dispatch(setLoginStatus(true))
    dispatch(getFavorite())
    dispatch(getDataUser())
    dispatch(getSpotifyUser())
    
  }, [])

  const handleDeleteFav = (e, genre) => {
    dispatch(deleteGenre(genre))
  }
return(
    <div>
      <Navbar />
      <div className="d-flex justify-content-center" style={{ marginTop: '10vh'}}>
      <div className="user-profile mx-5">
        <div className="mt-5">
          {
            (user && !userSpotify || userSpotify.images.length === 0) 
            ?
            <img  src="https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg" width="250" alt="blank-profile" style={{ marginTop: '60px', borderRadius: '100%', border: '4px solid rgba(69, 182, 144, 1)' }} />
            :
            <img src={userSpotify.images[0]?.url} alt={userSpotify.display_name} width="250" style={{ marginTop: '60px', borderRadius: '100%', border: '4px solid rgba(69, 182, 144, 1)' }} />
          }
        </div>
        <div>
          {
            
            (!Object.values(userSpotify)[0])
            &&
            <h2 style={{ color: 'rgba(69, 182, 144, 1)', fontWeight: 'bold', marginTop: '5px' }}>{user.username}</h2>
          }
          {
            (Object.values(userSpotify)[0])
            &&
            <div className="d-flex col justify-content-center">
            <h2 style={{ color: 'rgba(69, 182, 144, 1)', fontWeight: 'bold', marginTop: '3px' }}>{userSpotify.display_name} </h2><span class="badge bg-primary" style={{ fontSize: '20px', padding: '10px', height: '38px', marginLeft: '10px' }} >{userSpotify.country}</span>
          </div>
          }
        </div>
        <div style={{ color: 'white' }}>
          {
            (Object.values(userSpotify)[0])
            &&
            <div>
            <h5>followers</h5>
            <h2>{userSpotify.followers.total}</h2>
          </div>
          }
          {
            (Object.values(userSpotify)[0])
            &&
            <div >
            <button className="btn mt-3"  data-bs-toggle="modal" data-bs-target="#generatePlaylistModal" href="" style={{ backgroundColor: '#303960', color: 'white', marginTop:'-5px', borderRadius: '20px' }}>
              Generate playlist
            </button>
          </div>
          }
        </div>
        </div>
        <div className="mt-5"  >
           <div className="mt-5 shadow" style={{ backgroundColor: 'rgba(69, 182, 144, 1)', top: '40px', width: '380px', height: '450px', borderRadius:'10px' }}>
             <div className="header">
               <div>
                 <p style={{color: 'rgba(69, 182, 144, 1)' }}>header</p>
               </div>
               <div>
                <h2 className="mt-1" style={{ color: 'white', fontWeight: 'bold', margin: '10px', top: '10px' }}>Favorite Genres</h2>
               </div>
             </div>
             <div className="overflow-scroll" style={{ backgroundColor: 'white', height: '280px', marginTop: '-5px' }}>
               <div className=" " style={{ textAlign: 'left', margin: '10px' }}>
                {
                  (genres)
                  ?
                  genres?.map(genre => {
                    return (
                      <div className="d-flex col justify-content-between mt-2" style={{ borderBottom: '0.8px solid rgba(69, 182, 144, 1)' }}>
                        <h4>{genre.Genre}</h4>
                        <a onClick={(e) => handleDeleteFav(e, genre)} href="#" style={{ color: '#aa2b1d' }}><i className="bi-trash-fill"></i></a>
                      </div>
                      )
                  })
                  :
                  <div>
                    <h4>Add your favorite genre to here</h4>
                  </div>
                }
               </div>
             </div>
           </div>
        </div>
      </div>

      <div className="modal fade" id="generatePlaylistModal" tabindex="-1" aria-labelledby="generatePlaylistModalLabel" aria-hidden="true">
        <GeneratePlaylistModal />
      </div>
    </div>
  )
}