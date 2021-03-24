import { Container, Content, Title, Subtitle, Image } from "./style";

export default function Hero() {
  return (
    <Container>
      <Content>
        <Title>La plataforma ideal para los verdaderos fans.</Title>
        <Subtitle>Accede a contenido único de tus credores favoritos.</Subtitle>
        <Image src="/image-01.svg" />
      </Content>
    </Container>
  );
}
