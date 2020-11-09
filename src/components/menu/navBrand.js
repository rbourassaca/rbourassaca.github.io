import React from "react"
import { Link } from "gatsby"

function NavBrand(props){
    return(
        <Link to={props.url} className="navbar-brand">{props.title}</Link> 
    )
}

export default NavBrand