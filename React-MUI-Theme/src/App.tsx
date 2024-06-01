import "./App.css";
import { Container } from "@mui/material";
import ButtonComponent from "./components/Button";
import TypographyComponent from "./components/Typography";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <TypographyComponent variant="h4" content="Text" />
        <ButtonComponent variant="contained" label="Button 1" />
        <ButtonComponent
          variant="contained"
          color="secondary"
          label="Button 2"
        />
      </Container>
    </div>
  );
}

export default App;
