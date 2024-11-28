import React from "react";
import Score from "../components/Game/Score";
import PlayerInfo from "../components/Player/PlayerInfo";

export default function Result() {
  return (
    <div className="main result">
      <PlayerInfo />
      <Score />
    </div>
  );
}
