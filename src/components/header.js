import React from "react"

import { Link } from "gatsby"
import headerModule from "./header.module.css"

export default function Header() {
  const home = function () {
    if (typeof window !== `undefined`) {
      window.location.href = window.location.href;
    }
  }

  return (
    <div style={{display: "flow-root"}}>
      <div className={headerModule.container}>
        <Link to="/info/">Info</Link>
        <Link to="/contact/">Contact</Link>        
      </div>
      <div style={{display: "grid"}}>
        <div style={{display: "inline-flex", margin: "auto"}} >
          
            <a onClick={home} style={{display: "inline-flex", margin: "auto"}} ><h1 className={"center-text"}>Lim</h1>
            <div style={{height: "inherit", margin: "auto"}}>
              <img src="/lemon.png" style={{width: "25px", height: "25px"}}/>
              </div>    
            <h1>ncellos</h1>
            </a>
        </div>
        <p className={"center-text"}>What a world</p>
      </div>
    </div>
  )
}