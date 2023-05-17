import { cardItem } from "@/docs/card/cardDocs";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Card from "./card";
import { CardDocsType } from "@/util/interface/card/cardDocsType";
import { shuffle } from "@/util/functions/cardGameShuffle";

const len = 4;

export default function CardGame() {
  const [cards, setCards] = useState<CardDocsType[]>([]);
  const [seletedCards, setSeletedCards] = useState<number[]>([]);
  const [cardState, setCardState] = useState<boolean[]>([
    ...Array(len * 2).fill(false),
  ]);
  const [isLoding, setIsLoding] = useState<boolean>(false);

  //카드 섞기
  useEffect(() => {
    setCards(shuffle(cardItem.slice(0, len)));
    cardPreview();
  }, []);

  const cardPreview = () => {
    //카드 맛보기~
    cardState.forEach((ele, index) =>
      setTimeout(() => {
        let temp: boolean[] = [
          ...Array(index + 1)
            .fill(0)
            .map(() => true),

          ...Array(len * 2 - index - 1)
            .fill(0)
            .map(() => false),
        ];
        console.log(temp);
        setCardState(temp);
      }, 1000 + 100 * index)
    );
    //카드 맛보기 끝~
    setTimeout(() => {
      let and = [...Array(len * 2).fill(false)];
      setCardState(and);
    }, 3000);
  };

  //카드 2장 선택하여 뒤집기
  const cardSelecting = (newItem: number) => {
    if (isLoding) return null;

    let temp = [...cardState];
    temp[newItem] = true;

    setCardState(temp);

    setSeletedCards((pre) => [...pre, newItem]);
  };

  //뒤집은 카드 2장 비교 하기
  useEffect(() => {
    if (seletedCards.length === 2) {
      const [fi, si] = seletedCards;
      const tempA = cards[fi];
      const tempB = cards[si];

      if (tempA.id !== tempB.id) {
        let newCardState = [...cardState];

        newCardState[fi] = false;
        newCardState[si] = false;

        setIsLoding(true);
        setTimeout(() => {
          setCardState(newCardState);
          setIsLoding(false);
        }, 1000);
      }
      setSeletedCards([]);
    }
  }, [seletedCards]);

  return (
    <>
      <Container>
        {cards.map((arr, i) => (
          <Card
            key={i}
            arr={arr}
            index={i}
            cardState={cardState[i]}
            cardSelecting={cardSelecting}
          />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 1000px;
  height: 440px;
  display: grid;
  grid-template-columns: repeat(4, 130px);
  column-gap: 16px;
`;
