import { useSelector } from "react-redux";

export default function Header() {
  const { name, gender } = useSelector((state) => state.player);
  const { status } = useSelector((state) => state.game);

  return (
    <header className="navbar">
      <span>
        <h1>quiz quest</h1>
        <img src="img/quiz.svg" alt="logo" />
      </span>

      <p>
        {status === "loading" && (
          <span>
            unleash your inner genius!
            <img src="img/brain.svg" alt="brain" />
            take the quiz challenge Now!{" "}
          </span>
        )}

        {status === "playing" && (
          <span>
            <img src={`img/${gender.toLowerCase()}.svg`} alt="brain" />
            {name}, welcome to the quiz challenge!!
          </span>
        )}
      </p>
    </header>
  );
}
