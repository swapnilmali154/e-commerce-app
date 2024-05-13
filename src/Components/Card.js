import React from "react";
import { Panel } from "rsuite";

const Card = (props) => {
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: "inline-block", width: 240 }}
    >
      <img src={props.imageUrl} alt="" height="240" />
      <Panel header={props.name}>
        <p>
          <small>
            {props.description}
          </small>
        </p>
        <p><strong>₹ {props.price} </strong></p>
      </Panel>
    </Panel>
  );
};

export default Card;
