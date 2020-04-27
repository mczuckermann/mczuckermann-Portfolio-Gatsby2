import React, { useState } from "react"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { useSpring, animated } from "react-spring"
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

const Header = ({ scrollHeight, onClickFunctions }) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  const options = ["Home", "Portfolio", "About", "Contact"]

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <animated.div style={fade} id="headerWithEdging">
      <div className={classes.root}>
        <AppBar
          position="static"
          className={classNames("headerBody", {
            changedHeaderColor: scrollHeight !== 0,
          })}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            {options.map((option, index) => (
              <Tab
                label={option}
                {...a11yProps(index)}
                onClick={() => onClickFunctions[index]()}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </animated.div>
  )
}

export default Header
