import { CompanyDetails } from "./components/CompanyDetails";
import { EducationDetails } from "./components/EducationDetails";
import { Form } from "./components/Form";
import { GeneralDetails } from "./components/GeneralDetails";
import { NavBar } from "./components/NavBar";
import "./styles/App.css";
import { Resume } from "./components/Resume";
import { useState } from "react";

function App() {
  const [ generalData, setGeneralData ] = useState('');
  const [ educationData, setEducationData ] = useState('');
  const [ experienceData, setExperienceData ] = useState([]);
  return (
    <>
      <NavBar />
      {console.log("rendered"+educationData)}
      <div className="main">
        <Form>
          <h2>CV Application</h2>
          <GeneralDetails updateGeneralData={setGeneralData} />
          <EducationDetails updateEducationData={setEducationData} />
          <CompanyDetails updateCompanyData={setExperienceData} />
        </Form>
        <Resume
          generalData={generalData}
          educationData={educationData}
          companyData={experienceData}
        />
      </div>
    </>
  );
}

export default App;
