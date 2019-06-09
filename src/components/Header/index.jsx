import React from "react"
import "./menu.css"
import deskPhoto from "../../images/deskPhoto.jpg"
import { makeStyles } from "@material-ui/styles"
import { useSpring, animated } from "react-spring"
import { Navbar, Nav } from "react-bootstrap"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import classNames from "classnames"
import navigator from "../../js/navigator"

const useStyles = makeStyles({
  headerWithEdging: {
    position: "sticky",
    top: "0px",
    zIndex: 10,
  },
  headerEdging: {
    backgroundColor: "#151515",
    height: "3px",
    width: "100%",
  },
  header: {
    backgroundImage: `url(${deskPhoto})`,
    backgroundSize: "cover",
    fontFamily: "Abel, sans-serif",
    transition: "all 1s ease !important",
    "@media screen and (max-width: 1333px)": {
      backgroundSize: "1333px",
    },
  },
  headerMoved: {
    background: `linear-gradient(to right, rgb(191, 194, 196, 0), rgb(78, 67, 92)), linear-gradient(to bottom, rgba(68, 133, 123, 0.708), rgb(94, 109, 86, 0.1))`,
    filter: "drop-shadow(16px 16px 20px black)",
    transition: "all 1s ease !important",
    opacity: 0.98,
  },
  navSubObjects: {
    padding: "2px",
    fontSize: "24px",
    transition: "all 1s ease",
    "@media screen and (max-width: 767px)": {
      fontSize: "18px",
    },
  },
  navSubObjectsMoved: {
    color: "black !important",
    transition: "all 1s ease",
  },
  navSubObjectsHover: {
    "&:hover": {
      color: "gray !important",
      transition: "all 0.1s ease",
    },
  },
  navSubObjectsMovedHover: {
    "&:hover": {
      color: "white !important",
      transition: "all 0.1s ease",
    },
  },
  navbarTogglerButton: {
    "@media screen and (max-width: 991px)": {
      display: "block !important",
    },
  },
  nameNav: {
    fontSize: "30px !important",
    fontFamily: "Abel, sans-serif",
    padding: "2px 6px",
    backgroundColor: "white",
    color: "black",
    transition: "all 1s ease",
  },
  nameNavMoved: {
    backgroundColor: "black !important",
    color: "white !important",
    transition: "all 1s ease",
  },
})

const Header = props => {
  const classes = useStyles()

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
    <animated.div style={fade} className={classes.headerWithEdging}>
      <div className={`${classes.headerEdging} "container-full"`} />
      <Navbar
        className={classNames(classes.header, {
          [classes.headerMoved]: props.scrollHeight !== 0,
        })}
        bg="light"
        expand="lg"
      >
        <Navbar.Brand
          className={classNames(`${classes.nameNav} rounded`, {
            [classes.nameNavMoved]: props.scrollHeight !== 0,
          })}
        >
          Matt Zuckermann
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ float: "right" }} className="mr-auto">
            <Nav.Link
              className={classNames(`${classes.navSubObjects} rounded`, {
                [classes.navSubObjectsHover]: !navigator(),
                [classes.navSubObjectsMoved]: props.scrollHeight !== 0,
                [classes.navSubObjectsMovedHover]: props.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickHomeSection}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={classNames(`${classes.navSubObjects} rounded`, {
                [classes.navSubObjectsHover]: !navigator(),
                [classes.navSubObjectsMoved]: props.scrollHeight !== 0,
                [classes.navSubObjectsMovedHover]: props.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickAboutSection}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={classNames(`${classes.navSubObjects} rounded`, {
                [classes.navSubObjectsHover]: !navigator(),
                [classes.navSubObjectsMoved]: props.scrollHeight !== 0,
                [classes.navSubObjectsMovedHover]: props.scrollHeight !== 0,
              })}
              style={{ color: "lightgrey" }}
              tabIndex="0"
              onClick={props.onClickProjectSection}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className={classNames(`${classes.navSubObjects} rounded`, {
                [classes.navSubObjectsHover]: !navigator(),
                [classes.navSubObjectsMoved]: props.scrollHeight !== 0,
                [classes.navSubObjectsMovedHover]: props.scrollHeight !== 0,
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
            className={classes.navbarTogglerButton}
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
      <div className={`${classes.headerEdging} container-full`} />
    </animated.div>
  )
}

export default Header
