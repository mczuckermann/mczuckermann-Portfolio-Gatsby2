import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { useSpring, animated, config } from "react-spring"
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

const Header = () => {
  const classes = useStyles()
  const { value, refIndex, setRefIndex, backgroundIsLoaded } = useContext(
    GlobalContext
  )
  const fade = useSpring({
    opacity: backgroundIsLoaded ? 1 : 0,
    config: refIndex === 0 ? config.molasses : { duration: 300 },
  })
  const options = ["Home", "Portfolio", "About", "Contact"]

  return (
    <animated.header style={fade} id="headerWithEdging">
      <div className={classes.root}>
        <AppBar position="sticky" className="headerBody">
          <Tabs value={value} aria-label="simple tabs">
            {options.map((option, index) => (
              <Tab
                key={option}
                label={option}
                {...a11yProps(index)}
                onClick={() => {
                  setRefIndex(index)
                }}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </animated.header>
  )
}

export default Header
