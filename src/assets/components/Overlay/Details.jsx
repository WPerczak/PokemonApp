import React from "react";
import Modal from "./Modal";

const Details = props => {

    const PokemonInfo = props.PokemonInfo;

    const PokeAbilities = PokemonInfo.abilities.map((abi, index) => (
        <li key={index}>
            {abi.ability.name[0].toUpperCase() + abi.ability.name.substring(1)}
        </li>
    ));
    const PokeStats = PokemonInfo.stats.map((stat, index) => (
        <li key={index}>
            {stat.stat.name}: {stat.base_stat}
        </li>
    ));
    const PokeTypes = PokemonInfo.types.map((type, index) => (
        <li key={index}>
            {type.type.name}
        </li>
    ))


    return (
        <Modal onClose={props.onHideDetails}>
            <div className="details">
                <h1>{PokemonInfo.name}</h1>
                <div className="line"></div>
                <div className="images">
                    <img src={PokemonInfo.sprites.front_default}></img>
                    <img src={PokemonInfo.sprites.back_default}></img>
                    <img src={PokemonInfo.sprites.front_shiny}></img>
                    <img src={PokemonInfo.sprites.back_shiny}></img>
                </div>
                <div className="line"></div>
                <div className="Pokemoninfo">
                    <div className="destription">
                        <h2>Type</h2>
                        {PokeTypes}
                    </div>
                    <div className="profile">
                        <h2>Profile</h2>
                        <li>Height: {PokemonInfo.height}m</li>
                        <li>Weight: {PokemonInfo.weight}kg</li>
                    </div>
                    <div className="abilities">
                        <h2>Abilities</h2>
                        {PokeAbilities}
                    </div>
                    <div className="stats">
                        <h2>Stats</h2>
                        {PokeStats}
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default Details;