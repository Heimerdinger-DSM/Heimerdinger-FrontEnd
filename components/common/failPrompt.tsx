import styled from "@emotion/styled";
import Link from "next/link";
export default function failPrompt() {
  return (
    <MainDiv>
      <SubDiv>
        <Logo>
          <img src="/img/header/logo.png" />
        </Logo>
        <hr />
        <TextBox>
          <h1>
            랜덤 사칙연산
            <br />
            1단계 도전 실패 하셨습니다. 😭
          </h1>
          <p>are you got it?</p>
        </TextBox>
        <BtnContainer>
          <Link href="/mainArithmetic">
            <Btn>다시하기</Btn>
          </Link>
          <Link href="/main">
            <Btn>그만하기</Btn>
          </Link>
        </BtnContainer>
      </SubDiv>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  z-index: 2;
  position: absolute;
  left: 502.5px;
  top: 160px;
  width: 900px;
  height: 570px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0px 2.23px 4.46px rgba(0, 0, 0, 0.2);
`;
const SubDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  hr {
    margin-top: 20.5px;
    border: 1.5px solid #d5d5d5;
    height: 0;
  }
`;
const Logo = styled.div`
  width: 180px;
  height: 35px;
  margin: 0 auto;
  margin-top: 21px;
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TextBox = styled.div`
  width: 460px;
  height: 146px;
  margin: 0 auto;
  margin-top: 94.5px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #000;
  }
  p {
    margin-top: 29px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #4e5059;
  }
`;
const Btn = styled.div`
  border-radius: 6px;
  width: 300px;
  height: 75px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background: #7867bf;
`;
const BtnContainer = styled.div`
  width: 632px;
  display: flex;
  gap: 30px;
  margin: 0 auto;
  margin-top: 131.5px;

  a {
    text-decoration: none;
    div {
      padding-top: 19.5px;
      &:first-child {
      }
      &:last-child {
        color: #7867bf;
        background: #fff;
        border: 1.5px solid #7867bf;
      }
    }
  }
`;
