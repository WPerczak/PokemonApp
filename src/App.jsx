import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import Form from './assets/components/Form/Form';
import Header from './assets/components/layout/Header';
import List from './assets/components/list/List';
import Details from './assets/components/Overlay/Details';
import Box from './assets/components/list/Box';

function App(props) {
  const Url = ("https://pokeapi.co/api/v2/pokemon?limit=1054");
  const [pokeData, setPokeData] = useState([]);


  const [filter, setFilter] = useState('');
  const [pokeInfo, SetPokeInfo] = useState();
  const [detailsVisible, setDetailsVisible] = useState(false);

  // const filteredPokemons = pokeData.filter((poke) => {
  //   if (poke.types > 1) {
  //     return poke.types[1].type.name.toLowerCase().startsWith(filter.toLowerCase());
  //   } else {
  //     return poke.types[0].type.name.toLowerCase().startsWith(filter.toLowerCase());
  //   }
  // });

  const filteredPokemons = pokeData.filter((poke) => {

      return (
        poke.name.toLowerCase().startsWith(filter.toLowerCase()) ||
        poke.types[0].type.name.toLowerCase().startsWith(filter.toLowerCase())
      )
  });
  console.log(pokeData);




  // return poke.name.toLowerCase().startsWith(filter.toLowerCase());

  const pokeapi = async () => {
    const res = await axios.get(Url);
    getPokemon(res.data.results);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)


      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };


  useEffect(() => {
    pokeapi();
  }, [Url]);


  const PokemonsMap = filteredPokemons.map((poke) => (
    <Box
      key={poke.id}
      info={poke}
      onShow={() => {
        showDetails(poke);
      }}
    />
  ));



  function showDetails(customName) {
    setDetailsVisible(true);
    SetPokeInfo(customName);
  }
  function hideDetails() {
    setDetailsVisible(false);
  }

  return (
    <>
      <Header />
      <Form setFilter={setFilter} />
      {detailsVisible && <Details onHideDetails={hideDetails} PokemonInfo={pokeInfo} />}
      <List Pokemonsmap={PokemonsMap} />
    </>
  );
}

export default App;
