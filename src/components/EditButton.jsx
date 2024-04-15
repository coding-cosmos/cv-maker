import "../styles/EditButton.css";

export function EditButton({ onClick, hidden }) {
  return (
    <div hidden={hidden}>
      <button className="edit" onClick={onClick}>
        <img src="assets/edit.svg" alt="" />
      </button>
    </div>
  );
}
