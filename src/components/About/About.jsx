import React from 'react'
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.About}>
  <div className="row mb-5 mt-5">
    <div className="col text-center">
      <h1>About Me</h1>
    </div>
    <div className="col">
      <p className="mb-3 fs-5">
      I'm farouk, a 21-year-old back-end developer. I'm great with HTML, CSS,JavaScript And learning Node.js and how to make databases with
       MongoDB. My goal is to become a MERN stack developer, which means using MongoDB,
       Express.js, React, and Node.js all together.
              Balancing my time is important to me, so I handle my 
              studies, work, and personal projects well. I'm excited to keep learning and creating awesome stuff on the web!
      </p>
      <button type="button" className="btn btn-primary p-2">Download CV</button>
    </div>
  </div>
  </div>
  )
}

export default About
