import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

const SalesTime = () => {
  const [time, setTime] = useState(dayjs().format("dddd, HH:mm:ss"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("dddd, HH:mm:ss"));
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // const TARGET_TIME = dayjs().add(4, "day"); // change this if needed

  // const [timeLeft, setTimeLeft] = useState({
  //   day: "00",
  //   hour: "00",
  //   minute: "00",
  //   seconds: "00",
  // });

  // const updateTimer = () => {
  //   const now = dayjs();
  //   const diff = TARGET_TIME.diff(now);

  //   if (diff <= 0) {
  //     setTimeLeft({
  //       day: "00",
  //       hour: "00",
  //       minute: "00",
  //       seconds: "00",
  //     });
  //     return;
  //   }

  //   const duration = dayjs.duration(diff);

  //   setTimeLeft({
  //     day: String(duration.days()).padStart(2, "0"),
  //     hour: String(duration.hours()).padStart(2, "0"),
  //     minute: String(duration.minutes()).padStart(2, "0"),
  //     seconds: String(duration.seconds()).padStart(2, "0"),
  //   });
  // };

  // useEffect(() => {
  //   updateTimer(); // run immediately
  //   const interval = setInterval(updateTimer, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const items = [
  //   { id: 1, title: "Day", time: timeLeft.day },
  //   { id: 2, title: "Hour", time: timeLeft.hour },
  //   { id: 3, title: "Minute", time: timeLeft.minute },
  //   { id: 4, title: "Seconds", time: timeLeft.seconds },
  // ];

  return (
    <div className="md:flex flex-row justify-between items-center py-8">
      <div className="md:flex flex-row items-center gap-20 md:space-y-0 space-y-10">
        <h2 className="text-3xl font-bold mb-4">Flash Sales</h2>

        <div className="flex gap-4 items-center">
          {/* {items.map(({ id, title, time }) => (
            <div key={id}>
              <h3 className="text-xs font-medium text-center">{title}</h3>
              <div className="flex items-center justify-between ">
                <span className="text-3xl font-bold">{time}</span>
                {title !== "Seconds" && (
                  <span className="text-[#E07575] text-2xl font-semibold">
                    :
                  </span>
                )}
              </div>
            </div>
          ))} */}
          <div className="ext-3xl font-bold">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default SalesTime;
