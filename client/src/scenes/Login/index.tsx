import { Container, Box, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";
import SubmitButton from "src/shared/SubmitButton";
import { UserType } from "src/shared/types";
import { useNavigate } from "react-router";
import { useState } from "react";

type Props = {
  setUser: (user: UserType) => void;
};

const Login = ({ setUser }: Props) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [psw, setPsw] = useState<string>("");
  const [role, setRole] = useState<string>("admin");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("username: ", userName);
    // console.log("psw: ", psw);
    // console.log("role: ", role);

    if (userName === "mirandabai" && psw === "mirandabai") {
      setUser({
        userName: userName,
        password: psw,
        role: role,
      });
      navigate("/");
    } else if (userName === "123456" && psw === "123456") {
      setUser({
        userName: userName,
        password: psw,
        role: role,
      });
      navigate("/");
    } else {
      setUserName("wrong user name or password!");
      setPsw("");
    }
  };

  return (
    <main className="w-full h-full flex items-center justify-center">
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
          onSubmit={handleLogin}
          sx={{
            
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
                id="username-required"
                label="Required"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="m-4 flex items-center">
              <i className="fa-solid fa-lock text-lg mr-2"></i>
              <TextField
                required
                id="psw-required"
                label="Required"
                placeholder="Password"
                type="password"
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
              />
            </div>

            <div className="text-center">
              <SubmitButton
                type="submit"
                startIcon={<SendIcon sx={{ transform: "rotate(-45deg)" }} />}
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
