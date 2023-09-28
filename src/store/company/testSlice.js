import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   testDetails: {
        title: null,
        type: null,
        date: null,
        time: null,
        duration: null,
        passingMark:null,
        numOfQue:null,
        instructions:null,
        questionCount:0,
        
   },
   questions:[]
}

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTitle: (state, action)=>{
          state.testDetails.title = action.payload;
    }, 
    setType: (state, action)=>{
        state.testDetails.type = action.payload;
    },
    setTestDate: (state, action)=>{
        state.testDetails.date = action.payload;
    }, 
    setTime: (state, action)=>{
        state.testDetails.time = action.payload;
    }, 
    setDutation: (state, action)=>{
        state.testDetails.duration = action.payload;
    }, 
    setPassingMark: (state, action)=>{
        state.testDetails.passingMark = action.payload;
    },
    setNumOfQuetions: (state, action)=>{
        state.testDetails.numOfQue = action.payload;
    },
    setInstructions: (state, action)=>{
        state.testDetails.instructions = action.payload;
    },
    increaseQuestionCount: (state)=>{
        state.testDetails.questionCount = state.testDetails.questionCount +1;
    },
    decreaseQuestionCount: (state)=>{
        state.testDetails.questionCount = state.testDetails.questionCount -1;
    },
    addQuestion: (state, action)=>{
        const updatedQuestions = [...state.questions];
      updatedQuestions[state.testDetails.questionCount] = action.payload;
      state.questions = updatedQuestions;
    }
    
  }  
});

export const {
    setTestDetails,
    setTitle,
    setType,
    setTestDate,
    setTime,setDutation,
    setPassingMark,
    setNumOfQuetions,
    setInstructions,
    increaseQuestionCount,
    decreaseQuestionCount,
    addQuestion
} = testSlice.actions;
export default testSlice.reducer;
