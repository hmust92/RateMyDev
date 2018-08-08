import React from "react";
import "./UserResults.css";

const UserResults = props => (
  <ul className="list-group search-results">
    {props.results.map(result => (
      <li key={result} className="list-group-item">
        <a href={`/profile/${result._id}`}>{result.name}</a>
      </li>
    ))}
  </ul>
);

export default UserResults;

