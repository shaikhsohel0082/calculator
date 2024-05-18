import Styles from "./calculator.module.css";
import { useDispatch } from "react-redux";
import { action } from "../../features/Redux/toggleReducer";
import { toggleSelector } from "../../features/Redux/toggleReducer";
import { buttonSelector } from "../../features/Redux/toggleReducer";
import { useSelector } from "react-redux";
export default function Calculator() {
  const dispatch = useDispatch();
  const theme = useSelector(toggleSelector);
  const currentButton = useSelector(buttonSelector);
  // console.log(currentButton);

  return (
    <>
      <table border={2} className={Styles.table}>
        <tr>
          <td
            onClick={() => {
              dispatch(action.toggle());
              console.log("button is toggled");
              // console.log(theme);
            }}
          >
            {theme ? (
              <i class="fa-solid fa-moon"></i> //dark theme button
            ) : (
              <i class="fa-solid fa-sun"></i> //light theme button
            )}
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons("/"));
            }}
          >
            /
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons("*"));
            }}
          >
            *
          </td>
          <td
            
            onClick={() => {
              dispatch(action.buttons(-1));
            }}
          >
            <i class="fa-solid fa-delete-left"></i>
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              dispatch(action.buttons(7));
            }}
          >
            7
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(8));
            }}
          >
            8
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(9));
            }}
          >
            9
          </td>

          <td
            onClick={() => {
              dispatch(action.buttons("-"));
            }}
          >
            -
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              dispatch(action.buttons(4));
            }}
          >
            4
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(5));
            }}
          >
            5
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(6));
            }}
          >
            6
          </td>

          <td
            onClick={() => {
              dispatch(action.buttons("+"));
            }}
          >
            +
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              dispatch(action.buttons(1));
            }}
          >
            1
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(2));
            }}
          >
            2
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons(3));
            }}
          >
            3
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons("="));
            }}
          >
            =
          </td>
        </tr>
        <tr>
          <td
            onClick={() => {
              dispatch(action.buttons(0));
            }}
          >
            0
          </td>
          <td
            onClick={() => {
              dispatch(action.buttons("."));
            }}
          >
            .
          </td>
          <td
            className={Styles.btnRed}
            colSpan={2}
            onClick={() => {
              dispatch(action.buttons("AC"));
            }}
          >
            AC
          </td>
        </tr>
      </table>
    </>
  );
}
