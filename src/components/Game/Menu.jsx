import { useSelector } from "react-redux";
import { Timer } from "../../ui/Timer";

export default function TopBar() {
  const { topic, level } = useSelector((state) => state.player);

  return (
    <div className="header">
      <span>
        <img src="img/levels.svg" alt="levels" /> {level}
      </span>

      <span>
        <img src="img/category.svg" alt="category" /> {topic}
      </span>

      <span>
        <Timer>
          <img src="img/timer.svg" alt="timer" />
        </Timer>
      </span>
    </div>
  );
}
