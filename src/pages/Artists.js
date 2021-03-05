import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BubbleChartArtists, Navbar, Loading, Errors } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchArtists } from '../store/actions/songsAction'
import '../App.css'

const Artists = () => {
  const { genre } = useParams()
  const dispatch = useDispatch()
  const { artists } = useSelector(state => state.songsReducer)


  useEffect(() => {
    dispatch(fetchArtists(genre))
  }, [genre])

  if (artists.loading) {
    return (
      <div>
        <Navbar/>
        <Loading/>
      </div>
    )
  } else if (artists.error) {
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
          <div className="">
            <BubbleChartArtists data={artists.data}/>
          </div>
        </div>
      </div>
    )
  }

}

export default Artists
