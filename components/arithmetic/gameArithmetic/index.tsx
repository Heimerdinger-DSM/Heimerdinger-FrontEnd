import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";
import SkipIcon from "@/components/common/icon/skipIcon";
import StopIcon from "@/components/common/icon/stopIcon";
import SuccessPrompt from "@/components/common/successPrompt";
import FailPrompt from "@/components/common/failPrompt";
import { useRouter } from "next/router";
import { useState } from "react";

export default function GameArithmetic() {
  const query: string = useRouter().query.id as string;
  const [cnt, setCnt] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(true);
  let num: number = 11;
  let arr1: number[] = [];
  let arr2: number[] = [];
  let gameList: string[] = [];
  let answer: number[] = [];

  function step1() {
    while (num > 0) {
      let tmp1: number = Math.floor(Math.random() * (9 - 1)) + 1;
      arr1.push(tmp1);
      let tmp2: number = Math.floor(Math.random() * (9 - 1)) + 1;
      arr2.push(tmp2);
      num -= 1;
    }
    for (let i = 0; arr1.length > i; i++) {
      if (arr1[i] <= arr2[i]) {
        gameList.push(arr1[i] + " + " + arr2[i]);
        answer.push(arr1[i] + arr2[i]);
      } else {
        gameList.push(arr1[i] + " - " + arr2[i]);
        answer.push(arr1[i] - arr2[i]);
      }
    }
  }
  function step2() {
    while (num > 0) {
      let numm1 = Math.floor(Math.random() * (9 - 1)) + 1;
      arr1.push(numm1);
      let numm2 = Math.floor(Math.random() * (9 - 1)) + 1;
      arr2.push(numm2);
      num -= 1;
    }
    for (let i = 0; arr1.length > i; i++) {
      if (arr1[i] % arr2[i] == 0 && arr2[i] != 1) {
        gameList.push(arr1[i] + " ÷ " + arr2[i]);
        answer.push(arr1[i] / arr2[i]);
      } else if (arr1[i] >= arr2[i]) {
        gameList.push(arr1[i] + " - " + arr2[i]);
        answer.push(arr1[i] - arr2[i]);
      } else {
        if (i % 2) {
          gameList.push(arr1[i] + " + " + arr2[i]);
          answer.push(arr1[i] + arr2[i]);
        } else {
          gameList.push(arr1[i] + " × " + arr2[i]);
          answer.push(arr1[i] * arr2[i]);
        }
      }
    }
  }
  function step3() {
    while (num > 0) {
      let numm1 = Math.floor(Math.random() * (99 - 10)) + 10;
      arr1.push(numm1);
      let numm2 = Math.floor(Math.random() * (99 - 10)) + 10;
      arr2.push(numm2);
      num -= 1;
    }
    for (let i = 0; arr1.length > i; i++) {
      if (arr1[i] <= arr2[i]) {
        gameList.push(arr1[i] + " + " + arr2[i]);
        answer.push(arr1[i] + arr2[i]);
      } else {
        gameList.push(arr1[i] + " - " + arr2[i]);
        answer.push(arr1[i] - arr2[i]);
      }
    }
  }
  function step4() {
    while (num > 0) {
      let numm1 = Math.floor(Math.random() * (99 - 10)) + 10;
      arr1.push(numm1);
      let numm2 = Math.floor(Math.random() * (9 - 1)) + 1;
      arr2.push(numm2);
      num -= 1;
    }
    for (let i = 0; arr1.length > i; i++) {
      if (arr1[i] % arr2[i] == 0) {
        gameList.push(arr1[i] + " ÷ " + arr2[i]);
        answer.push(arr1[i] / arr2[i]);
      } else {
        gameList.push(arr1[i] + " × " + arr2[i]);
        answer.push(arr1[i] * arr2[i]);
      }
    }
  }
  function step5() {
    while (num > 0) {
      let numm1 = Math.floor(Math.random() * (99 - 10)) + 10;
      arr1.push(numm1);
      let numm2 = Math.floor(Math.random() * (99 - 10)) + 10;
      arr2.push(numm2);
      num -= 1;
    }
    for (let i = 0; arr1.length > i; i++) {
      if (arr1[i] % arr2[i] == 0 && arr2[i] != 1) {
        gameList.push(arr1[i] + " ÷ " + arr2[i]);
        answer.push(arr1[i] / arr2[i]);
      } else if (arr1[i] >= arr2[i]) {
        gameList.push(arr1[i] + " - " + arr2[i]);
        answer.push(arr1[i] - arr2[i]);
      } else {
        if (i % 2) {
          gameList.push(arr1[i] + " + " + arr2[i]);
          answer.push(arr1[i] + arr2[i]);
        } else {
          gameList.push(arr1[i] + " × " + arr2[i]);
          answer.push(arr1[i] * arr2[i]);
        }
      }
    }
  }
  function game() {
    if (query == "1") {
      step1();
    } else if (query == "2") {
      step2();
    } else if (query == "3") {
      step3();
    } else if (query == "4") {
      step4();
    } else {
      step5();
    }
  }
  game();
  const randomNumber = (defaultNum: number) => {
    return Array.from({ length: 31 }, (_, i) => {
      if (i - 15 + defaultNum !== defaultNum) return i - 15 + defaultNum;
    });
  };

  const readValue: any = (value: number[]) => {
    return value;
  };

  function randomSort() {
    return Math.random() - 0.5;
  }

  const question = gameList.map((item, index) => {
    let arr = randomNumber(answer[index]).filter(readValue);
    arr.sort(randomSort);

    return {
      q: item + " = ?",
      a: [arr[0], arr[1], answer[index]].sort((a, b) => {
        a = a as number;
        b = b as number;
        return a - b;
      }),
      c: answer[index],
    };
  });

  return (
    <Page>
      <Header></Header>
      <MainDiv>
        {cnt + 1 > 10 ? (
          <>
            {flag ? (
              <SuccessPrompt message={query} setCnt={setCnt} />
            ) : (
              <FailPrompt message={query} setCnt={setCnt}/>
            )}
          </>
        ) : (
          <></>
        )}
        <TextBox>
          <h1>랜덤 사칙연산 {query}단계</h1>
          <p>한 자리 수 (+, -) 문제가 나옵니다.</p>
        </TextBox>
        <BtnContainer>
          <Btn
            onClick={() => {
              setFlag(false);
              setCnt(cnt + 1);
            }}
          >
            <SkipIcon></SkipIcon>
            <p>건너뛰기</p>
          </Btn>
          <Link href="/mainArithmetic">
            <Btn2>
              <StopIcon></StopIcon>
              <p>
                <a>그만두기</a>
              </p>
            </Btn2>
          </Link>
        </BtnContainer>
        <QustionMainDiv>
          <p>연산식을 보고 아래 3개의 카드 중 정답을 선택해주세요</p>
          <Cnt>{cnt + 1}/10</Cnt>
          <h1>{question[cnt].q}</h1>
          <AnswerContainer>
            {question[cnt].a.map((e) => (
              <>
                <AnswerBlock
                  onClick={() => {
                    if (cnt + 1 === 10) {
                      setCnt(cnt + 1);
                    } else {
                      if (e === question[cnt].c) {
                        setCnt(cnt + 1);
                      } else {
                        setFlag(false);
                        setCnt(cnt + 1);
                      }
                    }
                  }}
                >
                  <div>{e}</div>
                </AnswerBlock>
              </>
            ))}
          </AnswerContainer>
        </QustionMainDiv>
      </MainDiv>
    </Page>
  );
}
const Page = styled.div`
  background: #f9fafb;
  height: 100vh;
  width: 100vw;
`;
const MainDiv = styled.div`
  width: 1052.5px;
  height: 753.5px;
  margin: 0 auto;
`;
const TextBox = styled.div`
  padding-top: 45px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 35.7px;
    line-height: 43px;
    color: #4e5059;
    padding-bottom: 14px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17.8px;
    line-height: 22px;
    color: #999999;
    padding-bottom: 28.23px;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 15.63px;
  a {
    text-decoration: none;
  }
`;
const Btn = styled.div`
  cursor: pointer;
  width: 234.4px;
  height: 60.3px;
  background: #ffffff;
  border: 1.1px solid #eaeaea;
  box-shadow: 0px 2.23px 4.46px rgba(0, 0, 0, 0.2);
  border-radius: 4.46px;
  display: flex;
  align-items: center;
  padding-left: 16.74px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20.0945px;
    line-height: 24px;
    color: #222222;
  }
`;
const Btn2 = styled(Btn)`
  p {
    margin-left: 7px;
  }
  a {
    text-decoration: none;
  }
`;
const QustionMainDiv = styled.div`
  margin-top: 45px;
  width: 1051px;
  height: 525.5px;
  background: #fff;
  border: 1.2px solid #eaeaea;
  box-shadow: 0px 2.4px 4.77px rgba(0, 0, 0, 0.2);
  border-radius: 11.94px;
  position: relative;
  p {
    padding-top: 59.7px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 21.5px;
    line-height: 29px;
    color: #222222;
    width: 538px;
    margin: 0 auto;
  }
  h1 {
    padding-top: 71px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 71.65px;
    line-height: 87px;
    color: #222222;
    width: 400px;
    margin: 0 auto;
  }
`;
const Cnt = styled.div`
  position: absolute;
  top: 59.7px;
  right: 83.77px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 21.5px;
  line-height: 29px;
  color: #222222;
`;
const AnswerContainer = styled.div`
  display: flex;
  padding-top: 67px;
  gap: 95.5px;
  margin: 0 auto;
  width: 650px;
`;
const AnswerBlock = styled.div`
  cursor: pointer;
  border: 2.4px solid #7867bf;
  border-radius: 9.55px;
  width: 155px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 59.71px;
    color: #47467b;
  }
`;
