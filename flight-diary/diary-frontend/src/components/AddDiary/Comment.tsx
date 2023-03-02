import { TextField } from "@mui/material";
import React from "react";

interface Props {
  comment: string | undefined;
  onChangeComment: (value: any, name: string) => void;
}

const Comment = (props: Props) => {
  const { comment, onChangeComment } = props;

  return (
    <TextField
      id="outlined-basic"
      label="Comment"
      variant="outlined"
      value={comment}
      name="comment"
      onChange={(e) => onChangeComment(e.target.value, e.target.name)}
    />
  );
};

export default Comment;
