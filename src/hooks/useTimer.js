import { useEffect } from "react";

function getDate() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  return { hour, minute, second };
}

export async function useTimer({ clock }) {
  // clock.current.textContent = `${getDate().hour}:${getDate().minute}:${
  //   getDate().second
  // })
  // }`;

  useEffect(() => {
    let intervalClock = setInterval(() => {
      const { hour, minute, second } = getDate();

      clock.current.textContent = `${hour}:${minute}:${second}`;
    }, 1000);

    return () => clearInterval(intervalClock);
  }, [clock]);
}
