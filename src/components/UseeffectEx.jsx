import { useEffect } from "react";
import React from "react";

const UseeffectEx = () => {
  return (
    <div>
      useEffect example
      <h1>If we write single dependecy array,it will run once,otherwise it runs everytime.</h1>
      <p>{`useEffect(()=>{},[])`}</p>
      <div></div>
    </div>
  );
};

export default UseeffectEx;
