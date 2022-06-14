import { CardProps } from "../components/grid/types";

const shuffle = (arr: number[]): number[] => {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex]
    ];
  }

  return arr;
};

const generateRandomNumInRange = (min: number, max: number): number => {
  return Math.floor(min + Math.random() * (max - min + 1));
};

export const generateRandomNumsDoublets = (
  count: number,
  min: number,
  max: number
): CardProps[] => {
  let doublets = [];
  let distinctNumCount = Math.ceil(count / 2);
  for (let i = 0; i < distinctNumCount; i++) {
    let randomNum = generateRandomNumInRange(min, max);
    doublets.push(randomNum, randomNum);
  }
  return shuffle(doublets).map((value, index) => ({
    value,
    index,
    isOpen: false
  }));
};
