import React from 'react'
import { Fade } from 'react-reveal'
import { certifications } from '../../portfolio'
import CertificationCard from '../../components/certificationCard/CertificationCard'
import './Certifications.css'

function Certifications(props) {
  const theme = props.theme
  return (
    <div className="main" id="certs">
      <div className="certs-body-div">
        <Fade bottom duration={2000} distance="20px"></Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, index) => {
          return (
            <CertificationCard
              key={'cert-' + index}
              certificate={cert}
              theme={theme}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Certifications
