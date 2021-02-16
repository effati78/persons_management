import { React } from "react";
import { Alert, Badge } from "react-bootstrap";

import SimpleContext from "../../context/SimpleContext";
import Persons from '../person/Persons';

const Header = () => {
  
  // let badgeStyle = null;
  // if (personsLength <= 1) badgeStyle = "danger";
  // else if (personsLength == 2) badgeStyle = "warning";
  // else if (personsLength >= 3) badgeStyle = "success";

  return (
    <SimpleContext.Consumer>
      {(context) => (
        <div>
          <Alert variant="primary">
            <h2>{context.state.title}</h2>
          </Alert>

          <Alert variant="light">
            <h6>
              تعداد اشخاص ثبت شده{" "}
              <Badge pill className="pt-1">
                {context.state.persons.length}
              </Badge>{" "}
              نفر می باشد
            </h6>
          </Alert>
        </div>
      )}
    </SimpleContext.Consumer>
  );
};

export default Header;
