import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";
import SortBox from "@/components/common/icon/sortBox";
import SortStick from "@/components/common/icon/sortStick";
import PlusIcon from "@/components/common/icon/plusIcon";
import { useState } from "react";
import StarYellow from "../../../public/img/star/yellow.png";
import StarBlack from "../../../public/img/star/black.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function MainCommunication() {
  const [flag, setFlag] = useState<boolean>(true);
  const [star, setStar] = useState<boolean>(true);
  const router = useRouter();
  const clickEvent = (e: any) => {
    e.stopPropagation();
  };
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <TextDiv>
          <h1>소통게시판</h1>
          <p>치매 관련 정보를 나누고 소통해보세요.</p>
        </TextDiv>
        <SortBtnContainer>
          <button
            onClick={() => {
              // window.location.href = "/asdasds"; // <- 새로고침
              router.push("/createCommunication"); // <- 그냥 넘어가 페이지 이동
            }}
          >
            <PlusIcon></PlusIcon> 글 작성하기
          </button>
          <Right>
            <select>
              <option>전체</option>
              <option>중구</option>
              <option>동구</option>
              <option>서구</option>
              <option>유성구</option>
              <option>대덕구</option>
            </select>
            <select>
              <option>최신순</option>
              <option>인기순</option>
            </select>
            <SortBtn>
              <div
                onClick={() => {
                  setFlag(true);
                }}
              >
                <SortBox></SortBox>
              </div>
              <div
                onClick={() => {
                  setFlag(false);
                }}
              >
                <SortStick></SortStick>
              </div>
            </SortBtn>
          </Right>
        </SortBtnContainer>
        {flag ? (
          <BoxContainer>
            <Box
              onClick={() => {
                router.push("/detailCommunication");
              }}
            >
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={(e) => {
                      setStar(!star);
                      clickEvent(e);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
            <Box>
              <BoxDiv>
                <TextContainer>
                  <h1>하이머딩거 프젝 화이팅입니다.</h1>
                  <Image
                    src={star ? StarBlack : StarYellow}
                    onClick={() => {
                      setStar(!star);
                    }}
                    alt=""
                  />
                  <p>10</p>
                </TextContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h3>
                  벌써 40여 년 전이다. 내가 갓 세간난지 얼마 안 돼서 의정부에
                  내려가 살 때다. 서울왔다 가는 길에...
                </h3>
                <h4>2023.03.21</h4>
                <TagDiv>중구</TagDiv>
              </BoxDiv>
            </Box>
          </BoxContainer>
        ) : (
          <StickBarContainer>
            <StickBar>
              <div>
                <TagDiv>중구</TagDiv>
                <h3>하이머딩거 프젝 화이팅입니다.</h3>
              </div>
              <RightContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h4>2023.03.21</h4>
                <Image
                  src={star ? StarBlack : StarYellow}
                  onClick={() => {
                    setStar(!star);
                  }}
                  alt=""
                />
              </RightContainer>
            </StickBar>
            <StickBar>
              <div>
                <TagDiv>중구</TagDiv>
                <h3>하이머딩거 프젝 화이팅입니다.</h3>
              </div>
              <RightContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h4>2023.03.21</h4>
                <Image
                  src={star ? StarBlack : StarYellow}
                  onClick={() => {
                    setStar(!star);
                  }}
                  alt=""
                />
              </RightContainer>
            </StickBar>
            <StickBar>
              <div>
                <TagDiv>중구</TagDiv>
                <h3>하이머딩거 프젝 화이팅입니다.</h3>
              </div>
              <RightContainer>
                <p>
                  파꽃공주님 <span>jungae34</span>
                </p>
                <h4>2023.03.21</h4>
                <Image
                  src={star ? StarBlack : StarYellow}
                  onClick={() => {
                    setStar(!star);
                  }}
                  alt=""
                />
              </RightContainer>
            </StickBar>
          </StickBarContainer>
        )}
      </MainDiv>
      <Footer></Footer>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  background: #f9fafb;
  height: 100%;
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
const SortBtnContainer = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 56px;
  button {
    height: 100%;
    width: 180px;
    background: #7867bf;
    border-radius: 6px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
  float: right;
  gap: 30px;
  select {
    border: 1px solid #eaeaea;
    border-radius: 6px;
    width: 120px;
    height: 44px;
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #222222;
  }
`;
const SortBtn = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 20px;
  cursor: pointer;
`;
const StickBarContainer = styled.div`
  padding-top: 48px;
  display: block;
  width: 100%;
`;
const StickBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-items: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  cursor: pointer;

  > div {
    display: inline-flex;
  }
  h3 {
    margin-left: 50px;
  }
`;
const TagDiv = styled.nav`
  background: #7867bf;
  border-radius: 12px;
  width: 80px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
const RightContainer = styled.div`
  display: flex;
  text-align: right;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 12px;
    color: #4e5059;
    margin-top: 10px;
    span {
      color: #7867bf;
    }
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 12px;
    color: #7867bf;
    margin-left: 40px;
    margin-top: 10px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-left: 34px;
  }
`;
const BoxContainer = styled.div`
  padding-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  gap: 75px;
  width: 100%;
`;
const Box = styled.div`
  width: 280px;
  height: 350px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const BoxDiv = styled.div`
  width: 220px;
  height: 290px;
  position: relative;
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;
    color: #7867bf;
    position: absolute;
    bottom: 1px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 12px;
    color: #4e5059;
    margin-top: 16px;
    span {
      color: #7867bf;
    }
  }
  h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 16px;
    color: #4e5059;
    margin-top: 23px;
    height: 150px;
  }
  nav {
    position: absolute;
    right: 0;
    bottom: -6px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  position: relative;
  h1 {
    width: 190px;
    height: 44px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #4e5059;
  }
  img {
    width: 30px;
    height: 30px;
    display: flex;
    float: right;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #4e5059;
    position: absolute;
    right: 10px;
    top: 18px;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 100px;
`;
