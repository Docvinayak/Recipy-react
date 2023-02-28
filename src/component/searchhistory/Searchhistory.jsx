import React from "react";

function SearchHistory(props) {
  return (
    <>
      {console.log(props.history)}
      <div>
        <ul>
          {props.history.map((term, index) => (
            <li key={index}>
              <button onClick={() => props.onClick(term)}>{term}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchHistory;
