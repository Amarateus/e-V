import { Box, Typography } from "@mui/material";

export const FooterContainer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        width: "100%",
        backgroundColor: "rgba(37, 37, 38, 0.495)",
        position: "fixed",
        bottom: 0
      }}
    >
      <Typography variant="h6" component="h4">
        e-V | by Mateo Carrizo Vega ©
      </Typography>
    </Box>
  );
};
