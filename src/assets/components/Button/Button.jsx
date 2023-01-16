import React from "react";
import "./Button.css";
function ButtonLoadMore(props) {
  return (
    <div className="list-button">
      <button className="button" onClick={props.onLoadMore}>
        Load more pokemons
      </button>
    </div>
  );
}

export default ButtonLoadMore;
