import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCardName = createAsyncThunk(
    "createCardSlice/getCardName",
    async () => {
        let response = await fetch("https://randomuser.me/api/")
        const data = await response.json();
        return data;
    });

export const createCardSlice = createSlice({
    name: "card",
    initialState: {
        fetchedName: {
            firstName: "",
            lastName: "",
        },

        cards: [
            {
                firstName: "",
                lastName: "",
                cardNumber: "1234 5678 9012 3456",
                cvv: "123",
                validMonth: "12",
                validYear: "24",
                vendor: "VISA",
                activeCard: true
            }
        ]
    },
    reducers: {
        getCardName: async () => { },

        addCard: (state, action) => {
            state.cards.push({ ...action.payload });
        }
    },
    extraReducers: {
        [getCardName.pending]: (state, action) => {
            state.status = "Loading...";
        },
        [getCardName.fulfilled]: (state, { payload }) => {
            state.status = "success";
            const fetchedFirstName = payload.results[0].name.first;
            const fetchedLastName = payload.results[0].name.last;
        
            state.fetchedName.firstName = fetchedFirstName;
            state.fetchedName.lastName = fetchedLastName;
        
            // Set fetched name for the hard-coded card
            state.cards[0].firstName = fetchedFirstName;
            state.cards[0].lastName = fetchedLastName;
        },
        [getCardName.rejected]: (state, action) => {
            state.status = "failed :(";
        }
    }

});


export default createCardSlice.reducer;
export const { addCard } = createCardSlice.actions;
