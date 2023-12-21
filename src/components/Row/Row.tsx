import { useEffect, useRef, useState } from "react";
import axios from "../../axios";
import movieTrailer from "movie-trailer";

import { IRowAxiosData, IRowMovies, IRowProps, IVideo } from "../../ts/interfaces/interfaces";

import Trailer from "../Trailer/Trailer";
import "./Row.scss"

const base_url = 'https://image.tmdb.org/t/p/w500/';

export default function Row({ fetchUrl, title }: IRowProps) {
  const [movies, setMovies] = useState<Array<IRowMovies>>([])
  const [video, setVideo] = useState<IVideo>({ id: '', playStatus: false })

  const changeVideo = (obj: IVideo) => setVideo(obj)
  const elRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const el = elRef?.current as HTMLDivElement
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 2,
        behavior: 'smooth'
      })
    }

    window.addEventListener("wheel", onWheel)
    return () => window.removeEventListener("wheel", onWheel)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios<IRowAxiosData>(fetchUrl)
      setMovies(response.data.results)
    }
    fetchData()
  }, [fetchUrl])

  const findTrailer = (movie: IRowMovies) => {
    if (video.id) {
      changeVideo({ ...video, playStatus: false })
    }
    movieTrailer(movie.original_title || movie.title || '')
      .then((url: string) => {
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          const id = urlParams.get('v')!
          changeVideo({ id: id, playStatus: true });
        }
      })
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters" ref={elRef}>
        {
          movies.map(movie => {
            return (
              <img
                className="row__poster"
                key={movie.id}
                src={`${base_url}${movie?.poster_path}`}
                onClick={() => {
                  findTrailer(movie)
                }}
                alt={movie?.title}
              />
            )
          })
        }
      </div>
      {
        (video?.playStatus && video?.id)
          ? (
            <Trailer videoId={video.id} changeVideo={changeVideo} />
          )
          : null
      }
    </div>
  )
}
