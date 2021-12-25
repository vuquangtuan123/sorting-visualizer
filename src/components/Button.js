import React from "react";

export default function Button({ placeHolder, handleOnClick, disabled }) {
  return (
    <button
      onClick={handleOnClick}
      className="flex justify-center items-center bg-gray-400 rounded-md p-2 shadow-md hover:shadow-lg hover:bg-gray-500 transition-transform hover:-translate-y-1 ease-in"
      disabled={disabled}
    >
      {placeHolder}
    </button>
  );
}
