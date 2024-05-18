const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLightTheme: true,
  currentButton: [],
};

const toogleSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggle: (state, action) => {
      state.isLightTheme = !state.isLightTheme;
    },
    buttons: (state, action) => {
      if (action.payload === "AC") {
        state.currentButton = [];//set to initial state if all clear button is clicked
      } else if (action.payload === "=") {
        try {
          // Evaluate the expression
          const expression = state.currentButton.join("");
          // Use eval to compute the result 
          const result = eval(expression);
          // Update the currentButton array with the result
          state.currentButton = [result.toString()];
        } catch (error) {
          //if any error in evaluating result due to misplace of operators
          console.error("Error evaluating expression:", error);
          state.currentButton = ["Error"];
        }
      } else if (action.payload === -1) {
        // Delete button
        state.currentButton.pop();
      } else {
        state.currentButton.push(action.payload);
      }
    },
  },
});

export const toggleReducer = toogleSlice.reducer;//exporting reducer
export const action = toogleSlice.actions;//exporting action
//exporting selectors
export const toggleSelector = (state) => state.toggleReducer.isLightTheme;
export const buttonSelector = (state) => state.toggleReducer.currentButton;
