import { useEffect, useState } from "react";

export function useTimer({ clock }) {
  const [timer, setTimer] = useState({
    hour: "",
    minute: "",
    second: "",
  });
  const { hour, minute, second } = timer;

  useEffect(() => {
    const date = new Date();

    setTimer({
      hour: date.getHours().toString().padStart(2, "0"),
      minute: date.getMinutes().toString().padStart(2, "0"),
      second: date.getSeconds().toString().padStart(2, "0"),
    });

    let intervalClock = setInterval(() => {
      clock.current.textContent = `${hour}:${minute}:${second}`;
    }, 1000);

    return () => clearInterval(intervalClock);
  }, []);
}
