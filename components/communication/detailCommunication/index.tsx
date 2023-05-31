import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";
import { useState, useCallback } from "react";

export default function DetailCommunication() {
  const [content, setContent] = useState<string>("");
  const [isContent, setIsContent] = useState<boolean>(false);
  const [contentMessage, setContentMessage] = useState<string>("");

  interface writingProps {
    user: string;
    tag: string;
    snsLink: string;
    email: string;
    id: string;
    title: string;
    content: string;
  }
  const [writing, setWriting] = useState<writingProps>({
    title: "파꽃나라 파꽃공주님",
    tag: "중구",
    snsLink: "https://google.sdkljflskjflsjfl",
    email: "pjungae0423@dsm.hs.kr",
    user: "파꽃공주",
    id: "jungae34",
    content:
      "are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it? are you got it?",
  });
  interface commentsProps {
    user: string;
    id: string;
    content: string;
  }
  const [comments, setComments] = useState<commentsProps[]>([
    {
      user: "파꽃공주",
      id: "jungae34",
      content:
        "벌써 40여 년 전이다. 내가 갓 세간난 지 얼마 안 돼서 의정부에 내려가 살 때다. 서울 왔다 가는 길에, 청량리역으로 가기 위해 동대문에서 일단 전차를 내려야 했다. 동대문 맞은편 길가에 앉아서 방망이를 깎아 파는 노인이 있었다. 방망이를 한 벌 사 가지고 가려고 깎아 달라고 부탁을 했다. 값을 굉장히 비싸게 부르는 것 같았다.",
    },
    {
      user: "백설공주",
      id: "ando204",
      content:
        "벌써 40여 년 전이다. 내가 갓 세간난 지 얼마 안 돼서 의정부에 내려가 살 때다. 서울 왔다 가는 길에, 청량리역으로 가기 위해 동대문에서 일단 전차를 내려야 했다. 동대문 맞은편 길가에 앉아서 방망이를 깎아 파는 노인이 있었다. 방망이를 한 벌 사 가지고 가려고 깎아 달라고 부탁을 했다. 값을 굉장히 비싸게 부르는 것 같았다.",
    },
    {
      user: "재민공주",
      id: "jaemin532",
      content:
        "벌써 40여 년 전이다. 내가 갓 세간난 지 얼마 안 돼서 의정부에 내려가 살 때다. 서울 왔다 가는 길에, 청량리역으로 가기 위해 동대문에서 일단 전차를 내려야 했다. 동대문 맞은편 길가에 앉아서 방망이를 깎아 파는 노인이 있었다. 방망이를 한 벌 사 가지고 가려고 깎아 달라고 부탁을 했다. 값을 굉장히 비싸게 부르는 것 같았다.",
    },
  ]);
  const CommentsDiv = ({ list }: { list: commentsProps }) => {
    return (
      <CommentsBox>
        <p>
          <span>{`${list.user}님 `}</span>
          {list.id}
          <br />
          2023.03.21
        </p>
        <h4>{list.content}</h4>
        <hr />
      </CommentsBox>
    );
  };
  const onChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
      if (e.target.value.length < 1 || e.target.value.length > 255) {
        setContentMessage("1글자 이상 255글자 이하로 입력해주세요.");
        setIsContent(false);
      } else {
        setContentMessage("올바른 내용 형식이에요 : )");
        setIsContent(true);
      }
    },
    []
  );
  return (
    <Page>
      <Header></Header>
      <MainDiv>
        <TitleDiv>
          <h1>
            {writing.title}&nbsp;<nav>{writing.tag}</nav>
          </h1>
          <TitlePDiv>
            <p>
              <span>카카오톡 오픈 채팅ㅤ</span>
              {writing.snsLink}
            </p>
            <p>
              <span>이메일ㅤ</span>
              {writing.email}
            </p>
          </TitlePDiv>
          <DateDiv>
            <p>
              <span>{`${writing.user}님`}</span> {writing.id} | 2023.03.21
            </p>
          </DateDiv>
          <hr />
        </TitleDiv>
        <ContentsDiv>
          <p>{writing.content}</p>
          <hr />
        </ContentsDiv>
        <CommentsInputDiv>
          <h4>{`${comments.length}개의 댓글이 있습니다.`}</h4>
          <textarea
            placeholder="댓글을 입력해주세요."
            value={content}
            onChange={(e) => {
              onChangeContent(e);
            }}
          />
          {content.length > 0 && (
            <span className={`message ${isContent ? "success" : "error"}`}>
              {contentMessage}
            </span>
          )}
          <button
            onClick={() => {
              isContent ? setContent("") : alert("제대로 채워주세요");
            }}
          >
            댓글 등록
          </button>
        </CommentsInputDiv>
        <CommentsContainer>
          {comments.map((list, index) => (
            <CommentsDiv key={index} list={list}></CommentsDiv>
          ))}
        </CommentsContainer>
        <Footer></Footer>
      </MainDiv>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  background: #f9fafb;
  height: 100%;
`;
const MainDiv = styled.div`
  width: 65%;
  margin: auto;
`;
const TitleDiv = styled.div`
  position: relative;
  h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    color: #222222;
    display: flex;
    margin-top: 56px;
    nav {
      width: 80px;
      height: 40px;
      background: #7867bf;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
  hr {
    margin-top: 20px;
    border: 1px solid #999;
  }
`;
const TitlePDiv = styled.div`
  margin-top: 25px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    margin-top: 12px;
    span {
      color: #4e5059;
    }
  }
`;
const DateDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 22px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #999;
    span {
      color: #4e5059;
      font-weight: 700;
    }
  }
`;
const ContentsDiv = styled.div`
  margin-top: 30px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    color: #222222;
  }
  hr {
    margin-top: 100px;
  }
`;
const CommentsInputDiv = styled.div`
  margin-top: 40px;
  display: block;
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 22px;
    color: #222222;
  }
  textarea {
    background: #ffffff;
    width: 100%;
    height: 140px;
    border: 1px solid #999999;
    border-radius: 10px;
    margin-top: 25px;
    display: block;
    padding: 20px;
    font-family: "Inter";
    font-style: normal;

    font-size: 16px;
    ::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #999999;
    }
  }
  button {
    width: 150px;
    height: 50px;
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    background: #7867bf;
    border-radius: 6px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    cursor: pointer;
  }
`;
const CommentsContainer = styled.div`
  margin-top: 150px;
`;
const CommentsBox = styled.div`
  width: 100%;
  height: 160px;
  margin-bottom: 80px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #999999;
    span {
      font-weight: 700;
      color: #4e5059;
    }
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #222222;
    margin-top: 20px;
  }
  hr {
    border: 1px solid #999999;
    margin-top: 30px;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 70px;
`;
