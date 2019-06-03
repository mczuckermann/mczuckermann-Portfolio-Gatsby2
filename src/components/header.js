import React from "react"
import classNames from "classnames"
import navigator from "./../navigator"
import { Navbar, Nav } from "react-bootstrap"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const Header = props => {
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
        <Navbar
          aria-controls="basic-navbar-nav navbar-toggler"
          style={{ paddingRight: "15px" }}
        >
          <Button
            id="navbar-toggler-button"
            style={{ display: none }}
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
      </Navbar>
      <div className="container-full headerEdging" />
    </div>
  )
}

export default Header
