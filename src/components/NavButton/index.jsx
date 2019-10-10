import React from "react"
import { Nav } from "react-bootstrap"
import classNames from "classnames"
import navigator from "../../js/navigator"

const NavButton = ({ name, scrollFunction, scrollHeight }) => {
  return (
    <Nav.Link
      className={classNames("navSubObjects", "rounded", {
        navSubObjectsHover: !navigator(),
        navSubObjectsMoved: scrollHeight !== 0,
        navSubObjectsMovedHover: scrollHeight !== 0,
      })}
      style={{ color: "lightgrey" }}
      tabIndex="0"
      onClick={scrollFunction}
    >
      {name}
    </Nav.Link>
  )
}

export default NavButton
