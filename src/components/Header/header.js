import React from "react"
import classNames from "classnames"
import navigator from "../../js/navigator"
import { Navbar, Nav } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import "./header.css"

const Header = props => {
  const HeaderEdging = styled.div`
    background-color: #151515;
    height: 3px;
    width: 100%;
  `

  const [anchorEl, setAnchorEl] = React.useState(null)
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleCloseAndHome = () => {
    handleClose()
    props.onClickHomeSection()
  }
  const handleCloseAndAbout = () => {
    handleClose()
    props.onClickAboutSection()
  }
  const handleCloseAndProjects = () => {
    handleClose()
    props.onClickProjectSection()
  }
  const handleCloseAndContact = () => {
    handleClose()
    props.onClickContactSection()
  }

  return (
    <animated.div style={fade} id="headerWithEdging">
      <HeaderEdging className="container-full" />
      <Navbar
        className={classNames("header", {
          headerMoved: props.scrollHeight !== 0,
        })}
        bg="light"
        expand="lg"
      >
        <Navbar.Brand
          id="nameNav"
          className={classNames("rounded", {
            nameNavMoved: props.scrollHeight !== 0,
          })}
        >
          Matt Zuckermann
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ float: "right" }} className="mr-auto">
            <Nav.Link
              className={classNames("navSubObjects", "rounded", {
                navSubObjectsHover: !navigator(),
                navSubObjectsMoved: props.scrollHeight !== 0,
                navSubObjectsMovedHover: props.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickHomeSection}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={classNames("navSubObjects", "rounded", {
                navSubObjectsHover: !navigator(),
                navSubObjectsMoved: props.scrollHeight !== 0,
                navSubObjectsMovedHover: props.scrollHeight !== 0,
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
                navSubObjectsMoved: props.scrollHeight !== 0,
                navSubObjectsMovedHover: props.scrollHeight !== 0,
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
                navSubObjectsMoved: props.scrollHeight !== 0,
                navSubObjectsMovedHover: props.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickContactSection}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar
          aria-controls="basic-navbar-nav navbar-toggler"
          style={{ paddingRight: "15px" }}
        >
          <Button
            id="navbar-toggler-button"
            style={{ display: "none" }}
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <button
              type="button"
              className="tcon tcon-menu--xbutterfly"
              aria-label="toggle menu"
            >
              {/* <span
                className={classNames({
                  changedTogglerColor: props.scrollHeight !== 0,
                })}
              /> */}
              <span className="tcon-menu__lines" aria-hidden="true" />
              <span className="tcon-visuallyhidden">toggle menu</span>
            </button>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseAndHome}>Home</MenuItem>
            <MenuItem onClick={handleCloseAndAbout}>About</MenuItem>
            <MenuItem onClick={handleCloseAndProjects}>Portfolio</MenuItem>
            <MenuItem onClick={handleCloseAndContact}>Contact</MenuItem>
          </Menu>
        </Navbar>
      </Navbar>
      <HeaderEdging className="container-full" />
    </animated.div>
  )
}

export default Header
