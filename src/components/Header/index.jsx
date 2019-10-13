import React from "react"
import classNames from "classnames"
import { Navbar, Nav } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import HamburgerButton from "../../images/hamburgerButton.png"
import { useSpring, animated } from "react-spring"
import NavButton from "../NavButton"
import "./header.css"

const Header = ({ scrollHeight, onClickFunctions }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const {
    scrollToHomeSection,
    scrollToAboutSection,
    scrollToProjectSection,
    scrollToContactSection,
  } = onClickFunctions

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleCloseAndHome() {
    handleClose()
    scrollToHomeSection()
  }
  function handleCloseAndAbout() {
    handleClose()
    scrollToAboutSection()
  }
  function handleCloseAndPortfolio() {
    handleClose()
    scrollToProjectSection()
  }
  function handleCloseAndContact() {
    handleClose()
    scrollToContactSection()
  }

  return (
    <animated.div style={fade} id="headerWithEdging">
      <div className="container-full headerEdging" />
      <Navbar
        className={classNames("header", {
          changedHeaderColor: scrollHeight !== 0,
        })}
        bg="light"
        expand="lg"
      >
        <Navbar.Brand
          id="nameNav"
          className={classNames("rounded", {
            nameNavMoved: scrollHeight !== 0,
          })}
        >
          Matt Zuckermann
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ float: "right" }} className="mr-auto">
            <NavButton
              name="Home"
              scrollFunction={scrollToHomeSection}
              scrollHeight={scrollHeight}
            />
            <NavButton
              name="About"
              scrollFunction={scrollToAboutSection}
              scrollHeight={scrollHeight}
            />
            <NavButton
              name="Portfolio"
              scrollFunction={scrollToProjectSection}
              scrollHeight={scrollHeight}
            />
            <NavButton
              name="Contact"
              scrollFunction={scrollToContactSection}
              scrollHeight={scrollHeight}
            />
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
            <img
              src={HamburgerButton}
              alt="menu button"
              style={{
                width: "25px",
                height: "22px",
              }}
            />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={anchorEl}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseAndHome}>Home</MenuItem>
            <MenuItem onClick={handleCloseAndAbout}>About</MenuItem>
            <MenuItem onClick={handleCloseAndPortfolio}>Portfolio</MenuItem>
            <MenuItem onClick={handleCloseAndContact}>Contact</MenuItem>
          </Menu>
        </Navbar>
      </Navbar>
      <div className="container-full headerEdging" />
    </animated.div>
  )
}

export default Header
