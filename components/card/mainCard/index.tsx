import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function MainCard() {
  const item = [
    {
      stage: "1단계",
      content: "4x2",
    },
    {
      stage: "2단계",
      content: "4x4",
    },
    {
      stage: "3단계",
      content: "4x6",
    },
    {
      stage: "4단계",
      content: "6x6",
    },
    {
      stage: "5단계",
      content: "7x7",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <TitleBox>
          <Title>카드뒤집기</Title>
          <Text>카드를 뒤집어 짝이 맞는 것을 찾는 게임입니다.</Text>
        </TitleBox>
        <StageBox>
          {item.map((arr, i) => (
            <Item key={i}>
              <Stage>{arr.stage}</Stage>
              <Frame>
                <Content>{arr.content}</Content>
                <Start>시작하기{">"}</Start>
              </Frame>
            </Item>
          ))}
        </StageBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
`;

const Wrapper = styled.div`
  width: 80%;
`;

const TitleBox = styled.div``;

const Title = styled.h1`
  font-size: 32px;
  color: ${theme.strongGrayColor};
`;

const Text = styled.p`
  margin-top: 12px;
  font-size: 16px;
  color: ${theme.nineGrayColor};
`;

const StageBox = styled.div`
  width: 100%;
  margin-top: 80px;
  row-gap: 60px;
  column-gap: 3%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Item = styled.div`
  width: 380px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 1.5px 15px rgba(0, 0, 0, 0.25);
  background-color: ${theme.whiteColor};
  &:hover {
    animation: shaking 0.3s;
    animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    cursor: pointer;
  }
  @keyframes shaking {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

const Stage = styled.h2`
  width: 80%;
  font-size: 26px;
  text-align: start;
  color: ${theme.blackColor};
`;

const Frame = styled.div`
  width: 80%;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: 16px;
  color: ${theme.nineGrayColor};
`;

const Start = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.mainPurpleColor};
`;
