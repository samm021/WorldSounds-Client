import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  ArtistList,
  Home,
  LandingPage,
  Children,
  Artists,
  Songs,
  DetailArtist,
  ProfilePage,
} from './pages'
import ScrollToTop from './helpers/ScrollToTop'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

function App() {
  const { isLogin } = useSelector(state => state.userReducer)
  const [accessToken, setAccessToken] = useState('')

  useEffect(() => {
    if (localStorage.access_token_local){
      setAccessToken(localStorage.access_token_local)
    }
  }, [localStorage])

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/dashboard/:access_token/:access_token_local/:refresh_token" >
            <Home />
          </Route>
          <Route exact path="/profile" >
           { accessToken || isLogin  ? <ProfilePage /> : <Redirect to="/home" />}
          </Route>
          <Route exact path="/artists" >
            <ArtistList />
          </Route>
          <Route exact path="/artist/:id">
            <DetailArtist />
          </Route>
          <Route exact path="/artists/:genre" >
            <Artists />
          </Route>
          <Route exact path="/songs/:genre" >
            <Songs />
          </Route>
          <Route path="/:children">
            <Children/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
