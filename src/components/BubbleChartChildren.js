import React, { useState, useEffect } from 'react'
import ReactBubbleChart from 'react-bubble-chart'
import ChildrenModal from './ChildrenModal'

const BubbleChartChildren = ({ data }) => {
  
  const [childrenData, setChildrenData] = useState({
    key: 'start children',
    data
  })
 
  let colorLegend = [
    { color: "#45b690", textColor: "#ffffff"},
    { color: "#307f65", textColor: "#ffffff"},
    { color: "#6770be", textColor: "#ffffff"},
    { color: "#484e85", textColor: "#ffffff"},
    { color: "#4467be", textColor: "#ffffff"},
    { color: "#304885", textColor: "#ffffff"},
    { color: "#433f97", textColor: "#ffffff"},
    { color: "#2f2c6a", textColor: "#ffffff"}
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [childData, setChildData] = useState({})
  
  const handleClick = (input) => {
    setChildData({
      _id: input._id
    })
    setIsOpen(true)
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-column" style={{marginTop: "64vh", marginLeft: "3vh"}}>
        <span className="fw-lighter" style={{ fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap"}}>
          most popular
        </span>
        <span className="fw-lighter" style={{ marginTop: "17.5vh", fontSize: "0.7em", color: "#e2e2e1", whiteSpace: "nowrap"}}>
          least popular
        </span>
      </div>
    <div className="container-fluid" style={{ marginLeft: "-6vh"}}>
    { isOpen ? <ChildrenModal setIsOpen={setIsOpen} isOpen={isOpen} data={childData}/> : ''}
      <ReactBubbleChart 
      {...data}
      className="chart__bubble"
      key={childrenData.key}
      data={childrenData.data}
      onClick={handleClick}
      colorLegend={colorLegend}
      legend={true}
      fontSizeFactor={0.3}
      />
    </div>
    </div>
  )
}

export default BubbleChartChildren
