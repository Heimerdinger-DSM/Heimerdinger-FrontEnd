import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Item() {
  const item = [
    { title: "닉네임", content: "닉네임을 입력해주세요." },
    { title: "아이디", content: "아이디를 입력해주세요." },
    { title: "비밀번호", content: "비밀번호를 입력해주세요." },
    { title: "비밀번호 확인", content: "비밀번호를 다시 입력해주세요." },
  ];
  return (
    <Container>
      <Logo src="/img/signup/logo.png" />
      <Signup>회원가입</Signup>
      <ItemBox>
        <InputItem>
          {item.map((arr, i) => (
            <InputBox key={i}>
              <Title>{arr.title}</Title>
              <Input placeholder={arr.content} type="text" />
            </InputBox>
          ))}
        </InputItem>
        <Button>회원가입</Button>
        <RouteBox>
          <Text>기존 회원이신가요?</Text>
          <Link href="/login">
            <Route>로그인</Route>
          </Link>
        </RouteBox>
      </ItemBox>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;
const Signup = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 800;
  color: ${theme.blackColor};
`;
const ItemBox = styled.div`
  width: 300px;
`;

const InputItem = styled.div`
  width: 100%;
  margin-bottom: 30px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
`;
const Title = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
  color: ${theme.blackColor};
`;
const Input = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 16px;
  border: 1px solid ${theme.thinGrayColor};
  outline: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${theme.whiteColor};
  cursor: pointer;
`;
const Button = styled.button`
  width: 100%;
  height: 46px;
  margin-bottom: 12px;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.whiteColor};
  background-color: ${theme.mainPurpleColor};
  cursor: pointer;
`;
const RouteBox = styled.div`
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
`;
const Text = styled.p`
  color: ${theme.blackColor};
`;
const Route = styled.p`
  text-decoration: underline;
  color: ${theme.mainPurpleColor};
`;
