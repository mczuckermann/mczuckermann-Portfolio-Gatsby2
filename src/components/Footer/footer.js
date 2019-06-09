import PropTypes from "prop-types"
import React, { useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import arrow from "../../images/white-arrow.png"
import styled from "styled-components"

const Footer = props => {
  const FooterFormat = styled.div`
    padding: 60px 0px;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  `
  const NoDecoration = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: none;
    }
  `
  const FooterNoLinkDiv = styled.div`
    color: grey;
    margin-top: 50px;
  `

  const FooterNoLinkSpan = styled.span`
    color: grey;
  `
  const ContactMe = styled.div`
    font-size: 40px;
    font-weight: bold;
  `
  const ArrowButton = styled.img`
    transform: rotate(180deg);
    &:hover {
      color: #40394a;
    }
  `
  const Footer = styled.footer`
    font-size: 15px;
    padding: 3px 0;
    text-align: center;
  `

  const [on, toggle] = useState(false)
  const fadeIn = useSpring({
    opacity: on ? 1 : 0,
    config: config.mollasses,
  })

  return (
    <FooterFormat ref={props.refcontact} className="container-full">
      <Waypoint
        bottomOffset="32%"
        onEnter={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fadeIn}>
        <ContactMe>Contact Me</ContactMe>
        <div>Let's work together!</div>
        <br />
        <div>
          <FooterNoLinkSpan>+1-217-722-4952</FooterNoLinkSpan> ||{" "}
          <NoDecoration href="mailto: mczuckermann@gmail.com">
            mczuckermann@gmail.com
          </NoDecoration>{" "}
          ||{" "}
          <NoDecoration
            href="https://twitter.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            @mczuckermann
          </NoDecoration>
        </div>
        <div>
          <NoDecoration
            href="https://www.linkedin.com/in/mczuckermann/"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </NoDecoration>{" "}
          ||{" "}
          <NoDecoration
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_R%C3%A9sum%C3%A9.pdf#zoom=115"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </NoDecoration>{" "}
          ||{" "}
          <NoDecoration
            href="https://github.com/mczuckermann"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </NoDecoration>{" "}
        </div>
        <div>
          <NoDecoration
            href="https://mczuckermann.herokuapp.com/docs/Matt-Zuckermann_Business-Card.pdf#zoom=325"
            rel="noopener noreferrer"
            target="_blank"
          >
            Business Card
          </NoDecoration>
        </div>
      </animated.div>
      <Footer className="container-full">
        <FooterNoLinkDiv className="col-12">
          <animated.div style={fadeIn}>
            <ArrowButton
              onClick={props.onClick}
              tabIndex="0"
              src={arrow}
              alt="arrow"
            />
            <div id="backToTopText">Back To Top</div>
          </animated.div>
          <br />
          <div> © 2019 mczuckermann. All Rights Reserved</div>
        </FooterNoLinkDiv>
      </Footer>
    </FooterFormat>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
