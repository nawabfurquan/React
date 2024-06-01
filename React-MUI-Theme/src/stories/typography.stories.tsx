import TypographyComponent from "../components/Typography";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Typography",
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

interface IArgs {
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

const Template: ComponentStory<typeof TypographyComponent> = (args: IArgs) => (
  <TypographyComponent {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: "h1",
  content: "Heading 1",
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
  content: "Overline",
};
