import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setTimer } from "../components/Game/GameSlice";
import { useNavigate } from "react-router-dom";

export function Timer({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { time } = useSelector((state) => state.game);

  if (time === 0) {
    dispatch(setStatus("loading"));
    return navigate("/result");
  }

  const mins = Math.floor(time / 60);
  const secs = Math.floor(time % 60);

  useEffect(
    function () {
      const timerID = setInterval(function () {
        dispatch(setTimer());
      }, 1000);

      return function () {
        clearInterval(timerID);
      };
    },
    [dispatch]
  );
  return (
    <span>
      {children} {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </span>
  );
}
