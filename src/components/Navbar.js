import React, { useEffect, useState } from 'react'
import '../App.css'
import {
  LoginModal,
  RegisterModal,
} from './index'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  searchingArtist } from '../store/actions/artistAction'
import { setLoginStatus } from '../store/actions/userAction'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../assets/WS_logo.png'


export default function Navbar() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [display, setDisplay] = useState(false)
  const [ displayNav, setDisplayNav ] = useState(false)
  const [inputSearch, setInputSearch] = useState('')
  const { searchArtist } = useSelector(state => state.artistReducer)
  const { isLogin } = useSelector(state => state.userReducer)

  useEffect(() => {
    if (!inputSearch) { 
      setDisplay(false) 
    } else {
      let name = encodeURIComponent(inputSearch) || null
      const url = `https://api.spotify.com/v1/search?q=${name}&type=artist`
      dispatch(searchingArtist(url))
    }
  }, [inputSearch])
      
      
    function handleInputClick(e) {
      setDisplay(!display)
      setInputSearch(e.target.value)
    }

    function handleChange(e) {
      const { value } = e.target
      setInputSearch(value)
    }

    function handleLogout(e) {
      e.preventDefault()
      localStorage.removeItem('access_token')
      localStorage.removeItem('access_token_local')
      localStorage.removeItem('refresh_token')
      dispatch(setLoginStatus(false))
      history.push('/home')
      toast.success('Logout Success!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      if(localStorage.access_token){
        const url = 'https://www.spotify.com/logout/'                                                                                                                                                                                                                                                                               
        const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')                                                                                                
        setTimeout(() => spotifyLogoutWindow.close(), 2000)
      }
    }

    const handleBack = () => {
      history.goBack()
    }

  return(
    <>
      <nav className="App-navbar d-flex justify-content-between fixed-top shadow" style={{ backgroundColor: '#303960', color: 'white', fontFamily: 'Exo' }} >
        {/* LOGO */}
        <div className="my-2 mx-4">
          <div role="button" onClick={handleBack}><img src={logo} alt="worldsounds" style={{ width: '6em' }} ></img></div>
        </div>
        {/* NAVIGATION HOME ARTISTS PLAYLISTS */}
        {/* <div className="navigation  ">
          <ul className="col d-flex" style={{ listStyleType: 'none', marginRight: '1em' }}>
            <li className="nav-item">
              <Link className="nav-link" to="/home" className="me-2">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artists" className="me-2">Artists</Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/profile" className="me-2">profile</Link>
            </li>
          </ul>
        </div> */}
        {/* NAVIGATION LOGIN REGISTER SEARCH */}
        <div className="d-flex mt-2">
          {/* <div className="d-flex">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/home">home</Link></li>
                <li><Link className="dropdown-item" to="/artists">artists</Link></li>
                <li><Link className="dropdown-item" to="/profile">profile</Link></li>
              </ul>
            </li>
          </div> */}
          <div className="login">
            <ul className="col d-flex mt-2">
              <li className="mt-1 me-3">
                <Link to="/home">home</Link>
              </li>
              <li className="mt-1 me-3">
                <Link to="/artists">artists</Link>
              </li>
              {
                (localStorage.access_token_local || localStorage.access_token)
                &&
                <li className="mt-1 me-3">
                  <Link to="/profile">profile</Link>
                </li>
              }
            {
              (localStorage.access_token_local || localStorage.access_token || localStorage.refresh_token)
              ?
              <li  className="mt-1 me-3">
                <a href="#"  onClick={handleLogout}>logout</a>
              </li>
              :
              <div className="col d-flex">
                <li className="mt-1 me-4" style={{ marginRight: '10px', textDecoration: 'none' }}>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">login</a>
                </li>
              </div>
            }
              <li className="me-3">
                <a href="" data-bs-toggle="collapse" onClick={() => {setDisplayNav(!displayNav)}}><i className="bi-search" style={{ fontSize: '18px' }}></i></a>
              </li>
              {
                (displayNav)
                &&
                <li className="me-3">
              <input type="text" className="form-control" placeholder="search" autoComplete="off" data-aos="slide-left" onChange={handleChange} onClick={handleInputClick} style={{ borderRadius: '20px' }} />
              </li>
              }
            </ul>
          </div>
        </div>

      </nav>
      {
          (display)
          &&
          (searchArtist.length !==0)
          &&
          <div className="card end-0 overflow-scroll" style={{ marginRight: '18px', marginTop: '-3vh', width: '223px', position: 'fixed', zIndex: '1' }}>
            <ul className="mt-3" style={{ textAlign: 'left' }}>
           {
             searchArtist.map(artist => {
               let link = `/artist/${artist.id}`
               return <li style={{ listStyle: 'none' }}><a className="" href={link} style={{ textDecoration: 'none', color: "black" }} >{artist.name}</a></li> 
              }) 
            }
            </ul>
          </div>

          }

      {/* LOGIN MODAL */}
      <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <LoginModal />
      </div>
      {/* REGISTER MODAL */}
      <div className="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <RegisterModal />
      </div>
      <ToastContainer/>  
    </>
  )
}