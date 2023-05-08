import { animated, useSpring } from "@react-spring/web"
import React from "react"

type AnchorLinkProps = {
  href: React.RefObject<HTMLDivElement>
  children: React.ReactNode | undefined
}

const AnchorLink: React.FC<AnchorLinkProps> = ({ href, children }) => {
  const handleClick = () => {
    href?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const [spring, set] = useSpring(() => ({
    opacity: 1,
    y: 0,
    config: { tension: 120, friction: 14, mass: 1 },
  }))

  const handleScroll = () => {
    set.start({
      opacity: window.scrollY > 100 ? 0 : 1,
      // y: window.scrollY > 100 ? 20 : 0,
    })
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <animated.a
        style={spring}
        onClick={handleClick}
        className="link link--contacts"
      >
        {children}
      </animated.a>
    </>
  )
}

export default AnchorLink
