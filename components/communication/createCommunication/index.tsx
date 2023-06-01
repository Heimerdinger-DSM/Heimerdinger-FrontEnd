import styled from "@emotion/styled";
import Link from "next/link";
import Header from "@/components/common/header";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function CreateCommunication() {
  const [snsLink, setSnsLink] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [isTitle, setIsTitle] = useState<boolean>(false);
  const [isContent, setIsContent] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isSnsLink, setIsSnsLink] = useState<boolean>(true);

  const [titleMessage, setTitleMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [contentMessage, setContentMessage] = useState<string>("");
  const [snsLinkMessage, setSnsLinkMessage] = useState<string>("");

  const districtList: string[] = ["중구", "동구", "서구", "유성구", "대덕구"];
  const router = useRouter();
  const [flag, setFlag] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const district = districtList.map((list, i) => (
    <div
      key={i}
      onClick={() => {
        setFlag(flag.map((e, idx) => i === idx));
      }}
    >
      {flag[i] ? <PointerTag>{list}</PointerTag> : <Tag>{list}</Tag>}
    </div>
  ));
  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
      if (e.target.value.length < 1 || e.target.value.length > 20) {
        setTitleMessage("1글자 이상 20글자 이하로 입력해주세요.");
        setIsTitle(false);
      } else {
        setTitleMessage("올바른 제목 형식이에요 : )");
        setIsTitle(true);
      }
    },
    []
  );
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
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEmail(emailCurrent);

      if (emailCurrent === "") {
        setEmailMessage("");
        setIsEmail(true);
      } else if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅇㅁㅇ!!");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 형식이에요 : )");
        setIsEmail(true);
      }
    },
    []
  );
  const onChangeSnsLink = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const snsLinkRegex = /^http[s]?:\/\/([\S]{3,})/i;
      const snsLinkCurrent = e.target.value;
      setSnsLink(snsLinkCurrent);

      if (snsLinkCurrent === "") {
        setSnsLinkMessage("");
        setIsSnsLink(true);
      } else if (!snsLinkRegex.test(snsLinkCurrent)) {
        setSnsLinkMessage("Link 형식이 틀렸어요! 다시 확인해주세요 ㅇㅁㅇ!!");
        setIsSnsLink(false);
      } else {
        setSnsLinkMessage("올바른 Link 형식이에요 : )");
        setIsSnsLink(true);
      }
    },
    []
  );
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
            <input
              placeholder="연락할 수 있는 SNS 링크를 입력해주세요."
              value={snsLink}
              onChange={(e) => {
                onChangeSnsLink(e);
              }}
            />
            {snsLink.length > 0 && (
              <span className={`message ${isSnsLink ? "success" : "error"}`}>
                {snsLinkMessage}
              </span>
            )}
          </SmallInput>
          <SmallInput>
            <h4>이메일</h4>
            <input
              placeholder="이메일 주소를 입력해주세요."
              value={email}
              onChange={(e) => {
                onChangeEmail(e);
              }}
            />
            {email.length > 0 && (
              <span className={`message ${isEmail ? "success" : "error"}`}>
                {emailMessage}
              </span>
            )}
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
        <TagContainer>{district}</TagContainer>
        <TitleInput>
          <h4>
            제목<span>*</span>
          </h4>
          <input
            placeholder="글 제목을 입력해주세요."
            onChange={(e) => {
              onChangeTitle(e);
            }}
            required
          />
          {title.length > 0 && (
            <span className={`message ${isTitle ? "success" : "error"}`}>
              {titleMessage}
            </span>
          )}
        </TitleInput>
        <ContentInput>
          <h4>
            내용<span>*</span>
          </h4>
          <textarea
            placeholder="글 내용을 입력해주세요."
            onChange={(e) => {
              onChangeContent(e);
            }}
            required
          />
          {content.length > 0 && (
            <span className={`message ${isContent ? "success" : "error"}`}>
              {contentMessage}
            </span>
          )}
        </ContentInput>
        <CreateBtn
          type="submit"
          onClick={() => {
            if (
              flag.includes(true) &&
              isContent &&
              isTitle &&
              isEmail &&
              isSnsLink
            ) {
              router.push("/mainCommunication");
            } else {
              alert("제대로 채워주세요");
            }
          }}
        >
          글 등록하기
        </CreateBtn>
      </MainDiv>
      <Footer></Footer>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
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
  margin-top: 74px;
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
    font-size: 18px;
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
    padding-left: 20px;
    font-size: 16px;
    font-family: "Inter";
    font-style: normal;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
const TagContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 35px;
`;
const Tag = styled.div`
  width: 80px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px 12px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #4e5059;
  cursor: pointer;
`;
const PointerTag = styled(Tag)`
  background: #7867bf;
  color: #fff;
  border-radius: 12px 12px 4px 12px;
`;
const TitleInput = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 30px;
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
    color: #222;
    span {
      color: #d80000;
    }
  }
  input {
    width: 100%;
    height: 70px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 10px;
    padding-left: 20px;
    font-size: 18px;
    font-family: "Inter";
    font-style: normal;
    ::placeholder {
      font-size: 17px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
    }
  }
`;
const ContentInput = styled(TitleInput)`
  width: 100%;
  height: 359px;
  padding-top: 40px;
  textarea {
    width: 100%;
    height: 330px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 10px;
    padding: 20px;
    font-size: 18px;
    font-family: "Inter";
    font-style: normal;
    ::placeholder {
      font-size: 17px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }
  }
`;
const CreateBtn = styled.button`
  width: 400px;
  height: 60px;
  background: #7867bf;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin: 100px auto 0;
  cursor: pointer;
`;
const Footer = styled.div`
  width: 100%;
  height: 100px;
`;
