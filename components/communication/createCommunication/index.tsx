import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";

export default function CreateCommunication() {
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <TextDiv>
          <h1>소통게시판 글 작성하기</h1>
          <p>소통게시판에 글을 작성할 수 있어요.</p>
        </TextDiv>
        <Writing>
          <div>
            <h3>
              <nav>1</nav>ㅤ연락처를 남겨주세요.
              <span>&nbsp;&nbsp;(필수 입력 X)</span>
            </h3>
          </div>
          <hr />
        </Writing>
        <SmallInputContainer>
          <SmallInput>
            <h4>SNS 링크</h4>
            <input placeholder="연락할 수 있는 SNS 링크를 입력해주세요." />
          </SmallInput>
          <SmallInput>
            <h4>이메일</h4>
            <input placeholder="이메일 주소를 입력해주세요." />
          </SmallInput>
        </SmallInputContainer>
        <Writing>
          <div>
            <h3>
              <nav>2</nav>ㅤ게시글을 작성해주세요.
            </h3>
          </div>
          <hr />
        </Writing>
      </MainDiv>
    </Page>
  );
}
const Page = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #f9fafb;
`;
const MainDiv = styled.div`
  width: 70%;
  margin: auto;
`;
const TextDiv = styled.div`
  padding-top: 54px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #4e5059;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #999;
    padding-top: 12px;
  }
`;
const Writing = styled.div`
  width: 100%;
  margin-top: 84px;
  div {
    height: 49px;
    display: flex;
    h3 {
      display: inline-flex;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 27px;
      color: #222222;
      nav {
        width: 30px;
        height: 30px;
        background-color: #d5d5d5;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #4e5059;
      }
      span {
        font-weight: 500;
        font-size: 17px;
        line-height: 22px;
        color: #999999;
      }
    }
  }
  hr {
    border: 1px solid #d5d5d5;
  }
`;
const SmallInputContainer = styled.div`
  padding-top: 34px;
  display: flex;
  gap: 40px;
  width: 100%;
`;
const SmallInput = styled.div`
  width: 50%;

  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
  }
  input {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    margin-top: 10px;
    ::placeholder {
      padding-left: 25px;
    }
  }
`;
