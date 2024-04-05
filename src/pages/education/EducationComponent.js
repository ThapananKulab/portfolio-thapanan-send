import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Educations from '../../containers/education/Educations'
import Certifications from '../../containers/certifications/Certifications'
import EducationImg from './EducationImg'
import { Fade } from 'react-reveal'
import './EducationComponent.css'

function Education(props) {
  const theme = props.theme
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                About my activities My major and all certifications.and skills
                that I received from my teaching institute to knowledge.
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  )
}

export default Education
