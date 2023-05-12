import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Smcq() {
  return (
    <Container>
      <Wrapper>
        <SmcqTest>
          <SmcqTextBox>
            <SmcqTitle>
              SMCQ,
              <br />
              치매 자가진단 테스트
            </SmcqTitle>
            <SmcqText>
              SMCQ를 기반으로 한<br />
              치매 자가진단 서비스를 만나보세요.
            </SmcqText>
            <SmcqDetail>자세히보기&gt;</SmcqDetail>
          </SmcqTextBox>
          <SmcqQuestionBox>
            <SmcqQuestion>
              <SmcqQuestionQ>
                <SmcqQuestionQText>Q</SmcqQuestionQText>
              </SmcqQuestionQ>
              <SmcqQuestionPurple>
                <SmcqQuestionText>
                  가게에서 2~3가지 물건을 사려할 때,
                  <br />
                  물건 이름을 기억하기 어렵습니까?
                </SmcqQuestionText>
              </SmcqQuestionPurple>
            </SmcqQuestion>
            <SmcqQuestionW>
              <SmcqQuestionWhite>
                <SmcqQuestionText>
                  가스 불이나 전기 불을 끄는 것을
                  <br />
                  기억하기 어렵습니까?
                </SmcqQuestionText>
              </SmcqQuestionWhite>
              <SmcqQuestionQ>
                <SmcqQuestionQText>Q</SmcqQuestionQText>
              </SmcqQuestionQ>
            </SmcqQuestionW>
            <SmcqQuestion>
              <SmcqQuestionQ>
                <SmcqQuestionQText>Q</SmcqQuestionQText>
              </SmcqQuestionQ>
              <SmcqQuestionPurple>
                <SmcqQuestionText>
                  며칠 전에 잡은 약속을 다시 기억하기
                  <br />
                  어렵습니까?
                </SmcqQuestionText>
              </SmcqQuestionPurple>
            </SmcqQuestion>
          </SmcqQuestionBox>
        </SmcqTest>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${theme.backgroundColor};
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SmcqTest = styled.div`
  width: 880px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SmcqTextBox = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const SmcqTitle = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: ${theme.strongGrayColor};
`;
const SmcqText = styled.h4`
  font-weight: 400;
  font-size: 16px;
`;
const SmcqDetail = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${theme.mainNavyColor};
`;
const SmcqQuestionBox = styled.div`
  width: 500px;
  height: 306px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const SmcqQuestion = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
`;
const SmcqQuestionW = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: flex-start;
  gap: 5px;
`;
const SmcqQuestionQ = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${theme.lightPurpleColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SmcqQuestionQText = styled.p`
  color: ${theme.mainNavyColor};
  font-weight: 500;
  font-size: 18px;
`;
const SmcqQuestionPurple = styled.div`
  width: 306px;
  height: 100%;
  background: ${theme.mainPurpleColor};
  border-radius: 12px;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.whiteColor};
`;
const SmcqQuestionWhite = styled.div`
  width: 306px;
  height: 100%;
  background: ${theme.whiteColor};
  border-radius: 12px;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.strongGrayColor};
`;
const SmcqQuestionText = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-align: left;
`;
