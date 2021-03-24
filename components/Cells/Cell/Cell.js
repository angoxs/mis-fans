import { styled } from "../../../stitches.config";

const Frame = styled("div", {
  background: "#161616",
  padding: 30,
  borderRadius: 12,
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  textAlign: "left",

  "@bp1": {
    padding: 20,
  },
});

const Icon = styled("img", {
  width: 44,
  height: 44,
});

const Name = styled("h4", {
  color: "white",
  fontSize: 16,
  margin: 0,
  marginTop: 30,
  marginBottom: 20,
});

const Description = styled("p", {
  color: "rgba(255, 255, 255, 0.8)",
  fontSize: 14,
  margin: 0,
});

export default function Cell(props) {
  return (
    <Frame>
      <Icon src={props.icon} />
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>
    </Frame>
  );
}
