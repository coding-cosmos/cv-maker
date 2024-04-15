export function AddButton({ onClick, hidden }) {
  return (
    <div hidden={hidden}>
      <button className="edit" onClick={onClick}>
        +
      </button>
    </div>
  );
}
