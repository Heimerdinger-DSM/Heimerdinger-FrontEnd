import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Game() {
  const Item = [
    {
      title: "카드 뒤집기",
      text: "카드를 뒤집어 같은\n짝이 나오는 것을 찾는 게임입니다.",
      link: "/mainCard",
    },
    {
      title: "랜덤 사칙연산",
      text: "랜덤으로 나오는 사칙연산 문제를\n계산하는 게임입니다.",
      link: "/mainArithmetic",
    },
    {
      title: "AI 게임",
      text: "AI를 통한 게임입니다.",
      link: "/login",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <GameInfo>
          <GameInfoTextBox>
            <GameInfoTextBoxTitle>치매 예방 프로그램</GameInfoTextBoxTitle>
            <GameInfoTextBoxText>
              치매 예방에 도움이 되는 다양한 프로그램을 하이머딩거에서
              만나보세요.
            </GameInfoTextBoxText>
          </GameInfoTextBox>
          <GameInfoItemList>
            {Item.map((arr, i) => (
              <Link href={arr.link} style={{ textDecoration: "none" }}>
                <GameInfoItem>
                  <GameInfoItemTextBox>
                    <GameInfoItemTextBoxTitle>
                      <GameInfoItemTitle>{arr.title}</GameInfoItemTitle>
                      <GameInfoItemArrow src="/img/main/GameRightArrow.png"></GameInfoItemArrow>
                    </GameInfoItemTextBoxTitle>
                    <GameInfoItemText>{arr.text}</GameInfoItemText>
                  </GameInfoItemTextBox>
                </GameInfoItem>
              </Link>
            ))}
          </GameInfoItemList>
        </GameInfo>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 624px;
  background: linear-gradient(180deg, #8e80cb 0%, #7867bf 100%);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GameInfo = styled.div`
  width: 880px;
  height: 412px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const GameInfoTextBox = styled.div`
  text-align: center;
  color: ${theme.whiteColor};
`;
const GameInfoTextBoxTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
`;
const GameInfoTextBoxText = styled.h4`
  font-weight: 500;
  font-size: 16px;
`;
const GameInfoItemList = styled.div`
  width: 880px;
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GameInfoItem = styled.div`
  width: 280px;
  height: 280px;
  background-color: ${theme.whiteColor};
  display: flex;
  justify-content: center;
  border-radius: 20px;
  color: ${theme.blackColor};
`;
const GameInfoItemTextBox = styled.div`
  width: 220px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 34px;
`;
const GameInfoItemTextBoxTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GameInfoItemTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
`;
const GameInfoItemArrow = styled.img`
  width: 24px;
`;
const GameInfoItemText = styled.h4`
  font-weight: 500;
  font-size: 10px;
  white-space: pre-wrap;
`;
