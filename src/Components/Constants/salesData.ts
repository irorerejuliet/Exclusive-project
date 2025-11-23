import type { SalesDaysAndTime, sidbarTypes } from "./tyoes/sidebarTypes";

export const salesData: sidbarTypes[] = [
  {
    id: 1,
    percentage: -40,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/GamePad.svg",
    description: "HAVIT HV-G92 Gamepad",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 88,
  },
  {
    id: 2,
    percentage: -35,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/KeyBoard.svg",
    description: "AK-900 Wired Keyboard",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 75,
  },
  {
    id: 3,
    percentage: -30,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/GamingMonitor.svg",
    description: "IPS LCD Gaming Monitor",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 88,
  },
  {
    id: 4,
    percentage: -25,
    heart: "/images/HeartIcon.svg",
    quickVeiw: "/images/Quick View.svg",
    gamepad: "/images/ComfortChair.svg",
    description: "S-Series Comfort Chair",
    amount: ["$120", "$160"],
    stars: "/images/Five star.svg",
    rating: 88,
  },
];




export const salesTime: SalesDaysAndTime[] = [
  {
    id: 1,
    title: "Day",
    time: "03",
  },
  {
    id: 2,
    title: "Hour",
    time: "23",
  },
  {
    id: 3,
    title: "Minute",
    time: "19",
  },
  {
    id: 4,
    title: "Seconds",
    time: "56",
  },
];