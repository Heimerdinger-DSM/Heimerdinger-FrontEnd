import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function SuccessGame() {
  return (
    <Cover>
      <Container>
        <Header>
          <Logo src="/img/card/logo.png" />
        </Header>
        <TitleBox>
          <Title>
            카드 뒤집기
            <br />
            1단계 성공을 축하합니다!🥳
          </Title>
          <Text>are you got it?</Text>
        </TitleBox>
        <ButtonBox>
          <NextButton>다음 단계로</NextButton>
          <StopButton>그만하기</StopButton>
        </ButtonBox>
      </Container>
    </Cover>
  );
}

const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #20202060;
`;

const Container = styled.div`
  width: 600px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${theme.whiteColor};
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.thinGrayColor};
`;

const Logo = styled.img`
  width: 120px;
`;

const TitleBox = styled.div`
  margin-bottom: 76px;
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 22px;
  font-weight: 700;
  color: ${theme.blackColor};
`;

const Text = styled.div`
  color: ${theme.strongGrayColor};
`;

const ButtonBox = styled.div`
  width: 70%;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const NextButton = styled(Button)`
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
`;

const StopButton = styled(Button)`
  border: 1px solid ${theme.mainPurpleColor};
  color: ${theme.mainPurpleColor};
  background-color: ${theme.whiteColor};
`;
