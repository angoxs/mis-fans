import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "50px 40px",

  "@bp1": {
    padding: "20px",
  },
});

export const Content = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const Logo = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export const Icon = styled("img", {
  width: 24,
  height: 24,
});

export const Name = styled("img", {
  width: 80,
  height: 80,
  marginLeft: 12,

  "@bp1": {
    width: 60,
    height: 30,
    marginLeft: 8,
  },
});

export const CallToAction = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  "@bp1": {
    flexDirection: "column",
    alignItems: "flex-end",
  },
});

export const Text = styled("p", {
  margin: 0,
  color: "white",
  fontSize: 18,
  fontWeight: "500",
  marginRight: 12,

  "@bp1": {
    display: "none",
  },
});

export const Button = styled("button", {
  background: "#6036EE",
  border: "none",
  color: "white",
  fontSize: 18,
  fontWeight: "500",
  borderRadius: 5,
  padding: 10,
  cursor: "pointer",

  "@bp1": {
    fontSize: 16,
    marginTop: 8,
  },
});
