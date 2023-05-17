import CardGame from "@/components/card/gameCard/cardGame";
import CardMenu from "@/components/card/gameCard/cardMenu";
import { theme } from "@/styles/theme";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Cover>
      <Container>
        <CardGame />
        <CardMenu />
      </Container>
    </Cover>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.backgroundColor};
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
