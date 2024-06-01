import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

interface Props {
  label: string;
}

const Logout = (props: Props) => {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Button variant="contained" onClick={() => logout()} sx={{ width: "10vw" }}>
      {props.label}
    </Button>
  ) : null;
};

export default Logout;
