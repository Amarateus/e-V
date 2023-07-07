import { Button } from "@mui/material";
import { logIn, register, logInWithGoogle } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const FirebaseAuth = () => {
  const navigate = useNavigate();

  let infoInputs = {
    email: "ang1234@gmail.com", // datos hardcodeados para prueba
    password: "ang1234"
  };

  const handleSubmit = async () => {
    let res = await logIn(infoInputs);
    console.log(res);
    navigate("/");
  };

  const infoForRegister = {
    email: "ang1234@gmail.com", // datos hardcodeados para prueba
    password: "ang1234",
  }

  const handleRegister = async ()=>{
    let res = await register(infoForRegister)
    console.log(res)
  }

  const handleSubmitGoogle = async ()=>{
    let res = await logInWithGoogle()
    console.log(res)
  }

  return (
    <div>
      <h1>Estas en el Log-in</h1>
      <Button onClick={handleSubmit}>Ingresar</Button>
      <h4>Aun no tiene cuenta?</h4>
      <Button onClick={handleRegister}>Registrarse</Button>
      <h4>Ingresar con Google</h4>
      <Button onClick={handleSubmitGoogle}>Ingresar con Google</Button>
    </div>
  );
};
