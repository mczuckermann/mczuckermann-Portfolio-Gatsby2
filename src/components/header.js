import React from "react"
import classNames from "classnames"
import navigator from "./../navigator"
import { Navbar, Nav } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuList from "@material-ui/core/MenuList"

const Header = props => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  function handleToggle() {
    setOpen(prevOpen => !prevOpen)
  }

  function handleClose2(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
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
    <div id="headerWithEdging">
      <div className="container-full headerEdging" />
      <Navbar
        className={classNames("header", {
          changedHeaderColor: props.state.scrollHeight !== 0,
        })}
        bg="light"
        expand="md"
      >
        <Navbar.Brand
          id="nameNav"
          className={classNames("rounded", {
            nameNavMoved: props.state.scrollHeight !== 0,
          })}
        >
          Matt Zuckermann
        </Navbar.Brand>
        <Navbar
          aria-controls="basic-navbar-nav navbar-toggler"
          style={{ paddingRight: "15px" }}
        >
          <Button
            id="navbar-toggler-button"
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <button
              type="button"
              className="tcon tcon-menu--xbutterfly"
              aria-label="toggle menu"
            >
              <span class="tcon-menu__lines" aria-hidden="true" />
              <span class="tcon-visuallyhidden">toggle menu</span>
            </button>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleCloseAndAbout}>About</MenuItem>
            <MenuItem onClick={handleCloseAndProjects}>Portfolio</MenuItem>
            <MenuItem onClick={handleCloseAndContact}>Contact</MenuItem>
          </Menu>
        </Navbar>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ float: "right" }} className="mr-auto">
            <Nav.Link
              className={classNames("navSubObjects", "rounded", {
                navSubObjectsHover: !navigator(),
                navSubObjectsMoved: props.state.scrollHeight !== 0,
                navSubObjectsMovedHover: props.state.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickAboutSection}
              value="this.aboutSection"
            >
              About
            </Nav.Link>
            <Nav.Link
              className={classNames("navSubObjects", "rounded", {
                navSubObjectsHover: !navigator(),
                navSubObjectsMoved: props.state.scrollHeight !== 0,
                navSubObjectsMovedHover: props.state.scrollHeight !== 0,
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
                navSubObjectsMoved: props.state.scrollHeight !== 0,
                navSubObjectsMovedHover: props.state.scrollHeight !== 0,
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
}

export default Header
