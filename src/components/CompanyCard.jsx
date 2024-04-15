import "../styles/CompanyCard.css";
import { Card } from "./Card";

export function CompanyCard({ company, position, time, responsibilities,onEdit }) {
  return (
    <>
      <Card onEdit={onEdit}>
        <div className="title">{company}</div>
        <div className="detail">
          <div>
            <span className="headings">Position:</span> {position}
          </div>
          <div>
            <span className="headings">Time: </span>
            {time}
          </div>
        </div>

        <div className="resp">
          <span className="headings">
            Description: <br />
          </span>
          {responsibilities}
        </div>
      </Card>
    </>
  );
}
