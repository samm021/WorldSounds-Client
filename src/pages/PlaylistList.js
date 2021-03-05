import React from 'react'
import '../App.css'
import { 
  Navbar,
} from '../components';

export default function Playlist() {

  return(
    <div className="home" style={{ backgroundColor: 'rgba(14, 18, 66, 1)' }}>
      <Navbar />
      <div className="d-flex row justify-content-start mt-5" style={{marginTop: '50px' }}> 
        <div className="col m-3">
          <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
          <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
          <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
          <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col m-3">
        <iframe src="https://open.spotify.com/embed/playlist/51irJ6bD2uDRvvz6hgHea7" width="200" height="280" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  )
}