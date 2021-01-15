import React from "react"
import ReactPlayer from "react-player"

const Embed = ({link}) => {
    return(
        <ReactPlayer url={link}/>
    )
}

export default Embed