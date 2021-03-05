import React, { useState, useEffect, useRef } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBubbleArtists } from '../store/actions/songsAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BubbleChartArtists = ({ data }) => {
  const [artistsChart, setArtistsChart] = useState({
    key: 'artists',
    data,
  })
  const [artistQuery, setArtistQuery] = useState('')
  const [previewSong, setPreviewSong] = useState('')
  const audioRef = useRef()
  const dispatch = useDispatch()
  const { bubbleArtists } = useSelector(state => state.songsReducer)
  const toastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: 0,
  }

  let colorLegend = [
    { color: "#008891", textColor: "#ffffff" },
    { color: "#4dacb2", textColor: "#ffffff" },
    { color: "#889c9e", textColor: "#ffffff" },
    { color: "#66b8bd", textColor: "#ffffff" },
    { color: "#69b645", textColor: "#ffffff" },
    { color: "#87c56a", textColor: "#ffffff" },
    { color: "#109b78", textColor: "#ffffff" },
    { color: "#40af93", textColor: "#ffffff" }
  ]

  const handleClick = input => {
      setPreviewSong('')
      setArtistQuery(input.uri)
  }

  // STOP GAP
  useEffect(() => {
    if (artistQuery) {
      dispatch(fetchBubbleArtists(artistQuery))
    }
  }, [artistQuery])

  useEffect(() => {
    if (bubbleArtists.data) {
      setPreviewSong(bubbleArtists.data.preview_url)
    }
  }, [bubbleArtists])

  useEffect(() => {
    if (previewSong) {
      audioRef.current.play()
      toast.success(`🎵 ${bubbleArtists.data.artists[0].name} - ${bubbleArtists.data.name}`, toastOptions)   
    }
  }, [previewSong])

  useEffect(() => {
    setPreviewSong('')
    setArtistQuery('')
  }, [])

  return (
    <div className="d-flex">
      <div className="d-flex flex-column" style={{ marginTop: "64vh", marginLeft: "3vh" }}>
        <span className="fw-lighter" style={{ fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap" }}>
          most popular
        </span>
        <span className="fw-lighter" style={{ marginTop: "17.5vh", fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap" }}>
          least popular
      </span>
      </div>
      <div className="container-fluid" style={{ marginLeft: "-6vh" }}>
        {previewSong ? <audio ref={audioRef} src={previewSong} /> : ''}
        <ReactBubbleChart
          className="chart__bubble"
          key={artistsChart.key}
          data={artistsChart.data}
          onClick={handleClick}
          colorLegend={colorLegend}
          legend={true}
          fontSizeFactor={0.3}
        />
      </div>
      <ToastContainer />
    </div>
  )
}

export default BubbleChartArtists
