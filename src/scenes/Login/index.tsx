import { Container, Box, TextField} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "src/shared/SubmitButton";

type Props = {};

const Login = (props: Props) => {
  const handleLogin = () => {};

  return (
    <main className="w-full h-full bg-amber-100 flex items-center justify-center">
      <div className="fixed top-0 right-0 pr-2 md:pr-4 pt-1">
        <a
          href="https://github.com/Miranda-Bai"
          target="_blank"
          rel="noreferrer"
          about="github"
        >
          <GitHubIcon fontSize="large" />
          {/* <i className="fa-brands fa-github text-xl sm:text-3xl"></i> */}
        </a>
      </div>

      <Container maxWidth="sm">
        <Box
          component="form"
          sx={{
            bgcolor: "rgb(254 243 199)",
            // height: "50vh",
            borderRadius: "10px",
            "& .MuiTextField-root": { m: 1, width: "90%" },
          }}
          autoComplete="off"
        >
          <div className="flex-col justify-between items-center p-4">
            <div className="m-4 flex items-center">
              <i className="fa-solid fa-user text-lg mr-2"></i>
              <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder="Username"
                defaultValue=""
              />
            </div>
            <div className="m-4 flex items-center">
              <i className="fa-solid fa-lock text-lg mr-2"></i>
              <TextField
                required
                id="outlined-required"
                label="Required"
                placeholder="Password"
                defaultValue=""
              />
            </div>
            <div className="text-center">
              <SubmitButton
                startIcon={<SendIcon sx={{ transform: "rotate(-45deg)" }} />}
                onClick={handleLogin}
              >
                Login
              </SubmitButton>
            </div>
          </div>
        </Box>
      </Container>
    </main>
  );
};

export default Login;
