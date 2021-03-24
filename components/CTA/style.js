import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "120px",

  "@bp1": {
    padding: "90px 20px",
  },
});

export const Box = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  background: "linear-gradient(129.57deg, #6036EE 14.24%, #8662FF 87.95%)",
  borderRadius: 6,
  padding: 76,
  width: "100%",
  position: "relative",

  "@bp1": {
    padding: 60,
  },
});

export const Title = styled("h1", {
  margin: 0,
  color: "white",
  fontSize: 36,
  lineHeight: "115%",
  fontWeight: "bold",
});

export const Subtitle = styled("p", {
  margin: 0,
  marginTop: 16.88,
  marginBottom: 30,
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: 19,
  fontWeight: "500",
  lineHeight: "150%",
  maxWidth: 600,

  "@bp1": {
    fontSize: 18,
  },
});

export const Button = styled("button", {
  background: "white",
  borderRadius: 5,
  padding: "18px 50px",
  fontSize: 18,
  color: "rgba(96,54,238,1)",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
});

export const Face01 = styled("img", {
  position: "absolute",
  top: "-80px",
  left: "-80px",

  "@bp1": {
    top: "-60px",
    left: "-20px",
    width: 90,
  },
});

export const Face02 = styled("img", {
  position: "absolute",
  bottom: "-80px",
  right: "-100px",

  "@bp1": {
    bottom: "-60px",
    right: "-20px",
    width: 90,
  },
});
