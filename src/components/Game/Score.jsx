import { useSelector } from "react-redux";
import { scoreIcons } from "../../utils/helper";

export default function Score() {
  const { attempted, right, wrong, score, time } = useSelector(
    (store) => store.game
  );
  const result = { attempted, right, wrong };

  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  return (
    <div className="score">
      <span>
        <img src="img/score.svg" alt="score icon" /> Your Score: {score} / 100
      </span>

      <ul>
        <li>
          <img src={`img/time.svg`} alt="icons" />
          Time Taken: {`${9 - mins} min:${60 - secs} sec`}
        </li>

        {scoreIcons.map((icons) => (
          <li key={icons.id}>
            <img src={`img/${icons.src}`} alt={icons.id} />
            {icons.name} {result[icons.id]}
          </li>
        ))}
      </ul>
    </div>
  );
}
