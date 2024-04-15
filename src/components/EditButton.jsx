import "../styles/EditButton.css";
import '../assets/edit.svg';

export function EditButton({ onClick, hidden }) {
  return (
    <div hidden={hidden}>
      <button className="edit" onClick={onClick}>
        <img src="../src/assets/edit.svg" alt="" />
      </button>
    </div>
  );
}
