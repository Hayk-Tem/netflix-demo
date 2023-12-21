import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Row from './components/Row/Row'

import requests from './request'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchTrending} title="Top Trending" />
    </div>
  )
}

export default App
