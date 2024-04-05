import React from 'react'
import { Fade } from 'react-reveal'
import './Footer.css'
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          © Thapanan Kulab. All rights reserved.
        </p>
      </Fade>
    </div>
  )
}
