import React from "react";

const HearthIcon = ({ isFavorite, toggleFavorite }) => {
  return (
    <button
      className="text-red-500 transition-transform duration-500 ease-in-out transform hover:scale-110"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
      data-testid="hearth-icon-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        viewBox="0 0 24 24"
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        data-testid="hearth-icon-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default HearthIcon;
