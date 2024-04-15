import "../styles/Resume.css";
import { Education } from "./Education.jsx";
import { Experience } from "./Experience.jsx";

export function Resume({
  generalData,
  educationData,
  companyData
}) {
  
  return (
    <div className="container">
      <div className="resume">
        <div className="general">
          <div className="name">
            <h1>{generalData.name}</h1>
          </div>
          <div className="email">
            <div className="email-icon">
              <img src="assets/gmail.svg" alt="" />
            </div>
            {generalData.email}
          </div>
          <div className="phone">
            <div className="phone-icon">
              <img src="assets/phone.png" alt="" />
            </div>
            +91 {generalData.phone}
          </div>
        </div>
        <div className="ed-section">
          <h2>Education</h2>
          { 
            educationData !== ''
            ? educationData.map((education, index) => {
             return <Education key={index } college={education.college} degree={education.degree } date={education.date}/>
              })
            : ""}
          { console.log(educationData)}
        </div>
        <div className="exp-section">
          <h2>Experience</h2>
          {companyData.length != 0
            ? companyData.map((experience, index) => {
                return <Experience key={index} company={experience.company} position={experience.position} time={experience.time} responsibilities={experience.responsibilities}/>;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
