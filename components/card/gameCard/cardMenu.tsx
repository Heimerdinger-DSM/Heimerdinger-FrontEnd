import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function CardMenu() {
  return (
    <Container>
      <TextBox>
        <Title>카드뒤집기</Title>
        <Stage>1단계</Stage>
      </TextBox>
      <ButtonBox>
        <ReButton>초기화 하기</ReButton>
        <StopButton>그만하기</StopButton>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 240px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${theme.thinGrayColor};
  border-radius: 8px;
  background-color: ${theme.whiteColor};
  flex: 0 0 240px;
`;

const TextBox = styled.div`
  width: 100%;
  margin-bottom: 34px;
  gap: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${theme.blackColor};
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Stage = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const ButtonBox = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
`;

const ReButton = styled(Button)`
  border: 1.5px solid ${theme.mainPurpleColor};
  color: ${theme.mainPurpleColor};
  background-color: ${theme.whiteColor};
`;
const StopButton = styled(Button)`
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;
