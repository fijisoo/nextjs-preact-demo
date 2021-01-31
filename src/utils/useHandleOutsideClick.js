import React, { useState, useEffect } from "react";

export const useHandleOutsideClick = (ref, isClickedOutside = false, callback) => {
  const [clickedOutside, setClickedOutside] = useState(isClickedOutside);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setClickedOutside(true);
      callback();
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return [ clickedOutside, handleClickInside ];
};
