export function Education({ college,degree,date}) {
    return (<>
        <div className="education">
            <div className="dateOfCompletion">{ date}</div>
            <div className="ed-container">
                <div className="collegeName">
                    { college}
                </div>
                <div className="degree">{ degree}</div>
            </div>
        </div>
    </>);
}  