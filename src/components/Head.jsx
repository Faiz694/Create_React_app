import React from "react";
import recta from "../assets/Rectangle 2.svg"

const HeadSection = () => {
  return (
    <div className="relative bg-black">
      <img
        src={recta}
        className="w-full h-[50vh] object-cover opacity-40"
        alt="main-bg"
      />
      <div className="absolute flex sm:hidden container mx-auto start-0 end-0 top-0 items-center justify-between p-6 text-white">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon/navigation/arrow_back_24px">
            <path
              id="icon/navigation/arrow_back_24px_2"
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              fill="white"
            />
          </g>
        </svg>
        <button className="px-3 py-2 bg-transparent text-white rounded-md border border-white">
          Join Group
        </button>
      </div>
      <div className="absolute container mx-auto xl:max-w-[1300px] start-0 end-0 bottom-14 md:bottom-20 flex flex-col items-start justify-center gap-2 text-white px-3">
        <h2 className="text-2xl sm:text-4xl font-semibold">
          Computer Engineering
        </h2>
        <p className="text-sm sm:text-[16px]">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default HeadSection;
