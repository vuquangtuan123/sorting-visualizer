import React from "react";

const blue_400 = "#60a5fa";
const green_400 = "#4ade80";
const violet_400 = "#a78bfa";
const teal_400 = "#2dd4bf";
const rose_400 = "#fb7185";
const amber_400 = "#fbbf24";
const lime_400 = "#a3e635";

export default function ArrayList({
  array,
  compare,
  swap,
  sortedIndex,
  sortedArray,
}) {
  return (
    <div className="w-full h-[60vh] flex items-end px-4 mb-2 mt-[120px]">
      {array.map((barHeight, index) => {
        let bg = blue_400;

        // if compare only have 1 index
        if (compare && index === compare[0] && compare[1] === -1)
          bg = amber_400;
        // if compare have 2 indexs(idx) inside => change bar color that have the same idx
        else if (compare && (index === compare[0] || index === compare[1]))
          bg = violet_400;

        // if swap have index(idx) inside => change bar color that have the same idx
        if (swap && (index === swap[0] || index === swap[1])) bg = rose_400;
        if (sortedIndex && sortedIndex.includes(index) && compare[0] === -1)
          bg = lime_400;
        else if (sortedIndex && sortedIndex.includes(index)) bg = green_400;

        if (sortedArray && sortedArray.includes(index)) bg = teal_400;

        return (
          <div
            key={index}
            className="m-[0.2%] rounded-t-md transition-[height] ease-in duration-200"
            //height = 6/10 current bar height, width = 100vw/len
            style={{
              height: `${barHeight}%`,
              width: `${100 / array.length}vw`,
              backgroundColor: bg,
            }}
          >
            {array.length < 25 && (
              <p className="w-full h-full hidden md:flex items-end justify-center pb-1 text-white font-semibold transition ease-in duration-200 hover:opacity-60 hover:-translate-y-1.5 cursor-default">
                {barHeight}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
