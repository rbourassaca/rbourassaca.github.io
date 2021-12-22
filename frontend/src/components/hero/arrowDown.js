import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"
import { useState } from "react"

const ArrowDown = () => {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { transform: "translateY(-20px)" },
    from: { transform: "translateY(0px)" },
    reset: true,
    reverse: flip,
    config: config.gentle,
    onRest: () => set(!flip),
  })
  return (
    <animated.span className={"arrow"} style={props}>
      <FontAwesomeIcon icon={faArrowDown} />
    </animated.span>
  )
}
export default ArrowDown
