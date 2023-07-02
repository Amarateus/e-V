import { Button, Container, Grid, TextField, Typography } from "@mui/material";

export const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <>
      <Container maxWidth={"md"} sx={{ paddingTop: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h1">
                Datos del comprador:
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                label="Nombre"
                variant="outlined"
                name="nombre"
                onChange={handleChange}
                helperText={errors.nombre}
                error={errors.nombre && true}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
                helperText={errors.email}
                error={errors.email && true}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Telefono"
                variant="outlined"
                name="telefono"
                onChange={handleChange}
                helperText={errors.telefono}
                error={errors.telefono && true}
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="outlined">
                Comprar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};
