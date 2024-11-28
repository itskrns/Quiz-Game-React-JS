import { useDispatch, useSelector } from "react-redux";
import { labels } from "../../utils/helper";
import { setAnswer } from "./GameSlice";

export default function Option({ index, option }) {
  const dispatch = useDispatch();
  const {
    answers,
    answered,
    curIndex: num,
  } = useSelector((state) => state.game);

  function handleAnswer(e) {
    e.preventDefault();

    dispatch(setAnswer(index));
  }

  return (
    <label className="option" htmlFor={option} onClick={handleAnswer}>
      <input type="radio" id={option} name={index} value={option} />
      <span
        style={
          answered
            ? answers[num] === option
              ? { color: "greenyellow" }
              : { color: "rgba(200, 0, 0)" }
            : null
        }
      >
        {labels[index]}. {option}
      </span>
    </label>
  );
}
