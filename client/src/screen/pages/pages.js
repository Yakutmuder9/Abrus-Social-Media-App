import { useState } from 'react';
import './page.css'

const Pages = () => {
  const [show, setShow] = useState(false)
 


  return (
    <div className='page-container'>
      <div className="courses-container">
        <div className="course">
          <div className="course-preview">
            <h6>Course</h6>
            <h2>JavaScript Fundamentals</h2>
            <a href="#">View all chapters <i className="fas fa-chevron-right"></i></a>
          </div>
          <div className="course-info">
            <div className="progress-container">
              <div className="progress"></div>
              <span className="progress-text">
                6/9 Challenges
              </span>
            </div>
            <h6>Chapter 4</h6>
            <h2>Callbacks & Closures</h2>
            <button className="btn">Continue</button>
          </div>
        </div>
      </div>


      <div className={show? "d-none": "social-panel-container visible"}>
        <div className="social-panel">
          <p>Contact <i className="fa fa-heart"></i> us
            <a target="_blank" href="https://florin-pop.com">Media</a></p>
          <button className="close-btn" onClick={()=>setShow(!show)}><i className="fa fa-times"></i></button>
          <h4>Get in touch on</h4>
          <ul>
            <li>
              <a href="https://www.patreon.com/florinpop17" target="_blank">
                <i className="fa fa-telegram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/florinpop1705" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/florinpop17" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/florinpop17" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/florinpop17" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="floating-btn"  onClick={()=> setShow(!show)}>
        Get in Touch
      </button> 

      <div className="floating-text">
        Part of <a href="https://florin-pop.com/blog/2019/09/100-days-100-projects" target="_blank">#100Days100Projects</a>
      </div>
    </div>
  )
}

export default Pages
