import React from "react";

const Form = ({ setInput, sort, value, type }) => {
  const style = {
    width: 50,
    marginRight: 10
  };
  return (
    <div>
      <h2>{type + " sort"}</h2>

      <form onSubmit={sort}>
        Size of array{" "}
        <input
          style={style}
          type="text"
          value={value}
          onChange={({ target }) => setInput(target.value)}
        />
        <button type="submit">Sort</button>
      </form>
    </div>
  );
};

export default Form;
