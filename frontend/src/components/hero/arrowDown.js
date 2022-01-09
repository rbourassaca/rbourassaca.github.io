import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"

const ArrowDown = () => {
  const props = useSpring({
    loop: { reverse: true },
    to: { transform: "translateY(-20px)" },
    from: { transform: "translateY(0px)" },
    config: config.gentle,
  })

  return (
    <animated.span className={"arrow"} style={props}>
      <FontAwesomeIcon icon={faArrowDown} />
    </animated.span>
  )
}
export default ArrowDown
