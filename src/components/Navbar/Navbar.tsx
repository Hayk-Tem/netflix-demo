import { useEffect, useState } from "react"
import "./Navbar.scss"

export default function Navbar() {

  const [isBlack, setIsBlack] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsBlack(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`nav ${isBlack ? 'nav__black' : ''}`}>
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix logo" />
    </div>
  )
}
