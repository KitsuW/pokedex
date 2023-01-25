import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainer = createSlice({
	name: 'trainer',
    initialState: "",
    reducers: {
        setName: (state, action) => {
            const inputTrainer = action.payload
            return inputTrainer
        }
    }
})

export const { setName } = trainer.actions;

export default trainer.reducer;