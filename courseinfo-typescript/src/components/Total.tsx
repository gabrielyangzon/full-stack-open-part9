import React from "react";

interface Props {
  count: number;
}
const Total = (props: Props) => {
  const { count } = props;

  return (
    <div>
      Total exercise : <b>{count}</b>
    </div>
  );
};

export default Total;
