import React, { useEffect, useState } from 'react'
import genres from '../assets/JSON/chartData.json'
import { useHistory, useParams } from 'react-router-dom'
import { BubbleChartChildren, Navbar, Loading } from '../components'
import '../App.css'

const Children = () => {
  const { children } = useParams()
  const [childrenData, setChildrenData] = useState([])
  const history = useHistory()

  useEffect(() => {
    genres.map(genre => {
      if (genre._id === children) {
        setChildrenData(genre.children)
      }
    })
  }, [children])

  const handleBack = () => {
    history.goBack()
  }
  

  if (childrenData.length > 0) {
    return (
      <div className="children">
        <Navbar/>
      <div>
        <button className="btn-success" onClick={handleBack}> go back </button>
      </div>
        <div>
          <div style={{ marginTop: "5vh" }}>
            <BubbleChartChildren data={childrenData}/>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar/>
        {/* <Loading/> */}
      </div>
    )
  }
}

export default Children
