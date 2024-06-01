import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/Theme/theme";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";
import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

const defaultTheme = theme; // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
