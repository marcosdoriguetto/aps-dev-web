import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useForm } from "react-hook-form";
import { useAuthToken } from "../../contexts/UserAuth.contexts";

import { Input } from "../../components/Input";

import LogoUnicarioca from "../../assets/logo-unicarioca.png";
import "./SignIn.css";
import { useEffect } from "react";
import { Link } from "../../components/Link";

import { resolver } from "./SignIn.validation";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver });

  const navigate = useNavigate();
  const { authToken, setAuthToken } = useAuthToken();

  useEffect(() => {
    if (authToken) {
      navigate("/dashboard");
    }
  }, []);

  function handleSignIn(signInData) {
    const UUID = uuidv4();
    localStorage.setItem("auth", UUID);
    setAuthToken(UUID);

    navigate("/dashboard");
  }

  console.log(errors)

  return (
    <div className="container">
      <img className="logo" src={LogoUnicarioca} alt="Logo Unicarioca" />

      <form
        className="form-container"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
        noValidate
      >
        <div className="inputs-container">
          <Input label="E-mail" type="email" error={errors.email} {...register("email")} />

          <Input label="Senha" type="password" error={errors.password} {...register("password")} />
        </div>

        <button className="button" type="submit">
          Entrar
        </button>

        <div className="create-account">
          <Link href="/register">Não tem conta? Registrar</Link>
				</div>
      </form>
    </div>
  );
}
