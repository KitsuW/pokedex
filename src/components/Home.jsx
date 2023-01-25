import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../store/slices/trainer.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [inputTrainer, setInputTrainer] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const homeFunction = () => {
        dispatch(setName(inputTrainer))
        navigate('/pokedex')
    }

    return (
        <div className='home'>
            <h1>
                Pokedex
            </h1>
            <p>What is your trainer name?</p>
            <div>
                <input  type="text"
                        placeholder='Trainer Name'
                        value={inputTrainer}
                        onChange={e => setInputTrainer(e.target.value)}/>
                <button onClick={homeFunction}>
                    <img src="" alt="Go!" />
                </button>
            </div>
        </div>
    );
};

export default Home;