import React from "react";
import { Typography } from "../../components";

const SelfPost = (props) => {
  return (
    <div>
      <Typography variant="body">{props.content}</Typography>

      <Typography variant="subtle">{props.time}</Typography>
    </div>
  );
};

export default SelfPost;
