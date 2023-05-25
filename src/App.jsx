import { ItemListContainer } from "./components/layout/itemListContainer/ItemListContainer";
import { NavBar } from "./components/layout/navBar/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <NavBar />
      <Container maxWidth={"md"}>
        <ItemListContainer greeting={"Mateo"} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
