import BookCard from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { books } from "../../../assets/data/data.json";
import { Box } from "@mui/material";

export default {
  title: "Organisms/BookCard",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <Box width="20vw">
    <BookCard {...args} />
  </Box>
);

export const BookCard1 = Template.bind({});
BookCard1.args = {
  book: books[0],
};
