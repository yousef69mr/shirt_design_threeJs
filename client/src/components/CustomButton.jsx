import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = (props) => {
  const { customStyles, type, title, handleClick } = props;
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "2px",
        borderColor: snap.color,
        color: snap.color,
        // backgroundColor:
        //   getContrastingColor(snap.color) === "black"
        //     ? getContrastingColor(snap.color)
        //     : "inherat",
      };
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
