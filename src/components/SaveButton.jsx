import '../styles/SaveButton.css';

export function SaveButton({ onClick, hidden }) {
    
    return (
        <>
            <button className='save' onClick={onClick} hidden={hidden}>Save</button>
        </>
    );
}
