import { useState } from "react";
import { Section } from "./Section";
import { EducationCard } from "./EducationCard";
import { DetailsForm } from "./DetailsForm";

export function EducationDetails({ updateEducationData }) {
  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const educationObj = { date: "", degree: "", college: "" };
  const [data, setData] = useState([]);
  const [education, setEducation] = useState(educationObj);
  const [editIndex, setEditIndex] = useState(0);

  const inputFields = [
    {
      id: "college",
      label: "College",
      type: "text",
      placeholder: "Enter College Name",
    },
    {
      id: "degree",
      label: "Degree",
      type: "text",
      placeholder: "Enter Degree Name",
    },
    {
      id: "date",
      label: "Date",
      type: "date",
      placeholder: "Enter Degree Name",
    },
  ];

  function handleSave(e) {
    e.preventDefault();
    if (JSON.stringify(education) === JSON.stringify(educationObj)) return;

    let tempData = data;
    if (isEditing) {
      tempData[editIndex] = education;
      setIsEditing(false);
    } else {
      tempData.push(education);
    }

    let newtempData = [...tempData];
    setData(tempData);
    setIsAdding(!isAdding);
    console.log(data);
    updateEducationData(newtempData);
  }

  function handleAdding(e) {
    e.preventDefault();
    setIsAdding(!isAdding);
  }

  function handleEdit(education, index) {
    console.log(education, index);
    setEditIndex(index);
    setIsEditing(true);
    setIsAdding(true);
    setEducation(education);
  }

  return (
    <Section
      legend="Education Details"
      onSave={handleSave}
      onEdit={handleAdding}
      toggleState={!isAdding}
      showAddButton={true}
    >
      {isEditing ? (
        <>
          <DetailsForm
            inputFields={inputFields}
            details={education}
            setDetails={setEducation}
            values={[education.college, education.degree, education.date]}
          />
        </>
      ) : isAdding ? (
        <>
          <DetailsForm
            inputFields={inputFields}
            details={education}
            setDetails={setEducation}
          />
        </>
      ) : (
        data.map((education, index) => (
          <EducationCard
            onEdit={(e) => {
              e.preventDefault();
              handleEdit(education, index);
            }}
            key={index}
            date={education.date}
            degree={education.degree}
            college={education.college}
          />
        ))
      )}
    </Section>
  );
}
