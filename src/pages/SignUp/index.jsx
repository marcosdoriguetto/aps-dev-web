import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/UserAuth.contexts";

import { Input } from "../../components/Input";

import LogoUnicarioca from "../../assets/logo-unicarioca.png";
import "./SignUp.css";
import { useEffect } from "react";
import { Link } from "../../components/Link";

import { resolver } from "./SignUp.validation";

import api from "../../config/api";

import { useSnackbar } from "notistack";

export function SignUp() {
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const navigate = useNavigate();
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, []);

  async function handleSignUp(signUpData) {
    const { name, email, password } = signUpData;
    try {
      await api.post("/users/register", { name, email, password });

      enqueueSnackbar("Usuário criado com sucesso", { variant: "success" });
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Algo deu errado, por favor contate um administrador", {
        variant: "error",
      });
    }
  }

  return (
    <div className="signUp__container">
      <img
        className="signUp__logo"
        src={LogoUnicarioca}
        alt="Logo Unicarioca"
      />

      <form
        className="signUp__form-container"
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
        noValidate
      >
        <div className="signUp__inputs-container">
          <Input
            label="Nome"
            type="text"
            error={errors.name}
            {...register("name")}
          />

          <Input
            label="E-mail"
            type="email"
            error={errors.email}
            {...register("email")}
          />

          <Input
            label="Senha"
            type="password"
            error={errors.password}
            {...register("password")}
          />

          <Input
            label="Confirmação de senha"
            id="confirmPassword"
            type="password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
        </div>

        <button className="signUp__button" type="submit">
          Registrar
        </button>

        <div className="signUp__login">
          <Link href="/">Já tem conta? Logar</Link>
        </div>
      </form>
    </div>
  );
}
