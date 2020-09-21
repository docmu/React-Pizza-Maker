import React from "react";
//NOT USED DELETE
function ButtonGroup(props) {
  const buttonWidth = {
    width: "600px",
  };
  return (
    <div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("red");
          }}
        >
          Red Sauce
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("white");
          }}
        >
          White Sauce
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("cheese");
          }}
        >
          Cheese
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-danger btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("pepperoni");
          }}
        >
          Pepperoni
        </button>
      </div>

      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-secondary btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("mushroom");
          }}
        >
          Mushroom
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-warning btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("sausage");
          }}
        >
          Sausage
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3 mb-3">
        <button
          className="btn btn-success btn-block"
          style={buttonWidth}
          onClick={() => {
            props.eventHandler("bell peppers");
          }}
        >
          Bell Peppers
        </button>
      </div>
    </div>
  );
}
export default ButtonGroup;
