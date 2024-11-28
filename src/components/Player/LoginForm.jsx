import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPlayer } from "./PlayerSlice";
import { setQuestions, setStatus } from "../Game/GameSlice";
import getQuestions from "../../services/apiQuiz";
import { optionsGender, optionsLevel, optionsTopic } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleStart(e) {
    e.preventDefault();

    dispatch(setPlayer({ name, email, gender, topic, level }));

    const questions = await getQuestions(topic, level);

    if (questions.length === 0) return;

    dispatch(setStatus("playing"));
    dispatch(setQuestions(questions));
    navigate(`/quiz`);
  }

  return (
    <form className="form" onSubmit={(e) => handleStart(e)}>
      <div>
        <label htmlFor="name">Full Name</label>
        <span>
          <input
            required
            type="text"
            id="name"
            value={name}
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          />
        </span>

        <label htmlFor="email">Email ID</label>
        <span>
          <input
            required
            id="email"
            type="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>

        <label htmlFor="gender">Gender</label>
        <span>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            {optionsGender.map((ele, ind) => (
              <FormOptions value={ele} key={ind} />
            ))}
          </select>
        </span>

        <label htmlFor="topic">Topic</label>
        <span>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            {optionsTopic.map((ele, ind) => (
              <FormOptions value={ele} name={ele.split(":")[1]} key={ind} />
            ))}
          </select>
        </span>

        <label>Level</label>
        <span>
          <select
            id="level"
            htmlFor="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {optionsLevel.map((ele, ind) => (
              <FormOptions value={ele} key={ind} />
            ))}
          </select>
        </span>
      </div>

      <div>
        <button type="submit">Start Quiz</button>
      </div>
    </form>
  );
}

function FormOptions({ value, name }) {
  return <option value={value}>{name ? name : value}</option>;
}
