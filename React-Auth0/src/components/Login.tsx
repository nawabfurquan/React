import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

interface Props {
  label: string;
}

const Login = (props: Props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <Button
      variant="contained"
      onClick={() => loginWithRedirect()}
      sx={{ width: "10vw" }}
    >
      {props.label}
    </Button>
  ) : null;
};

export default Login;
