import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRestart } from "../Game/GameSlice";

export default function Player() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, gender, email, topic, level } = useSelector(
    (state) => state.player
  );

  function handleRestart() {
    dispatch(setRestart());
    navigate("/");
  }

  return (
    <div className="player">
      <div>
        <img src={`img/${gender.toLowerCase()}.svg`} alt="player" />
        <h2>{name}</h2>
      </div>

      <div>
        <p>Email: {email}</p>
        <p>Topic: {topic}</p>
        <p>Level: {level}</p>
        <button onClick={handleRestart}>Start New Quiz</button>
      </div>
    </div>
  );
}
