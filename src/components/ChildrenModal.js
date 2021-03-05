import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBubbleChildren } from '../store/actions/songsAction'
import { addFavorite } from '../store/actions/favoriteAction'
import { toast, ToastContainer } from 'react-toastify'


const ChildrenModal = ({ isOpen, setIsOpen, data}) => {
  const history = useHistory()
  const audioRef = useRef()
  const dispatch = useDispatch()
  const [getGenre, setGetGenre] = useState('')
  const [previewSong, setPreviewSong] = useState('')
  const { bubbleChildren } = useSelector(state => state.songsReducer)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (bubbleChildren.data.length > 0) {
      setPreviewSong(bubbleChildren.data[0].preview_url)
    }
  }, [bubbleChildren])

  useEffect(() => {
    if (getGenre) {
      dispatch(fetchBubbleChildren(getGenre))
    }
  }, [getGenre])

  useEffect(() => {
    if (previewSong) {
      setIsPlaying(true)
      audioRef.current.play()
    } else {
      setPreviewSong('')
    }
  }, [previewSong])
  
  const handleClickPlay = () => {
    if (!previewSong) {
      setGetGenre(data._id)
    } else {
      setIsPlaying(true)
      audioRef.current.play()
    }
  }

  const handleClickArtists = () => {
    history.push(`/artists/${data._id}`)
  }

  const handleClickSongs = () => {
    history.push(`/songs/${data._id}`)
  }
  // just added
  const handleClickFavorite = () => {
    dispatch(addFavorite(data._id))
  }

  const handleHide = () => {
    setIsOpen(false)
  }

  const handleClickPause = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }
  
  // just added
  return (
    <>
      { previewSong ? <audio ref={audioRef} src={previewSong} /> : '' }
      <Modal show={isOpen} onHide={handleHide} >
      <Modal.Header style={{ backgroundColor: 'rgba(69, 182, 144, 1)' }} >
        <Modal.Title style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', fontFamily: 'Roboto' }}>{data._id}</Modal.Title>
      </Modal.Header>
      <Modal.Body  >
        <div className="d-flex col justify-content-around">
      
          <label></label>
          { isPlaying 
            ? <div className=" action-button mt-1">
              <button className="button" onClick={handleClickPause} href="" style={{ color: 'white', backgroundColor: 'rgba(69, 182, 144, 1)', fontFamily: 'Roboto', borderRadius: '100%', width: '80px', height: '80px', border: 'white', fontSize: '40px', marginLeft: '-30px' }} ><i className="bi-pause-fill"></i></button>
            </div>
            
            : <div className="action-button mt-1" >
                <button className="button" onClick={handleClickPlay} href="" style={{ color: 'white', backgroundColor: 'rgba(69, 182, 144, 1)', fontFamily: 'Roboto', borderRadius: '100%', width: '80px', height: '80px', border: 'white', fontSize: '40px', marginLeft: '-30px'  }} ><i className="bi-play-fill"></i></button>
            </div>
           }
       
        <div className="action-button mt-1" data-aos="slide-left" data-aos-delay="200">
          <label></label>
          <Button className="button" onClick={handleClickArtists} style={{ color: 'white', backgroundColor: '#303960', fontFamily: 'Roboto', marginLeft: '6px', borderRadius: '100%', width: '80px', height: '80px', border: 'white' }}>Artists</Button>
        </div>
        <div className="action-button mt-1" data-aos="slide-left" data-aos-delay="400">
          <label></label>
          <Button className="button" onClick={handleClickSongs} style={{ color: 'white', backgroundColor: '#303960', fontFamily: 'Roboto', marginLeft: '6px', borderRadius: '100%', width: '80px', height: '80px', border: 'white' }}>Songs</Button>
        </div>
        <div className="action-button mt-1" data-aos="slide-left" data-aos-delay="600">
          <label></label>
          <Button className="button" onClick={handleClickFavorite} style={{ color: 'white', backgroundColor: '#aa2b1d', fontFamily: 'Roboto', marginLeft: '6px', borderRadius: '100%', width: '80px', height: '80px', border: 'white', fontSize: '25px' }}><i className="bi-heart-fill"></i></Button>
        </div>
        </div>
      </Modal.Body>
      </Modal>
    </>
  )
}

export default ChildrenModal
