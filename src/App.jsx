import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/CartContext";
menuRoutes;

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
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              {menuRoutes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>

            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
