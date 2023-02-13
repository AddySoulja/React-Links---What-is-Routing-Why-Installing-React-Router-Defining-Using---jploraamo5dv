import React from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
        <Link to="/topics/rendering">
          <h2 id="rendering">Rendering</h2>
        </Link>
        </li>
        <li>
        <Link to="/topics/components">
          <h2 id="components">Components</h2>
        </Link>
        </li>
      </ul>
      <hr />
      <Link to="/">
      <button id="topics-back-button">Back</button>
      </Link>
    </div>
  );
};

export default Topics;
