import React, { useState, useEffect } from "react";
import ReactBubbleChart from "react-bubble-chart"
import { useHistory } from "react-router-dom"

export default function BubbleChartParent( { data } ) {
  const [chartState, setChartState] = useState({
    key: 'start',
    data,
  })
  const history = useHistory()
  let colorLegend = [
    { color: "#3125b1", textColor: "#ffffff"},
    { color: "#45b690", textColor: "#ffffff"},
    { color: "#307f65", textColor: "#ffffff"},
    { color: "#6770be", textColor: "#ffffff"},
    { color: "#484e85", textColor: "#ffffff"},
    { color: "#87c56a", textColor: "#ffffff" },
    { color: "#109b78", textColor: "#ffffff" },
    { color: "#b233a7", textColor: "#ffffff"}
  ]

  const handleClick = input => {
    history.push(`/${input._id}`)
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
      <ReactBubbleChart
        {...data}
        className="chart__bubble"
        key={chartState.key}
        data={chartState.data}
        onClick={handleClick}
        legend={true}
        colorLegend={colorLegend}
        fontSizeFactor={0.3}
      />
    </div>
    
    </div>
  )
}