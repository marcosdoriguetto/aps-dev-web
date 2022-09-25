import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useAuthToken } from "../../contexts/UserAuth.contexts";

import { Input } from "../../components/Input";

import LogoUnicarioca from "../../assets/logo-unicarioca.png";
import "./SignIn.css";
import { useEffect } from "react";

export function SignIn() {
  const navigate = useNavigate();
  const { authToken, setAuthToken } = useAuthToken();

  useEffect(() => {
    if (authToken) {
      navigate("/dashboard");
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const UUID = uuidv4();
    localStorage.setItem("auth", UUID);
    setAuthToken(UUID);

    navigate("/dashboard");
  }

  return (
    <div className="container">
      <img className="logo" src={LogoUnicarioca} alt="Logo Unicarioca" />

      <form
        className="form-container"
        onSubmit={(event) => handleSubmit(event)}
        autoComplete="off"
      >
        <div className="inputs-container">
          <Input label="E-mail" type="email" required />

          <Input label="Senha" type="password" required />
        </div>

        <button className="button" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
