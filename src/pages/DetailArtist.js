import React, { useEffect } from 'react'
import { Navbar } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getArtist } from '../store/actions/artistAction' 
import '../App.css'

export default function DetailArtist() {
      const dispatch = useDispatch()
      const { id } = useParams()
      const { artist } = useSelector(state => state.artistReducer)

      useEffect(() => {
        const url = `https://api.spotify.com/v1/artists/${id}`
        dispatch(getArtist(url))
          
      }, [id])

      return(
        <div>
        <Navbar />
        <div>
        <div className=" d-flex col position-absolute top-0 start-50 translate-middle-x " style={{marginTop: '20vh', border: 'solid rgba(69, 182, 144, 1)', width: '40vw' }}>
          <div>
            <img src={artist.images} alt={artist.name} style={{ width: '20vw',  border: ' 5px solid white', margin: '1em' }} ></img>
          </div>
          <div className="mt-5" style={{ textAlign: 'left', color: 'white', margin: '2em', fontFamily: 'Roboto' }}>
            <div>
              <h1 style={{ fontWeight: 'bold', color: 'rgba(69, 182, 144, 1)', textShadow: '1px 1px 1px #000' }}>{artist.name}</h1>
            </div>
            <div className="mt-3">
              <h5 style={{ color: 'rgba(69, 182, 144, 1)' }}>Followers<br></br><h2 style={{ fontWeight: 'bold', color: 'white' }}>{new Intl.NumberFormat().format(artist.followers)}</h2></h5>
            </div>
            <div className="mt-3"> 
              <h5 style={{ color: 'rgba(69, 182, 144, 1)' }}>Genre</h5>
                <div className="genres d-flex row overflow-scroll">
                {
                  artist.genres?.map((genre, index) => {
                    // if(index === artist.genres.length -1 ) return <p className="col">{genre}</p>
                    return <h4 style={{ marginTop: '-5px' }}>{genre} </h4>
                  })
                }
                </div>
              
          </div>
      </div>
        </div>
    </div>
  </div>
  )
}