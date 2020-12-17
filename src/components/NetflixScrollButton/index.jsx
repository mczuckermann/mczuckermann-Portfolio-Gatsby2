import React, { useState, useContext } from "react"
import { GlobalContext } from "../../pages"
import { makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import leftArrow from "../../images/icons/leftArrow.png"
import rightArrow from "../../images/icons/rightArrow.png"

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

const NetflixScrollButton = ({ orientation }) => {
  const classes = useStyles()
  const { arrowRef, setScrollLeft, scrollDistance, windowWidth } = useContext(
    GlobalContext
  )
  const [buttonHover, setButtonHover] = useState(false)

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
            width: windowWidth > 650 ? "90px" : "60px",
            verticalAlign: "middle",
          }}
          src={orientation === "left" ? leftArrow : rightArrow}
        ></img>
      </div>
    </div>
  )
}

export default NetflixScrollButton