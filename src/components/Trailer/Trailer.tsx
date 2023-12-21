import { useEffect, useRef } from "react";

import Youtube from "react-youtube";
import { ITrailerProps } from "../../ts/interfaces/interfaces";
import { IoIosClose } from "react-icons/io";

import "./Trailer.scss"

const opts = {
  height: '490',
  width: '60%',
  playerVars: {
    autoplay: 1
  }
}

export default function Trailer({videoId, changeVideo}: ITrailerProps) {
  const videoRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const onWheel = () => {
      const el = videoRef?.current;
      
      if(el) {
        scrollTo({
          top: el.offsetTop + parseInt(opts.height) / 2,
          behavior: "smooth"
        })
      }
    }
    onWheel()
  }, [])
  
  return (
    <>
      <div className="video_box" ref={videoRef}>
        <span onClick={() => changeVideo({id: videoId, playStatus: false })}>
          <IoIosClose />
        </span>
        <Youtube
          className="player"
          videoId={videoId}
          opts={opts}
          onEnd={() => changeVideo({id: videoId, playStatus: false })}
        />
      </div>
    </>
  )
}
