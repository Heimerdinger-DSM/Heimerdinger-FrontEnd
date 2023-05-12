import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Search() {
  return (
    <Container>
      <Wrapper>
        <SearchHospital>
          <SearchHospitalContent>
            <SearchHospitalTextBox>
              <SearchHospitalTitle>
                내 주변 시설 정보를
                <br />
                찾아볼 수 있습니다.
              </SearchHospitalTitle>
              <SearchHospitaltext>
                치매시설을 검색하고,
                <br />
                리뷰와 별점 기능을 통해 정보를 확인할 수 있어요.
              </SearchHospitaltext>
              <SearchHospitalDetails>자세히보기&gt;</SearchHospitalDetails>
            </SearchHospitalTextBox>
            <SearchHospitalItems>
              <SearchHospitalInput
                type="text"
                placeholder="시설명을 검색해주세요"
              ></SearchHospitalInput>
              <SearchHospitalBtns>
                <SearchHospitalBtnLong>우리동네</SearchHospitalBtnLong>
                <SearchHospitalBtnLong>치매시설</SearchHospitalBtnLong>
                <SearchHospitalBtnShort>빠른</SearchHospitalBtnShort>
                <SearchHospitalBtnShort>검색</SearchHospitalBtnShort>
              </SearchHospitalBtns>
            </SearchHospitalItems>
          </SearchHospitalContent>
        </SearchHospital>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 384px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const SearchHospital = styled.div`
  width: 100%;
  height: 384px;
  background-color: ${theme.lightPurpleColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchHospitalContent = styled.div`
  width: 880px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchHospitalTextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const SearchHospitalTitle = styled.h1`
  font-size: 36px;
  @media (max-width: 1200px) {
    font-size: 32px;
  }
  color: ${theme.strongGrayColor};
`;
const SearchHospitaltext = styled.h4`
  font-size: 16px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  font-weight: 500;
  color: ${theme.strongGrayColor};
`;
const SearchHospitalDetails = styled.a`
  color: ${theme.mainNavyColor};
  font-weight: 700;
  font-size: 1rem;
`;
const SearchHospitalItems = styled.div`
  width: 414px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SearchHospitalInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 18px;
  border-radius: 10px 10px 10px 30px;
  border: 2px solid ${theme.thinGrayColor};
  outline: none;
  text-indent: 38px;
`;
const SearchHospitalBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchHospitalBtnLong = styled.div`
  width: 112px;
  height: 40px;
  background-color: ${theme.mainPurpleColor};
  color: ${theme.whiteColor};
  border-radius: 16px 4px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SearchHospitalBtnShort = styled.div`
  width: 82px;
  height: 40px;
  background-color: ${theme.mainPurpleColor};
  color: ${theme.whiteColor};
  border-radius: 16px 4px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
