import { React } from "react";
import { Button } from "react-bootstrap";
import SimpleContext from "../../context/SimpleContext";

const EnterName = () => {
  return (
    <SimpleContext.Consumer>
        {context=>(
            <div>
      <form
        className="form-inline justify-content-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="input-group">
          <input
            type="text"
            placeholder="اسم بهم بده"
            className="form-control"
            onChange={context.setPerson}
            value={context.state.personName}
            autoFocus
            maxLength="25"
          />
          <div className="input-group-prepend">
            <Button
              variant="success"
              size="sm"
              type="submit"
              className="fa fa-plus-square"
              onClick={context.handleNewPerson}
            ></Button>
          </div>
        </div>
      </form>
    </div>
        )}
    </SimpleContext.Consumer>
  );
}

export default EnterName;