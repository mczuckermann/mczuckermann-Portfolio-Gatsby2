import React, { useContext } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { useSpring, animated } from "react-spring"
import { GlobalContext } from "../../pages"
import "./header.css"

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const Header = ({ scrollHeight }) => {
  const classes = useStyles()
  const { value, scrollToSection, allRefs } = useContext(GlobalContext)
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  const options = ["Home", "Portfolio", "About", "Contact"]

  return (
    <animated.div style={fade} id="headerWithEdging">
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classNames("headerBody", {
            changedHeaderColor: scrollHeight !== 0,
          })}
        >
          <Tabs value={value} aria-label="simple tabs">
            {options.map((option, index) => (
              <Tab
                label={option}
                {...a11yProps(index)}
                onClick={() => scrollToSection(allRefs[index])}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </animated.div>
  )
}

export default Header
