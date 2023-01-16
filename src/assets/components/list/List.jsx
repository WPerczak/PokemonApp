import React, { div, useState } from "react";
import ButtonLoadMore from "../Button/Button";
import './List.css'

const List = props => {

    const Pokemons = props.Pokemonsmap;

    const [Poke, SetPoke] = useState(20);

    const MaxPokemons = Pokemons.filter((item, index) => index < Poke)

    function handleMorePokemons() {
        SetPoke(Poke + 10);
    }

    return (
        <div className="div-list">
            <div className="list">
                {MaxPokemons}
            </div>
            {Poke < Pokemons.length && (
                <ButtonLoadMore onLoadMore={handleMorePokemons} />
            )}
        </div>
    )
}

export default List;