import { Button } from "@mui/material";

interface IProps {
  variant: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  label: string;
}
const ButtonComponent = (props: IProps) => {
  return (
    <Button variant={props.variant} color={props.color}>
      {props.label}
    </Button>
  );
};

export default ButtonComponent;
