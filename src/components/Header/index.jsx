import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Tabs, Tab } from "@material-ui/core"
import { useSpring, useTrail, animated, config } from "react-spring"
import { GlobalContext } from "../../pages"
import "./header.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
}))

const Header = () => {
  const classes = useStyles()
  const { value, refIndex, setRefIndex, backgroundIsLoaded } = useContext(
    GlobalContext
  )
  const fade = useSpring({
    opacity: backgroundIsLoaded ? 1 : 0,
    display: backgroundIsLoaded ? "inline-flex" : "none",
    config: refIndex === 0 ? config.molasses : { duration: 300 },
  })

  const options = ["Home", "Portfolio", "About", "Contact"]

  const [trail, set, stop] = useTrail(options.length, () => ({
    transform: "scale(0.9, 0.9)",
    display: "none",
    opacity: 0,
  }))
  set({
    transform: backgroundIsLoaded ? "scale(1, 1)" : "scale(0.9,0.9)",
    display: backgroundIsLoaded ? "inline-flex" : "none",
    opacity: backgroundIsLoaded ? 1 : 0,
    config: refIndex === 0 ? { duration: 1100 } : { duration: 400 },
  })
  stop()

  return (
    <header id="headerWithEdging">
      <div className={classes.root}>
        <AppBar position="fixed" className="headerBody">
          <div id="headerBackground" />
          <animated.div>
            <Tabs value={value} aria-label="simple tabs">
              {trail.map((fade, index) => {
                console.log(options)
                return (
                  <animated.div style={fade}>
                    <Tab
                      key={options[index]}
                      label={options[index]}
                      onClick={() => {
                        setRefIndex(index)
                      }}
                    />
                  </animated.div>
                )
              })}
            </Tabs>
          </animated.div>
        </AppBar>
      </div>
    </header>
  )
}

export default Header
