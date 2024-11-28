import { useSelector } from "react-redux";
import Option from "./Option";
import Error from "../../ui/Error";

export default function Question() {
  const {
    questions,
    options,
    curIndex: num,
  } = useSelector((state) => state.game);

  return (
    <div className="question">
      <p>{`Q ${num + 1}. ${questions[num]}`}</p>

      <div className="options">
        {options.length > 0 &&
          options[num].map((option, index) => (
            <Option key={option} index={index} option={option} />
          ))}
      </div>
    </div>
  );
}
