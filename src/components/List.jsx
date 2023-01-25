import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard'
import { useNavigate } from 'react-router-dom';

const List = () => {

    const [pokemon, setPokemon] = useState("")
    const trainer = useSelector(state => state.trainer)
    const [pokeList, setPokeList] = useState([])
    const navigate = useNavigate()
    // const [currentPage, setCurrentPage] = useState(1)
    // const [postsPerPage] = useState(20)
    // const indexOfLastPost = currentPage * postsPerPage
    // const indexOfFirstPost =  indexOfLastPost - postsPerPage
    // const currentPosts = pokeList.slice(indexOfFirstPost, indexOfLastPost)
    // const pageNumbers = []
    const [types, setTypes] = useState([])

    // for (let i=1; i <= Math.ceil(pokeList.length / postsPerPage); i++) {
    //     pageNumbers.push(i)
    // }

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279')
        .then(res => setPokeList(res.data.results))
    }, [])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypes(res.data.results))
    }, [])

    const goTo = () => {
        navigate(`/pokedex/${pokemon}`)
    }

    const filterType = e => {
        axios.get(e.target.value)
        .then(res => setPokeList(res.data.pokemon)) 
    }

    return (
    <div className='pokedex-page'>
        <header>
            <p>{trainer}, here you can find your favorite pokemon!</p>
        </header>
        <div>
            <input  type="text" 
                    placeholder='pokemon'
                    value={pokemon}
                    onChange={e => setPokemon(e.target.value)}/>
            <button onClick={() => goTo()}>
                <img src="" alt="Search" />
            </button>
        </div>
        <div>
            <select onChange={filterType} name="" id="">
                {types.map(type => (<option key={type.name} value={type.url}> {type.name} </option>))}
            </select>
        </div>
        <div className='poke-card-container'>
            {pokeList.map( pokemon => (
                <PokemonCard    key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                pk={pokemon}/>
            ))}
        </div>
        {/* <ul className='pagination'>
            {pageNumbers.map( number => (
                <li key={number}>
                    <a onClick={() => setCurrentPage(number)} href="!#">{number}</a>
                </li>
            ))}
        </ul> */}
    </div>
    );
};

export default List;