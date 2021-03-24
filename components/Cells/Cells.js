import { Container, Content, Title, Subtitle, Grid } from "./style";
import Cell from "./Cell";

export default function Cells() {
  return (
    <Container>
      <Content>
        <Title>Interactua directamente con tus creadores favoritos</Title>
        <Subtitle>
          Hemos creado diferentes opciones para que tu interactues con tus
          creadores favoritos directamente y les demuestres lo fan que eres.
        </Subtitle>
        <Grid>
          <Cell
            icon="/ellipse.svg"
            name="Contenido Exclusivo"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
          />
          <Cell
            icon="/ellipse.svg"
            name="Contenido Exclusivo"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
          />
          <Cell
            icon="/ellipse.svg"
            name="Contenido Exclusivo"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
          />
          <Cell
            icon="/ellipse.svg"
            name="Contenido Exclusivo"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
          />
          <Cell
            icon="/ellipse.svg"
            name="Contenido Exclusivo"
            description="A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts."
          />
        </Grid>
      </Content>
    </Container>
  );
}
