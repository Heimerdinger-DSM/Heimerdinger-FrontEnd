import { theme } from "@/styles/theme";
import { CardDocsType } from "@/util/interface/card/cardDocsType";
import styled from "@emotion/styled";
import { useRef } from "react";

interface props {
  arr: {
    id: number;
    item: string;
  };
  index: number;
  cardState: boolean;
  cardSelecting: (card: number) => void;
}

export default function Card({ arr, index, cardState, cardSelecting }: props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onClickCard = () => {
    if (!cardState) {
      cardSelecting(index);
    }
  };

  return (
    <>
      <CardBox ref={cardRef} onClick={onClickCard} cardState={cardState}>
        <BackCard>
          <Fruit src={arr.item} />
        </BackCard>
        <FrontCard>
          <Line>
            <Flower src="/img/card/flower.png" />
          </Line>
        </FrontCard>
      </CardBox>
    </>
  );
}

const CardBox = styled.div`
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  perspective: 1000px;
  cursor: pointer;

  transform: rotateY(
    ${({ cardState }: { cardState: boolean }) =>
      cardState ? "180deg" : "0deg"}
  );
`;

const CardItem = styled.div`
  position: absolute;
  width: 130px;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  backface-visibility: hidden;
`;

const FrontCard = styled(CardItem)`
  width: 129px;
  height: 189px;
  background-color: ${theme.mainNavyColor};
`;

const BackCard = styled(CardItem)`
  border: 1px solid ${theme.lightGrayColor};
  background-color: ${theme.whiteColor};
  transform: rotateY(180deg);
`;

const Line = styled.div`
  width: 122px;
  height: 182px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.whiteColor};
  border-radius: 6px;
`;

const Flower = styled.img`
  width: 22px;
`;

const Fruit = styled.img`
  width: 80px;
`;
