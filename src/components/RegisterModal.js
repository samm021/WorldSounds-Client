import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register, setFormUserRegister } from '../store/actions/userAction'
import spotify from '../assets/spotify.svg'

export default function RegisterModal() {

  const dispatch = useDispatch()
  const [formUserRegister, setFormUserRegister] = useState({
    email: '',
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value } = e.target
    const newUser = {...formUserRegister, [name]: value}
    setFormUserRegister(newUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formUserRegister))
  }

  function handleLoginSpotify(e){
    e.preventDefault()
    window.location.replace('http://54.179.61.252:6300/loginSpotify')
  }

  return (
      <>
      <div className="modal-dialog">
      <div className="modal-content" style={{ borderRadius: '8px' }}>
        <div className="modal-header" style={{ backgroundColor: '#303960' }}>
          <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'white', fontFamily: 'Exo' }}>Register</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: 'white' }}></button>
        </div>
        <div className="modal-body" style={{fontFamily: 'Roboto' }}>
        {/* Register FORM */}
        <form onSubmit={handleSubmit}>
          <div className="form-floating mt-2">
            <input className="form-control" type="text"  name="email" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
            <label className="form-label">Email</label>
          </div>
          <div className="form-floating mt-2">
            <input className="form-control" type="text" name="username" style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
            <label className="form-label">Username</label>
          </div>
          <div className="form-floating mt-2">
            <input className="form-control" type="password" name="password"  style={{ borderRadius: '10px', borderColor: 'rgba(69, 182, 144, 1)'}} onChange={handleChange}/>
            <label className="form-label">Password</label>
          </div>
        </form>
        </div>
        <div className="d-flex row">
         <div>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" style={{ borderRadius: '20px', width: '300px', backgroundColor: '#303960', border: 'none'  }} onClick={handleSubmit}>Register</button><br></br>
         </div>
         <div className="mt-2">
          <button type="button" className="btn btn-primary" style={{ borderRadius: '20px', width: '300px', backgroundColor: 'rgba(69, 182, 144, 1)', border: 'none', color: 'black' }}  onClick={handleLoginSpotify}><img src={spotify} alt="spotify icon" style={{ width: '25px' }} /> Continue with Spotify</button><br></br>
         </div>
         <div className="mt-2">
          <p>have an account? <a href="#"  data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#loginModal" >Login</a></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}