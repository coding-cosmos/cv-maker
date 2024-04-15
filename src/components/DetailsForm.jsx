import { Input } from "./Input";

export function DetailsForm({ inputFields, details, setDetails, values }) {
  return (
    <>
      {inputFields.map((input, index) => {
        const value = values ? values[index] : "";
        return (
          <Input
            key={index}
            id={input.id}
            label={input.label}
            type={input.type}
            placeholder={input.placeholder}
            onChange={(e) =>
              setDetails({ ...details, [input.id]: e.target.value })
            }
            value={value}
          />
        );
      })}
    </>
  );
}
