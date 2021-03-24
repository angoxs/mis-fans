import {
  Container,
  Box,
  Title,
  Subtitle,
  Button,
  Face01,
  Face02,
} from "./style";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function CTA() {
  return (
    <Container>
      <Zoom>
        <Box>
          <Face01 src="/face-01.png" />
          <Face02 src="/face-02.png" />
          <Title>Eres creador de contenido?</Title>
          <Subtitle>
            Mis Fans te permite crear una comunidad para interacturar con tus
            verdaderos fans.
          </Subtitle>
          <Button>Regístrate</Button>
        </Box>
      </Zoom>
    </Container>
  );
}
