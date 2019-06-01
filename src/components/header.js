import React from "react"
import classNames from "classnames"
import navigator from "./../navigator"
import { Navbar, Nav } from "react-bootstrap"

const Header = props => (
  <div id="headerWithEdging">
    <div className="container-full headerEdging" />
    <Navbar
      className={classNames("header", {
        changedHeaderColor: window.scrollY !== 0,
      })}
      bg="light"
      expand="md"
    >
      <Navbar.Brand
        id="nameNav"
        className={classNames("rounded", {
          nameNavMoved: window.scrollY !== 0,
        })}
      >
        Matt Zuckermann
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav navbar-toggler"
        style={{ paddingRight: "15px" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ float: "right" }} className="mr-auto">
          <Nav.Link
            className={classNames("navSubObjects", "rounded", {
              navSubObjectsHover: !navigator(),
              navSubObjectsMoved: window.scrollY !== 0,
              navSubObjectsMovedHover: window.scrollY !== 0,
            })}
            style={{ color: "lightgrey" }}
            tabIndex="0"
            onClick={props.onClickAboutSection}
          >
            About
          </Nav.Link>
          <Nav.Link
            className={classNames("navSubObjects", "rounded", {
              navSubObjectsHover: !navigator(),
              navSubObjectsMoved: window.scrollY !== 0,
              navSubObjectsMovedHover: window.scrollY !== 0,
            })}
            style={{ color: "lightgrey" }}
            tabIndex="0"
            onClick={props.onClickProjectSection}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            className={classNames("navSubObjects", "rounded", {
              navSubObjectsHover: !navigator(),
              navSubObjectsMoved: window.scrollY !== 0,
              navSubObjectsMovedHover: window.scrollY !== 0,
            })}
            style={{ color: "lightgrey" }}
            tabIndex="0"
            onClick={props.onClickContactSection}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="container-full headerEdging" />
  </div>
)

export default Header
