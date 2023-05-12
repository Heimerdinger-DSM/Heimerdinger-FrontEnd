import styled from "@emotion/styled";
import Banner from "./banner";
import News from "./news";
import Search from "./search";
import Header from "../common/header";
import Game from "./game";
import Smcq from "./smcq";
import Footer from "../common/footer";

export default function Main() {
  return (
    <Container>
      <Header />
      <Banner />
      <News />
      <Search />
      <Game />
      <Smcq />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;
