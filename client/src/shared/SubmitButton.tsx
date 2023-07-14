import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const SubmitButton = styled(Button)({
  color: "#5E0000",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#FFC132",
  borderColor: "#FFC132",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#FF6B66",
    borderColor: "#FF6B66",
    color:"#fcf5f5",
    boxShadow: "none",
  },
  "&:active": {
    // boxShadow: "none",
    // backgroundColor: "#0062cc",
    // borderColor: "#005cbf",
  },
  "&:focus": {
    // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default SubmitButton;
