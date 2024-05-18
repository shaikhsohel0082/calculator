import { useEffect, useState } from "react";
import Styles from "./notificationBar.module.css";

export default function NotificationBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={Styles.outerDiv}>
      <div>
        <p className={Styles.time}>{time.toLocaleTimeString()}</p>
      </div>
      <div className={Styles.right}>
        <i class="fa-solid fa-wifi" />
        &ensp;&ensp;
        <i class="fa-solid fa-battery-full" />
      </div>
    </div>
  );
}
