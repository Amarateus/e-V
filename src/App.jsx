import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { NavBarContainer } from "./components/layout/navBar/NavBarContainer";
import { ProductsListContainer } from "./components/pages/productsList/ProductsListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <NavBarContainer />

      <Container maxWidth={"md"} sx={{ paddingTop: 3 }}>
        <ProductsListContainer />
        {/* <ProductDetailContainer /> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
