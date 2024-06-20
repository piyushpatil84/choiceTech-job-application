import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {},
  education: [],
  workExperience: [],
  skills: [],
  additionalInfo: {}
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    savePersonalInfo: (state, action) => { state.personalInfo = action.payload },
    saveEducation: (state, action) => { state.education = action.payload },
    saveWorkExperience: (state, action) => { state.workExperience = action.payload },
    saveSkills: (state, action) => { state.skills = action.payload },
    saveAdditionalInfo: (state, action) => { state.additionalInfo = action.payload },
    clearForm: (state) => initialState
  }
});

export const {
  savePersonalInfo,
  saveEducation,
  saveWorkExperience,
  saveSkills,
  saveAdditionalInfo,
  clearForm
} = formSlice.actions;
