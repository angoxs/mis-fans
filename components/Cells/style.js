import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "120px 90px",

  "@bp1": {
    padding: "90px 20px",
  },
});

export const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const Title = styled("h1", {
  margin: 0,
  color: "white",
  fontSize: 36,
  lineHeight: "115%",
  fontWeight: "bold",

  "@bp1": {
    fontSize: 44,
  },
});

export const Subtitle = styled("p", {
  margin: 0,
  marginTop: 16.88,
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: 19,
  fontWeight: "500",
  lineHeight: "150%",
  maxWidth: 600,

  "@bp1": {
    fontSize: 18,
  },
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  marginTop: 60,
  gridGap: 16,

  "@bp1": {
    gridTemplateColumns: "1fr",
  },
});
