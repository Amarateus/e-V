import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ProductsListContainer } from "./components/pages/productsList/ProductsListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ProductsListContainer />} />
            <Route path="/category/:categoryName" element={<ProductsListContainer />} />
            <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>

            <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <NavBarContainer>
        <Container maxWidth={"md"} sx={{ paddingTop: 3 }}>
          <ProductsListContainer />
          <ProductDetailContainer />
        </Container>
      </NavBarContainer> */}
    </ThemeProvider>
  );
}

export default App;
