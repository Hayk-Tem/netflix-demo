import { useState, useEffect } from 'react';
import axios from '../../axios';

import requests from '../../request';
import { IMovie, IResults } from '../../ts/interfaces/interfaces';

import "./Banner.scss"

const base_url = 'https://image.tmdb.org/t/p/original/';

export default function Banner() {
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios<IResults>(requests.fetchNetflixOriginals);
      const randomMovie = Math.floor(Math.random() * response.data.results.length)
      setMovie(response.data.results[randomMovie])
    }
    fetchData()
  }, [])

  const truncute = (str: string | undefined, len: number): string | undefined => {
    if (str) {
      return str.length >= len ? str?.slice(0, len) : str
    }
  }

  return (
    <header className='banner' style={{
      backgroundImage: movie ? `url("${base_url}/${movie?.backdrop_path}")` : ""
    }}>
      <div className="banner__context">
        <h1 className='banner__title'>
          {movie?.name || movie?.original_name || "..."}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h2 className='banner__description'>
          {truncute(movie?.overview, 150) || "..."}
        </h2>
      </div>
      <div className='banner__fadeBottom'></div>
    </header>

  )
}
