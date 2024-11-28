import React from "react";
import Menu from "../components/Game/Menu";
import Question from "../components/Game/Question";
import NextQues from "../components/Game/NextQues";

export default function Dashboard() {
  return (
    <div className="main">
      <Menu />
      <Question />
      <NextQues />
    </div>
  );
}
