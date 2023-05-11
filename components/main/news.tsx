import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function News() {
  const heimerNewsItem = [
    {
      img: "/img/main/HeimerNewsImg.png",
      title: "게시글 등록",
      text: "게시글을\n등록, 공유할 수 있어요.",
    },
    {
      img: "/img/main/HeimerNewsImg.png",
      title: "댓글 등록",
      text: "게시글에 댓글을\n등록할 수 있어요.",
    },
    {
      img: "/img/main/HeimerNewsImg.png",
      title: "소통 연계",
      text: "타 SNS와의 연계를 도와\n편하게 연락할 수 있어요.",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <HeimerNews>
          <HeimerNewsItemBox>
            <HeimerNewsItemBox>
              <HeimerNewsTextBox>
                <HeimerNewsTitle>하이머소식</HeimerNewsTitle>
                <HeimerNewsText>
                  치매 관련 정보를 작성하고 공유할 수 있어요.
                </HeimerNewsText>
              </HeimerNewsTextBox>
              <HeimerNewsItemList>
                {heimerNewsItem.map((arr, i) => (
                  <HeimerNewsItem>
                    <HeimerNewsimg src={arr.img}></HeimerNewsimg>
                    <HeimerNewsItemListTextBox>
                      <HeimerNewsItemTitle>{arr.title}</HeimerNewsItemTitle>
                      <HeimerNewsItemText>{arr.text}</HeimerNewsItemText>
                    </HeimerNewsItemListTextBox>
                  </HeimerNewsItem>
                ))}
              </HeimerNewsItemList>
            </HeimerNewsItemBox>
          </HeimerNewsItemBox>
        </HeimerNews>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 730px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const HeimerNews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const HeimerNewsItemBox = styled.div`
  width: 880px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HeimerNewsTextBox = styled.div``;
const HeimerNewsTitle = styled.h1`
  margin-bottom: 8px;
`;
const HeimerNewsText = styled.h4`
  color: ${theme.mainPurpleColor};
  font-weight: 500;
`;
const HeimerNewsItemList = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeimerNewsItem = styled.div`
  width: 280px;
  height: 450px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: 1px solid #d5d5d5;
`;
const HeimerNewsimg = styled.img`
  width: 100%;
`;
const HeimerNewsItemListTextBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  flex-direction: column;
  height: 170px;
`;
const HeimerNewsItemTitle = styled.h1`
  font-size: 18px;
`;
const HeimerNewsItemText = styled.p`
  white-space: pre-wrap;
  text-align: center;
  font-size: 16px;
  color: ${theme.nineGrayColor};
`;
