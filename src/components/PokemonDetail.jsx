import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

    const { name } =useParams()
    const [pokemon, setPokemon] = useState()
    const [types, setTypes] = useState([])
    const [abilities, setAbilities] = useState([])

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {setPokemon(res.data), setTypes(res.data.types), setAbilities(res.data.abilities)})
    }, [])

    return (
        <div className={`${types[0]?.type.name} poke-detail`}>
            <h3>
                {pokemon?.name}
            </h3>
            <img src={pokemon?.sprites.other.dream_world.front_default} alt={pokemon?.sprites.front_default} />
            <div className='taip'>
                <h3>
                    Types
                </h3>
                <ul className='type-container'>
                    {types.map( type => (
                        <p key={type.type.name} className={`${type.type.name} types`}>{type.type.name}</p>
                    ))}
                </ul>
            </div>
            <div className='taip'>
                <h3>
                    Abilities
                </h3>
                <div className='type-container'>
                    {abilities.map( ability => (
                        <p>
                            {ability.ability.name}
                        </p>
                    ))}
                </div>
            </div>
            <ul className='stats-card'>
                <li>
                    <span>HP</span><progress value={pokemon?.stats[0].base_stat} max="255"></progress>
                </li>
                <li>
                    <span>Atk</span><progress value={pokemon?.stats[1].base_stat} max="255"></progress>
                </li>
                <li>
                    <span>Def</span><progress value={pokemon?.stats[2].base_stat} max="255"></progress>
                </li>
                <li>
                    <span>Sp. Atk</span><progress value={pokemon?.stats[3].base_stat} max="255"></progress>
                </li>
                <li>
                    <span>Sp. Def</span><progress value={pokemon?.stats[4].base_stat} max="255"></progress>
                </li>
                <li>
                    <span>Spd</span><progress value={pokemon?.stats[5].base_stat} max="255"></progress>
                </li>
            </ul>
        </div>
    );
};

export default PokemonDetail;