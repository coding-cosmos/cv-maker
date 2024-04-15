import "../styles/card.css";
import { EditButton } from "./EditButton";

export function Card({ children,onEdit }) {
  return (
    <>
      <div className="card">
        <div className="children"> {children}</div>
        
        <EditButton  onClick={onEdit}/>
      </div>
    </>
  );
}
