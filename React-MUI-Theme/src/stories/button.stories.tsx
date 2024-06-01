import ButtonComponent from "../components/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

interface IArgs {
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

const Template: ComponentStory<typeof ButtonComponent> = (args: IArgs) => (
  <ButtonComponent {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Contained",
  color: "primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  label: "Outlined",
  color: "primary",
};

export const Error = Template.bind({});
Error.args = {
  variant: "contained",
  label: "Error",
  color: "error",
};
