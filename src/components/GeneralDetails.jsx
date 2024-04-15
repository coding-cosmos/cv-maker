import { Input } from "./Input";
import { Section } from "./Section";
import { useState } from "react";

export function GeneralDetails({ updateGeneralData }) {
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState({ name: "", email: "", phone: "" });

  function handleSave(e) {
    e.preventDefault();
    setDisabled(!disabled);
    updateGeneralData(data);
  }
  function handleEdit(e) {
    e.preventDefault();
    setDisabled(!disabled);
  }

  return (
    <Section
      legend="General Information"
      onSave={handleSave}
      onEdit={handleEdit}
      toggleState={disabled}
    >
      <Input
        id="name"
        type="text"
        label="Name  "
        placeholder="Enter your name here"
        disabled={disabled}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Input
        id="email"
        type="email"
        label="Email  "
        placeholder="Enter your Email here"
        disabled={disabled}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <Input
        id="phone"
        type="phone"
        label="Phone No.  "
        placeholder="Enter your Phone no. here"
        disabled={disabled}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
    </Section>
  );
}
