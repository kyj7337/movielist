import React from "react";
import "./index.css";
const index = (props) => {
  console.log(props);
  const { data } = props;
  return (
    <div>
      <div> {data.title}</div>
      <img src={data.background_image_original} />
      <img src={data.large_cover_image} />
    </div>
  );
};

export default index;
