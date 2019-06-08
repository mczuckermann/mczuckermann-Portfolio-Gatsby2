import React from "react"
import classNames from "classnames"
import navigator from "../../js/navigator"
import { Navbar, Nav } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { useSpring, animated } from "react-spring"
import "./header.css"

const Header = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleCloseAndHome() {
    handleClose()
    props.onClickHomeSection()
  }
  function handleCloseAndAbout() {
    handleClose()
    props.onClickAboutSection()
  }
  function handleCloseAndProjects() {
    handleClose()
    props.onClickProjectSection()
  }
  function handleCloseAndContact() {
    handleClose()
    props.onClickContactSection()
  }

  return (
    <animated.div style={fade} id="headerWithEdging">
      <div className="container-full headerEdging" />
      <Navbar
        className={classNames("header", {
          changedHeaderColor: props.scrollHeight !== 0,
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
              <span
                className={classNames({
                  changedTogglerColor: props.scrollHeight !== 0,
                })}
              />
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
      <div className="container-full headerEdging" />
    </animated.div>
  )
}

export default Header
