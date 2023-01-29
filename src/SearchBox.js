import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center">
      <form className="d-flex justify-content-evenly">
        <div className="form-floating w-50">
          <input
            type="email"
            className="form-control border border-4"
            id="floatingInput"
            placeholder="enter name"
            onChange={searchChange}
          />
          <label htmlFor="floatingInput">Enter Name</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
