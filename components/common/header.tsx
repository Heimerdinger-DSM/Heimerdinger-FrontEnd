import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Logo src="/img/header/logo.png" />
          <Menu>
            <Text>하이머소식</Text>
            <Text>치매시설정보</Text>
            <Text>치매자가진단</Text>
            <Text>치매예방 프로그램</Text>
          </Menu>
        </Frame>
        <Button>로그인</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.whiteColor};
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Frame = styled.div`
  gap: 60px;
  display: flex;
  align-items: center;
  justify-content: space-bettwen;
`;

const Logo = styled.img`
  width: 140px;
  cursor: pointer;
`;

const Menu = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 28px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
