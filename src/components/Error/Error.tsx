import React, { FC, useContext } from "react";
import { UserContext } from "../../App";

const Error: FC = () => {
  const { apiError } = useContext(UserContext);
  return (
    <div>
      <h1>Sorry..!!</h1>
      <h2>Some error occured while fetching data</h2>
      <p> Error Message: {apiError} </p>
    </div>
  );
};

export default Error;
