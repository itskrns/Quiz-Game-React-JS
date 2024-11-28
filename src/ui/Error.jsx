import { useDispatch } from "react-redux";
import { useNavigate, useRouteError } from "react-router-dom";
import { setRestart } from "../components/Game/GameSlice";

export default function Error({ message }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useRouteError();

  function handleRestart() {
    dispatch(setRestart());
    navigate("/");
  }

  return (
    <div className="errors">
      <span>
        <img src="img/error.svg" alt="error" />
      </span>
      Error Occurred: {message || error.data || error.message}
      <span>
        <button onClick={handleRestart}>Start New Quiz</button>
      </span>
    </div>
  );
}
