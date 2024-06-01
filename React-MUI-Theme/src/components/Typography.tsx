import { Typography } from "@mui/material";

interface IProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  content: string;
}

const TypographyComponent = (props: IProps) => {
  return <Typography variant={props.variant}>{props.content}</Typography>;
};

export default TypographyComponent;
