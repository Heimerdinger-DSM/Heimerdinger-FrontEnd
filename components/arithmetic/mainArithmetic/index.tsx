import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";
export default function MainArithmetic() {
  const numList: string[] = [
    "한 자리 수(+, -)",
    "한 자리 수(+, -, *, /)",
    "두 자리 수(+, -)",
    "두 자리 수 (*, /) 한 자리 수",
    "All 랜덤",
  ];
  const boxList = numList.map((list, index) => (
    <Box key={index}>
      <Step>
        <Text>
          <h2>{index + 1 + "단계"}</h2>
          <p>{list}</p>
        </Text>
        <Link href={`/gameArithmetic?id=${index+1}`}>시작하기&gt;</Link>
      </Step>
    </Box>
  ));
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <TextBox>
          <h1>랜덤 사칙연산</h1>
          <p>랜덤으로 사칙연산 문제를 해결하는 문제입니다</p>
        </TextBox>
        <BoxContainer>{boxList}</BoxContainer>
      </MainDiv>
    </Page>
  );
}
const Page = styled.div`
  background: #f9fafb;
  width: 100vw;
  height:100vh;
`;
const MainDiv = styled.div`
  width: 1320px;
  margin: auto;
`;
const TextBox = styled.div`
  width: 555px;
  height: 105.5px;
  margin: 84px 0 100px 0;
  h1 {
    font-size: 48px;
    line-height: 58px;
    font-weight: 700;
    color: #4e5059;
    font-family: "Inter";
    font-style: normal;
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #999999;
    font-family: "Inter";
    font-style: normal;
  }
`;
const Box = styled.div`
  width: 420px;
  height: 127.69px;
  box-shadow: 0px 1.5px 15px 0px #00000040;
  padding-top: 30px;
  padding-left: 33px;
  margin: 0;
  position: relative;
`;
const Step = styled.div`
  a {
    text-decoration: none;
    color: #7867bf;
    font-weight: 700;
    font-size: 21.0318px;
    line-height: 25px;
    position: absolute;
    bottom: 30px;
    left: 294px;
    font-family: "Inter";
    font-style: normal;
  }
`;
const Text = styled.div`
  padding-left: 0px;
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    padding-bottom: 6px;
    font-family: "Inter";
    font-style: normal;
  }
  p {
    color: #999999;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    font-family: "Inter";
    font-style: normal;
  }
`;
const BoxContainer = styled.div`
  width: 1320px;
  height: 315.48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 60px;
`;
