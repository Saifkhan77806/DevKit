import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const randomValue = (num: number) => {
  return Math.floor(Math.random() * num);
};

export const randomColor = () => {
  const possibleHex = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const value = ["#"];

  for (let i = 0; i < 6; i++) {
    const element = randomValue(possibleHex.length);

    const val = possibleHex[element];

    value.push(val);
  }

  return value.join("");
};

const colors = [
  "#f87171", // red
  "#60a5fa", // blue
  "#34d399", // green
  "#fbbf24", // yellow
  "#a78bfa", // purple
  "#fb7185", // pink
  "#38bdf8", // sky
  "#4ade80", // emerald
];

export const getProjectColor = (id: number) => {
  return colors[id % colors.length];
};
