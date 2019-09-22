import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = function() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
