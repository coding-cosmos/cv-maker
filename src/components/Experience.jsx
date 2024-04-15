import '../styles/experience.css';

export function Experience({ company, position, responsibilities, time }) {
    return (<>
        <div className="experience">
            <div className="time">{ time} Years</div>
            <div className="exp-container">
                <div className="company">{company }</div>
                <div className="position">{ position}</div>
                <div className="responsibilities">{ responsibilities}</div>
            </div>
        </div>
    </>);
}