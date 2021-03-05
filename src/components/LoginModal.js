import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserData, getDataUser } from '../store/actions/userAction'
import spotify from '../assets/spotify.svg'

export default function LoginModal() {
  const dispatch = useDispatch()
  const [ formUser, setFormUser ] = useState({
    validator: '',
    password: ''
  })

  function handleLoginSpotify(e){
    e.preventDefault()
    window.location.replace('http://54.179.61.252:6300/loginSpotify')
  }
  
  function handleChange (e) {
    const {name, value} = e.target
    const user = { ...formUser, [name]: value }
    setFormUser(user)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setUserData(formUser))
    dispatch(getDataUser())
  }

  return (
      <>
    <div className="modal-dialog">
      <div className="modal-content"  style={{ borderRadius: '8px' }}>
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Login</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
          <form className="form-floating" >
            <div className=" form-floating " >
              <input className="form-control" type="text" id="email-username-login" name="validator" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/><br></br>
              <label className="form-label" for="email-username-login" >Email/Username</label>
            </div>
            <div className="form-floating">
              <input className="form-control" id="password-login" type="password" name="password" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
              <label className="form-label" for="password-login" >Password</label>
            </div>
          </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: '#303960', border: 'none'  }} onClick={handleSubmit}>Login</button><br></br>
         </div>
         <div className="mt-2">
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none', color: 'black'  }} onClick={handleLoginSpotify} ><img src={spotify} alt="spotify icon" style={{ width: '25px' }}></img> Continue with Spotify</button><br></br>
         </div>
         <div className="mt-2">
          <p>don't have an account? <a href="#"  data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#registerModal">Register</a></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}