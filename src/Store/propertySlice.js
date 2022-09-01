import { createSlice } from "@reduxjs/toolkit";

export const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertyList: [
      {
        id: "12345678",
        name: "Arihant South Winds",
        description:
          "3 Bedrooms , 3 Bathrooms, 2 Balconies with Pooja Room,Study Room,Servant Room,Store Room",
        size: "500",
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: "76543678",
        name: "Amulya Villa",
        description:
          "4 Bedrooms , 3 Bathrooms, 2 Balconies with Pooja Room,Study Room,Servant Room,Store Room",
        size: "1000",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: "786594032",
        name: "AA Homes",
        description:
          "3 Bedrooms , 3 Bathrooms, 1 Balcony,Study Room,Store Room, parking",
        size: "600",
        image:
          "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  },

  reducers: {
    addProperty: (state, action) => {
      state.propertyList.push(action.payload);
    },
    deleteProperty: (state, action) => {
      let indexOfObject = state.propertyList.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.propertyList.splice(indexOfObject, 1);
    },
  },
});

export const { addProperty, deleteProperty } = propertySlice.actions;
export default propertySlice.reducer;
