import "../styles/Input.css";

export function Input({
  id,
  type,
  label,
  placeholder,
  disabled,
  onChange,
  value,
}) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        defaultValue={value}
      />
    </div>
  );
}
