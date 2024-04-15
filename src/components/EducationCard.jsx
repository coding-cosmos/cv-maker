import { Card } from "./Card";
export function EducationCard({ date, degree, college, onEdit }) {
  return (
    <>
      <Card onEdit={onEdit}>
        <div className="degree">
          <span className="headings">Course : </span>
          {degree}
        </div>
        <div className="college">
          <span className="headings">College: </span>
          {college}
        </div>
        <div className="date">
          <span className="headings">Date Of Completion: </span>
          {date}
        </div>
      </Card>
    </>
  );
}
