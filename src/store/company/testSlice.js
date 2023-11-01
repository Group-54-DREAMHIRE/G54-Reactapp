import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   testDetails: {
        title: null,
        type: null,
        date: null,
        time: null,
        duration: null,
        passingMark:null,
        numOfQue:2,
        instructions:null,
        questionCount:0,
   },
   questions:[
    {
        question: "",
        answ1: "",
        answ2:  "",
        answ3: "",
        answ4: "",
        answers: [],
    }
   ],
   actJobId:0,
   disDetails:null,
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
    setDisDetails:(state, action)=>{
        state.disDetails.time = action.payload;
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
    setTestDetails: (state, action)=>{
        state.testDetails = action.payload;
    },
    setQuestions: (state, action)=>{
        state.questions = action.payload;
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
    },
    resetCount: (state)=>{
        state.testDetails.questionCount = 0;
    },
    setActJobId: (state, action)=>{
        state.actJobId = action.payload;
    },
    
  }  
});

export const {
    setTestDetails,
    setQuestions,
    setTitle,
    setType,
    setTestDate,
    setTime,setDutation,
    setPassingMark,
    setNumOfQuetions,
    setInstructions,
    increaseQuestionCount,
    decreaseQuestionCount,
    addQuestion,
    resetCount,
    setActJobId,
    setDisDetails,
} = testSlice.actions;
export default testSlice.reducer;
