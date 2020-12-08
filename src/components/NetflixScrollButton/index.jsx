import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import leftArrow from "../../images/leftArrow.png"
import rightArrow from "../../images/rightArrow.png"

const useStyles = makeStyles((theme) => ({
  netflixButton: {
    position: "absolute",
    zIndex: "10",
    cursor: "pointer",
    top: "40%",
  },
  orientationLeft: {
    left: "0px",
    right: "",
  },
  orientationRight: {
    left: "",
    right: "0px",
  },
  buttonHover: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  buttonNonHover: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}))

const NetflixScrollButton = ({
  arrowRef,
  orientation,
  setScrollLeft,
  windowWidth,
}) => {
  const classes = useStyles()
  const [buttonHover, setButtonHover] = useState(false)
  const [scrollDistance, setScrollDistance] = useState(0)

  useEffect(() => {
    if (window.innerWidth > 1000) setScrollDistance(450)
    else if (window.innerWidth > 400) setScrollDistance(385)
    else setScrollDistance(300)
  }, [windowWidth])

  return (
    <div
      className={classNames([classes.netflixButton], {
        [classes.orientationLeft]: orientation === "left",
        [classes.orientationRight]: orientation === "right",
        [classes.buttonHover]: buttonHover,
        [classes.buttonNonHover]: !buttonHover,
      })}
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      onClick={() =>
        orientation === "left"
          ? setScrollLeft(arrowRef.current.scrollLeft - scrollDistance)
          : setScrollLeft(arrowRef.current.scrollLeft + scrollDistance)
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          alt="arrow-button"
          style={{
            width: "70px",
            verticalAlign: "middle",
          }}
          src={orientation === "left" ? leftArrow : rightArrow}
        ></img>
      </div>
    </div>
  )
}

export default NetflixScrollButton
