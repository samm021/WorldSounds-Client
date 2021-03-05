import React, { useState, useRef, useEffect } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BubbleChartSongs = ({ data }) => {
  const [songsChart, setSongsChart] = useState({
    key: 'songs',
    data
  })
  const [previewSong, setPreviewSong] = useState('')
  const audioRef = useRef()
  const toastOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
    }
  const [info, setInfo] = useState({})

  var colorLegend = [
    { color: "#3125b1", textColor: "#ffffff"},
    { color: "#5a51c1", textColor: "#ffffff"},
    { color: "#5c2d99", textColor: "#ffffff"},
    { color: "#7d57ad", textColor: "#ffffff"},
    { color: "#5847b8", textColor: "#ffffff"},
    { color: "#796cc6", textColor: "#ffffff"},
    { color: "#b233a7", textColor: "#ffffff"},
    { color: "#c15cb9", textColor: "#ffffff"}
  ]

  // STOP GAP
  const handleClick = input => {
    setPreviewSong('')
    setInfo(input)
  }

  useEffect(() => {
    if (info) {
      setPreviewSong(info.preview_url)
    }
  }, [info])

  useEffect(() => {
    if (previewSong) {
      audioRef.current.play()
      toast.info(`📻 ${info.artist} - ${info._id}`, toastOptions)
    }
  }, [previewSong])

  return (
    <div className="d-flex" style={{ marginTop: "10vh" }}>
      <div className="d-flex flex-column" style={{marginTop: "64vh", marginLeft: "3vh"}}>
        <span className="fw-lighter" style={{ fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap"}}>
          most popular
        </span>
        <span className="fw-lighter" style={{ marginTop: "17.5vh", fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap"}}>
          least popular
        </span>
      </div>
    <div className="container-fluid" style={{ marginLeft: "-6vh"}}>
        { previewSong ? <audio ref={audioRef} src={previewSong} /> : '' }
        <ReactBubbleChart
          {...data}
          className="chart__bubble"
          key={songsChart.key}
          data={songsChart.data}
          onClick={handleClick}
          colorLegend={colorLegend}
          legend={true}
          fontSizeFactor={0.2}
        />
    </div>
    <ToastContainer/>
    </div>
  )
}

export default BubbleChartSongs
