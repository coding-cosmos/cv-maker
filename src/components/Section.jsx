import "../styles/Section.css";
import { AddButton } from "./AddButton";
import { EditButton } from "./EditButton";
import { SaveButton } from "./SaveButton";

export function Section({
  legend,
  children,
  onSave,
  onEdit,
  toggleState,
  showAddButton,
}) {
  return (
    <section>
      <fieldset>
        <legend>{legend}</legend>
        {children}

        <div className="icon">
          {showAddButton ? (
            <AddButton onClick={onEdit} hidden={!toggleState} />
          ) : (
            <EditButton onClick={onEdit} hidden={!toggleState} />
          )}
          <SaveButton onClick={onSave} hidden={toggleState} />
        </div>
        
      </fieldset>
    </section>
  );
}
