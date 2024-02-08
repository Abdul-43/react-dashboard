import React from "react";
import Single from "../../components/single/Single";
import { singleUser } from "../../data";

function User() {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
}

export default User;
