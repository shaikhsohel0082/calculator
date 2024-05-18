import React, { useEffect, useState } from "react";
import Display from "../display/display";
import NotificationBar from "../notificationBar/notificationBar";
import Calculator from "../calculator/calculator";
import Styles from "./mobile.module.css";
import { useSelector } from "react-redux";
import { toggleSelector } from "../../features/Redux/toggleReducer";

export default function Mobile() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = useSelector(toggleSelector);

  //toggling theme based on button clicked
  useEffect(() => {
    setTheme(toggleTheme ? "light" : "dark");
  }, [toggleTheme]);

  return (
    <div
      className={`${Styles.mobile} ${
        theme === "light" ? Styles.light : Styles.dark
      }`}
    >
      <NotificationBar />
      <Display />
      <Calculator />
      <h3>React Calculator</h3>
    </div>
  );
}
