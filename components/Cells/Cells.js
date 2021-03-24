import { Container, Content, Title, Subtitle, Grid } from "./style";
import Cell from "./Cell";
import Fade from "react-reveal/Fade";

export default function Cells() {
  return (
    <Container>
      <Content>
        <Fade>
          <Title>Interactua directamente con tus creadores favoritos</Title>
          <Subtitle>
            Hemos creado diferentes opciones para que tu interactues con tus
            creadores favoritos directamente y les demuestres lo fan que eres.
          </Subtitle>
        </Fade>
        <Grid>
          <Fade up>
            <Cell
              icon="/ellipse.svg"
              name="Contenido Exclusivo"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
            />
          </Fade>
          <Fade up>
            <Cell
              icon="/ellipse.svg"
              name="Regalos"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
            />
          </Fade>
          <Fade up>
            <Cell
              icon="/ellipse.svg"
              name="Videos Personalizados"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
            />
          </Fade>
          <Fade up>
            <Cell
              icon="/ellipse.svg"
              name="Chat Privado"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
            />
          </Fade>
          <Fade up>
            <Cell
              icon="/ellipse.svg"
              name="Meet & Greet"
              description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
            />
          </Fade>
        </Grid>
      </Content>
    </Container>
  );
}
