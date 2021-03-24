import { Container, Content, Title, Subtitle, Image } from "./style";
import Fade from "react-reveal/Fade";

export default function Hero() {
  return (
    <Container>
      <Content>
        <Fade>
          <Title>La plataforma ideal para los verdaderos fans.</Title>
          <Subtitle>
            Accede a contenido único de tus credores favoritos.
          </Subtitle>
        </Fade>
        <Fade up>
          <Image src="/image-01.svg" />
        </Fade>
      </Content>
    </Container>
  );
}
