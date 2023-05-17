import { CardDocsType } from "@/util/interface/card/cardDocsType";

export function shuffle(array: CardDocsType[]) {
  const temp = [];

  array = [...array, ...array];

  while (array.length) {
    const idx = Math.floor(Math.random() * (array.length - 1));

    temp.push(array[idx]);
    array.splice(idx, 1);
  }

  console.log(temp);
  return temp;
}
