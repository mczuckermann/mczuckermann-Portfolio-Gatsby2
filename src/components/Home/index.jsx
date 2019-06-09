import React from "react"
import { useSpring, animated } from "react-spring"
import background from "../../images/deskPhoto.jpg"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  homeBody: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "0px -70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "1000px",
    marginBottom: "-70px",
  },
  homeTitle: {
    position: "absolute",
    top: "40%",
    left: "50%",
    marginLeft: "-391.5px",
    color: "white",
    fontSize: "75px",
    textTransform: "uppercase",
    padding: "2.37333333vw 2.37333333vw",
    backgroundColor: "rgb(0, 0, 0, 0.8)",
    borderRadius: "2%",
    "@media screen and (max-width: 925px)": {
      top: "40%",
      left: "58%",
      fontSize: "65px",
    },
    "@media screen and (max-width: 767px)": {
      top: "40%",
      left: "85%",
      marginLeft: "-75vw",
      fontSize: "8vw",
    },
  },
})

const Home = props => {
  const classes = useStyles()
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <div>
      <animated.div
        ref={props.refhome}
        style={fade}
        className={`${classes.homeBody} container-full`}
      />
      <div className={classes.homeTitle}>Matt Zuckermann</div>
    </div>
  )
}

export default Home
