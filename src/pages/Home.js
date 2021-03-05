import React, { useEffect, useState } from 'react'
import '../App.css'
import { 
  Navbar,
  BubbleChartParent,
  Loading
} from '../components';
import "../../node_modules/react-bubble-chart/src/style.css";
import genres from '../assets/JSON/chartData.json'
import _ from 'lodash'
import { useHistory, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

export default function Home() {
  const [parentGenre, setParentGenre] = useState([])
  const history = useHistory()
  const { access_token, refresh_token, access_token_local } = useParams()

  useEffect(() => {
    const copyGenre = _.cloneDeep(genres)
    copyGenre.map(family => {
      family.children.map(child => child._id = '')
    })
    setParentGenre(copyGenre)
  }, [genres])

  useEffect(() => {
    if (access_token) {
      localStorage.setItem('access_token', access_token)
    }
    if(refresh_token){
      localStorage.setItem('refresh_token', refresh_token)
      toast.success('Login Spotify Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      })
      history.push('/home')
    }
    if(access_token_local){
      localStorage.setItem('access_token_local', access_token_local)
    }
  }, [localStorage.access_token_local])

  if (parentGenre.length === 0) {
    return (
      <div className="home">
      <Navbar />
      {/* <Loading/> */}
      </div>
    )
  } else {
    return(
      <div style={{ marginTop: "10vh" }}>
        <Navbar />
        <div>
          <div>
            <BubbleChartParent data={parentGenre}/>
          </div>
        </div>
        <ToastContainer/>
      </div>
    )
  }
}