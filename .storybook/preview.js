import "../packages/uswds-core/src/js/start";
// import "../dist/css/uswds.css";

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Design Tokens",
        "Components",
        "Patterns",
        "Pages",
      ],
    },
  },
};
export const tags = ["autodocs"];
