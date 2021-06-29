import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// Clock.propTypes = {};
function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`; // chuyển thành dạng chuỗi
}

function useClock(props) {
  const [TimeString, setTimeString] = useState("");
  useEffect(() => {
    const ClockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTimeString(newTimeString);
    }, 1000);
    return () => {
      console.log("Clock cleanup ");
      clearInterval(ClockInterval);
    };
  }, []);
  return { TimeString };
}

export default useClock;
