import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companies:null,
    
}

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanies: (state,action) => {
      state.companies = action.payload;
    },
    getCompany: (state,action) => {
      state.companies.find((company) => company.id === action.payload);
    }
  },
});

export const { setCompanies, getCompany } = companySlice.actions;
export const getAllCompanies = (state) => state.company.companies;
export default companySlice.reducer;
