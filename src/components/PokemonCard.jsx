import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({pk}) => {

    const [eachPk, setEachPk] = useState('')
    const [type, setType] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${pk.url}`)
        .then(res => {setEachPk(res.data), setType(res.data.types[0].type.name)})
    }, [])

    return (
        <div onClick={() => navigate(`/pokedex/${eachPk.name}`)} className={`pokemon-card ${type}`}>
            <h4>
            {eachPk.name}
            </h4>
            <img src={eachPk.sprites?.front_default} alt="Sorry, we don't have an image for that yet." />
        </div>
    );
};

export default PokemonCard;