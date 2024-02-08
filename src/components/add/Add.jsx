import React from "react";
import "./add.scss";

function Add(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="adduser">
      <div className="modal">
        <div className="close" onClick={() => props.setOpen(false)}>
          X
        </div>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={() => handleSubmit()}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((item) => (
              <div className="item">
                <label>{item.headerName}</label>
                <input type={item.type} placeholder={item.headerName} />
              </div>
            ))}
        </form>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Add;
