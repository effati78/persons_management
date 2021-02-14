import React from "react";

const Person = ({ fullname, deleted, changed }) => {
  return (
    <div className="card bg-secondary text-white w-25 mx-auto d-block mt-3 mb-3 p-3">
      <p className="text-center">{`${fullname}`}</p>
      <div className="input-group justify-content-center">
        <input
          className="form-control"
          type="text"
          placeholder={fullname}
          onChange={changed}
        />
        <div className="input-group-append">
          <button
            title="کلیک کنید تا حذف شود"
            className="fa fa-trash btn btn-lg btn-danger"
            onClick={deleted}
          />
        </div>
      </div>
    </div>
  );
};

export default Person;
