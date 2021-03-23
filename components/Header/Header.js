import {
  Container,
  Content,
  Logo,
  Icon,
  Name,
  CallToAction,
  Text,
  Button,
} from "./style";

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <Icon src="/icons/heart.svg" />
          <Name src="/logo-name.svg" />
        </Logo>
        <CallToAction>
          <Text>¿Eres creador de contenido?</Text>
          <Button>Regístrate</Button>
        </CallToAction>
      </Content>
    </Container>
  );
}
