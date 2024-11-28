import { useDispatch, useSelector } from "react-redux";
import { setNextQuestion, setStatus } from "./GameSlice";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { curIndex: num } = useSelector((state) => state.game);

  function handleNavigation() {
    if (num < 9) return dispatch(setNextQuestion());

    dispatch(setStatus("loading"));
    navigate("/result");
  }

  return (
    <div className="navigation">
      <span>
        {num + 1} of {10}
      </span>

      <button
        className={num >= 9 ? "btn-submit" : ""}
        onClick={handleNavigation}
      >
        {num >= 9 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
