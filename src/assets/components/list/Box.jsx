import React from "react";
import './Box.css'

const Box = props => {
        const poketypes = props.info.types.map((type, index) => (
                <span key={index}>{type.type.name} </span>
        ));
        // console.log(poketypes);
    return (
            <div className="box" onClick={props.onShow}            >
                    <h3>{props.info.name}</h3>
                    <img src={props.info.sprites.front_default}></img>
                    <p>{poketypes}</p>
            </div>
    );
};

export default Box;