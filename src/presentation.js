// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Code,
  Image,
  Link,
  S
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "black",
  tertiary: "#5BBD76",
}, {
  primary: "Gotham Book",
  secondary: "Gotham Medium"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="tertiary" notes="Presenter notes go here...">
          <Heading size={2} fit caps lineHeight={2} textColor="primary">
            Intro to React Storybook
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={6} lineHeight={2} fit>
            Peter Platek &amp; Sandra Robotos
            <br />
            ecobee
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="Presenter notes go here...">
          <Heading size={2} fit caps lineHeight={2} textColor="primary">
            The old way of working...
          </Heading>
          <Text size={6} textColor="seondary">Dev does work and throws it over the fence to QA</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" notes="Presenter notes go here...">
          <Heading size={2} fit caps lineHeight={2} textColor="primary">
            In comes Storybook
          </Heading>
          <Text size={6} textColor="seondary">a Dev and QA love story <span role="img" aria-label="heart eyes emoji">🤗</span></Text>
          <Text size={6} textColor="seondary">what is storybook?</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={2} fit caps lineHeight={2} textColor="white">
            Installing Storybook
          </Heading>
          <Code textColor="white">
            npm i --save-dev @storybook/react
          </Code>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={2} fit lineHeight={2} textColor="white">
            Full setup instructions
          </Heading>
          <Link href="https://storybook.js.org/basics/guide-react/" textColor="tertiary">
            <S type="underline">https://storybook.js.org/basics/guide-react/</S>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={2} fit lineHeight={2} textColor="white">
            Show code examples of stories in the demo project
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={2} textColor="white">
            Testing with Addons
          </Heading>
          <Text textColor="white" fit lineHeight={2}>
            Show them how to add an addon for testing accessibility
            <br />
            https://github.com/storybooks/storybook-addon-a11y
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} fit lineHeight={2} textColor="white">
            Test Automation
          </Heading>
          <Text textColor="white" fit lineHeight={2}>
            @Peter: Show them automated tests that can run on storybook
            <br />
            <span role="img" aria-label="smiling hugging face emoji">🤗</span>
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={2} fit lineHeight={2} textColor="white">
            Bonus: pulling in components from external libraries
          </Heading>
          <Text textColor="white" fit lineHeight={2}>
            Atlassian: https://atlaskit.atlassian.com/components/banner
          </Text>
        </Slide>
        {/* sample slides that show the diff components we can use */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="black" caps>Typography</Heading>
          <Heading size={1} textColor="white">Heading 1</Heading>
          <Heading size={2} textColor="white">Heading 2</Heading>
          <Heading size={3} textColor="white">Heading 3</Heading>
          <Heading size={4} textColor="white">Heading 4</Heading>
          <Heading size={5} textColor="white">Heading 5</Heading>
          <Text size={6} textColor="seondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite textColor="primary">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="white" caps>Sample image</Heading>
          <Image src="http://www.fillmurray.com/g/600/500"></Image>
        </Slide>
      </Deck>
    );
  }
}
