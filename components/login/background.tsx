import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Item from "./item";

export default function background() {
  return (
    <Cover>
      <Container>
        <Wrapper>
          <Circle1></Circle1>
          <Circle2></Circle2>
          <TextBox>
            <Title>HEIMERDINGER</Title>
            <Text>치매 정보 공유 웹 플랫폼</Text>
          </TextBox>
        </Wrapper>
        <Item />
      </Container>
    </Cover>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 850px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  background-color: ${theme.whiteColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;
const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0 0 10px;
  background: linear-gradient(180deg, #7867bf 0%, #47467b 100%);
`;

const Circle1 = styled.div`
  position: absolute;
  width: 600px;
  height: 280px;
  border-radius: 50%;
  background-color: ${theme.whiteColor};
  opacity: 0.2;
  transform: rotate(-11.85deg);
`;

const Circle2 = styled.div`
  position: absolute;
  right: -70%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: ${theme.whiteColor};
  opacity: 0.2;
`;

const TextBox = styled.div`
  color: ${theme.whiteColor};
  text-align: start;
`;
const Title = styled.h1`
  font-size: 36px;
`;
const Text = styled.p`
  font-size: 17px;
`;
