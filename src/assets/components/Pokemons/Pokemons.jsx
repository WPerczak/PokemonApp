import React from "react";

const Pokemons = [
    {
        id: 1,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol',
        info: {
            profile: {
              Height: "Height: 0.5m",
              Weight: " Weight: 4kg",
              Shape: "Shape: idk",
              Habitat: "Habitat: grassland",
            },
            abilities: {
              spell1: "lajtning bolt",
              spell2: "thunderstorm",
              spell3: "negga",
              spell3: "bomba atomowa",
            },
            stats: {
              hp: " hp: 22",
              attack: "attack: 44",
              speed: "speed: 11",
            },
          }
    },
    {
        id: 2,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus',
        info: {
            profile: {
              Height: "Height: 100m",
              Weight: " Weight: 1000kg",
              Shape: "Shape: pterodaktyl",
            },
            abilities: {
              spell1: "big maw",
              pell2: "Omewawu shindeiru",
            },
            stats: {
              hp: " hp: 10000",
              attack: "attack: 444",
              specialattack: "special-attack: 999",
              speed: "speed: 20",
            },
          }
    },
    {
        id: 3,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger',
        info: {
            profile: {
              Height: "Height: 0.7m",
              Weight: " Weight: 6.9kg",
              Shape: "Shape: quadruped",
              Habitat: "Habitat: grassland",
            },
            abilities: {
              spell1: "blaze",
              pell2: "solar - power",
            },
            stats: {
              hp: " hp: 39",
              attack: "attack: 52",
              specialattack: "special-attack: 60",
              speed: "speed: 65",
            },
          }     
    },
    {
        id: 4,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 5,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 6,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 7,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 8,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 9,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 10,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 11,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 12,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 13,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 14,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 15,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 16,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 17,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 18,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 19,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 20,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 21,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    },
    {
        id: 22,
        name: 'Pikachu',
        img: 'https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png',
        description: 'chinol'
    },
    {
        id: 23,
        name: 'Charmander',
        img: 'https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png',
        description: 'hindus'
    },
    {
        id: 24,
        name: 'Diglett',
        img: 'https://archives.bulbagarden.net/media/upload/3/31/050Diglett.png',
        description: 'nigger'
    }
];

export default Pokemons;