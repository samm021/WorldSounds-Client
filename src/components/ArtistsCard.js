import React from 'react'
import '../App.css'
import { useHistory  } from 'react-router-dom'

export default function ArtistCard(props) {
  const history = useHistory()
  return(
    <>
      <div className="card mx-5 my-3" id="artist-card">
        <div className="mt-3">
          <a href="" onClick={(e) => { e.preventDefault(); history.push(`/artist/${props.artist.id}`) }} >
            <img src={props.artist.images[0]?.url} width="200" height="200" style={{ borderRadius: '100%'}}/>
          </a>
        </div>
        <div className="card-body" style={{ textShadow: '1.5px 1.5px 1.5px #000' }}>
        <a href="" onClick={(e) => { e.preventDefault(); history.push(`/artist/${props.artist.id}`) }} >
          <h5 className="card-title" style={{ fontWeight: '900' }}>{props.artist.name}</h5>
        </a>
          <p className="card-text mb-4">{new Intl.NumberFormat().format(props.artist.followers.total)} followers</p>
        </div>
      </div>
    </>
  )
}