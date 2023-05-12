import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <TopBanner>
          <PurpleCircle></PurpleCircle>
          <TextBox>
            <Title>
              치매 관련 정보를
              <br />
              하이머딩거에서
              <br />한 눈에 모아보세요!
            </Title>
            <Text>
              치매 관련 정보 공유, 시설 검색, 리뷰작성, 프로그램 등을
              <br />
              하이머딩거에서 한번에 만나보세요.
            </Text>
          </TextBox>
          <WhiteHalfCircle></WhiteHalfCircle>
        </TopBanner>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 570px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const TopBanner = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.mainPurpleColor};
  z-index: -5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div`
  width: 880px;
  color: white;
`;
const Title = styled.h1`
  width: fit-content;
`;
const Text = styled.h4`
  margin-top: 30px;
  font-weight: 500;
`;
const PurpleCircle = styled.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(
    135deg,
    ${theme.mainNavyColor},
    ${theme.mainPurpleColor}
  );
  border-radius: 50%;
  position: absolute;
  top: 60px;
  left: 180px;
  z-index: -1;
`;
const WhiteHalfCircle = styled.div`
  position: absolute;
  bottom: 60px;
  right: 180px;
  width: 256px;
  height: 132px;
  background: linear-gradient(270deg, #ffffff -2%, rgba(255, 255, 255, 0) 102%);
  border-radius: 0 0 146px 146px;
  transform: rotate(-45deg);
`;
