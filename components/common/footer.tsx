import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import Link from "next/link";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <TextBox>
          <Logo src="/img/footer/HeimerDingerLogoWhite.png"></Logo>
          <TeamName>@2023 Team.파꽃</TeamName>
          <AlliumFlowersInfo>
            개인 정보 처리 방침 | 이용약관 (34111)
            <br />
            대전광역시 유성구 가정북로 76(장동 23-9)
            <br />
            이메일: heimerdinger@gmail.com
          </AlliumFlowersInfo>
          <Developer>Developer</Developer>
        </TextBox>
        <SiteBox>
          <Site>
            <Img src="/img/footer/People.png"></Img>
          </Site>
          <Site>
            <Img src="/img/footer/Notion.png"></Img>
          </Site>
          <Site>
            <Img src="/img/footer/Github.png"></Img>
          </Site>
        </SiteBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 320px;
  background-color: ${theme.strongGrayColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 880px;
  height: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.whiteColor};
`;
const TextBox = styled.div`
  width: 352px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 110px;
`;
const TeamName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.whiteColor};
`;
const AlliumFlowersInfo = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.whiteColor};
`;
const Developer = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.whiteColor};
`;
const SiteBox = styled.div`
  width: 180px;
  height: 190px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Site = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.whiteColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 64%;
`;
