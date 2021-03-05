import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BubbleChartSongs, Navbar, Loading, Errors } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSongs } from '../store/actions/songsAction'
import '../App.css'

const Songs = () => {

  const { genre } = useParams()
  const dispatch = useDispatch()
  const { songs } = useSelector(state => state.songsReducer)

  useEffect(() => {
    dispatch(fetchSongs(genre))
  }, [genre])

  if (songs.loading) {
    return (
      <div>
        <Navbar/>
        <Loading/>
      </div>
    )
  } else if (songs.error) {
    return (
      <div>
        <Navbar/>
        <Errors/>
      </div>
    )
  } else {
    return (
      <div style={{ marginTop: "10vh" }}>
        <Navbar />
        <div>
          <div>
            <BubbleChartSongs data={songs.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Songs
