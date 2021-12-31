import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../Transition.css";

export default function ControlButton({
  isSorting,
  isSorted,
  isPause,
  randomArr,
  handleSort,
  pauseSorting,
  continueSorting,
  prevStep,
  nextStep,
  previewStep,
  setPreviewStep,
}) {
  const handleSetStep = (e) => {
    const currentValue = e.target.value;
    setPreviewStep(currentValue.replace(/\D/, ""));
    if (currentValue > 30) {
      setPreviewStep(30);
    } else if (currentValue === 0) setPreviewStep(1);
  };

  return (
    <div className="w-full h-[80px] flex justify-center items-center gap-x-6">
      <button
        onClick={randomArr}
        className="flex items-center text-blue-400 disabled:text-gray-400 hover:text-blue-500 hover:scale-110 transition"
      >
        <span className="material-icons text-4xl">shuffle</span>
      </button>
      <button
        //sort the array for the first time click on this button (start sorting visualizer)
        onClick={prevStep}
        disabled={!isPause || isSorted}
        className="flex items-center text-blue-400 disabled:text-gray-400 hover:text-blue-400 hover:scale-110 transition"
      >
        <span className="material-icons text-6xl">skip_previous</span>
      </button>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isPause}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade-left"
        >
          <button
            //sort the array for the first time click on this button (start sorting visualizer)
            onClick={
              !isPause && !isSorting
                ? handleSort
                : isPause
                ? continueSorting
                : pauseSorting
            }
            disabled={isSorted} // disable when the array is sorted or (isPause===false and isSorting === false)
            className="flex items-center text-blue-400 disabled:text-gray-400 hover:text-blue-500 hover:scale-110 transition"
          >
            {/* show the play button on init */}
            <span className="material-icons text-6xl">
              {isPause ? "play" : isSorting ? "pause" : "play"}
              _circle_filled
            </span>
          </button>
        </CSSTransition>
      </SwitchTransition>
      <button
        //sort the array for the first time click on this button (start sorting visualizer)
        onClick={nextStep}
        disabled={!isPause || isSorted}
        className="flex items-center text-blue-400 disabled:text-gray-400 hover:text-blue-500 hover:scale-110 transition"
      >
        <span className="material-icons text-6xl">skip_next</span>
      </button>
      <input
        type="tel"
        name="previewStep"
        maxLength="2"
        value={previewStep}
        onChange={handleSetStep}
        placeholder="0"
        autoComplete="off"
        className={`h-12 w-12 text-3xl flex items-center justify-center text-center font-semibold text-${
          !isPause ? "gray" : "blue"
        }-400 focus:text-blue-400 focus:ring-0 focus:border-0 focus:outline-0 hover:scale-110 transition cursor-pointer`}
      />
    </div>
  );
}
