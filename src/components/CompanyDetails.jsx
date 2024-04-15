import { DetailsForm } from "./DetailsForm";
import { Section } from "./Section";
import { CompanyCard } from "./CompanyCard";
import { useState } from "react";

export function CompanyDetails({
  updateCompanyData
}) {
  const [isAdding, setIsAdding] = useState(true);
 const [isEditing, setIsEditing] = useState(false);
  const experienceObj = {
    company: "",
    position: "",
    responsibilities: "",
    time: "",
  };
  const [data, setData] = useState([]);
  const [ experience, setExperience ] = useState(experienceObj);
  const [editIndex, setEditIndex] = useState(0);


  const inputFields = [
    {
      id: "company",
      label: "Company Name",
      type: "text",
      placeholder: "Enter Company Name",
    },
    {
      id: "position",
      label: "Position",
      type: "text",
      placeholder: "Enter Position Name",
    },
    {
      id: "responsibilities",
      label: "Responsibilities",
      type: "text",
      placeholder: "What was your key responsibility",
    },
    {
      id: "time",
      label: "Time Spent ",
      type: "number",
      placeholder: "(in yrs)",
    },
  ];

  function handleSave(e) {
    e.preventDefault();
    if (JSON.stringify(experience) === JSON.stringify(experienceObj)) return;

    let tempData = data;
   if (isEditing) {
     tempData[editIndex] = experience;
     setIsEditing(false);
   } else {
     tempData.push(experience);
   }
    setData(tempData);

    let newTempData = [ ...data ];
    setIsAdding(!isAdding);
    updateCompanyData(newTempData);
  }
  function handleAdding(e) {
    e.preventDefault();
    setIsAdding(!isAdding);
  }

   function handleEdit(experience, index) {
     console.log(experience, index);
     setEditIndex(index);
     setIsEditing(true);
     setIsAdding(true);
     setExperience(experience);
   }

  return (
    <Section
      legend="Experience"
      onSave={handleSave}
      onEdit={handleAdding}
      toggleState={!isAdding}
      showAddButton={true}
    >
      {isEditing ? (
        <DetailsForm
          inputFields={inputFields}
          details={experience}
          setDetails={setExperience}
          values={[
            experience.company,
            experience.position,
            experience.responsibilities,
            experience.time,
          ]}
        />
      ) : isAdding ? (
        <DetailsForm
          inputFields={inputFields}
          details={experience}
          setDetails={setExperience}
        />
      ) : (
        data.map((experience, index) => (
          <CompanyCard
            onEdit={(e) => {
              e.preventDefault();
              handleEdit(experience, index);
            }}
            key={index}
            company={experience.company}
            position={experience.position}
            time={experience.time}
            responsibilities={experience.responsibilities}
          />
        ))
      )}
    </Section>
  );
}
