import { useSelector } from "react-redux";
import { buttonSelector } from "../../features/Redux/toggleReducer";
import { useState } from "react";
import Styles from "./display.module.css";

export default function Display() {
  const data = useSelector(buttonSelector);//data to be displayed on screen
  const value = data.join("");

  return (
    <>
      <input className={Styles.input} value={value} type="text" />
    </>
  );
}
