import { createSlice } from "@reduxjs/toolkit";
import { shuffleArr } from "../../utils/helper";

export const initialState = {
  right: 0,
  wrong: 0,
  score: 0,
  curIndex: 0,
  attempted: 0,
  options: [],
  answers: [],
  questions: [],
  answered: false,
  time: 600,
  status: "loading",
};

const gameSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions(state, action) {
      state.questions = action.payload.map((el) => el.question);
      state.answers = action.payload.map((el) => el.correct_answer);
      state.options = action.payload.map((el) =>
        shuffleArr([...el.incorrect_answers, el.correct_answer])
      );
    },

    setNextQuestion(state) {
      state.answered = false;

      if (state.curIndex === 9) return (state.curIndex = 0);

      state.curIndex += 1;
    },

    setAnswer(state, action) {
      if (state.answered) return;

      state.answered = true;
      state.attempted += 1;

      if (
        state.answers[state.curIndex] ===
        state.options[state.curIndex][action.payload]
      ) {
        state.right += 1;
        state.score += 10;
      } else {
        state.wrong += 1;
      }
    },

    setTimer(state) {
      if (state.time < 1) return;
      state.time -= 1;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },

    setRestart() {
      return initialState;
    },
  },
});

export const {
  setQuestions,
  setNextQuestion,
  setAnswer,
  setTimer,
  setStatus,
  setRestart,
} = gameSlice.actions;
export default gameSlice.reducer;
