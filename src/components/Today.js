import React from "react";
import ListRender from "./ListRender";

const Today = (props) => {
  const date = new Date();
  
  const today=props.list.filter((itm)=>{
  return (itm.date===date.toLocaleDateString("en-US")
  });
  
  return (
    <div id="today-list">
      <ListRender list={today} />
    </div>
  );
};

export default Today;
