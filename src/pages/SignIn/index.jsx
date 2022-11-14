import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useAuthToken } from "../../contexts/UserAuth.contexts";

import { Input } from "../../components/Input";

import LogoUnicarioca from "../../assets/logo-unicarioca.png";
import "./SignIn.css";
import { useEffect } from "react";
import { Link } from "../../components/Link";

import { resolver } from "./SignIn.validation";

import api from '../../config/api'

import { useSnackbar } from "notistack";

export function SignIn() {
  const { enqueueSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver });

  const navigate = useNavigate();
  const { authToken, setAuthToken } = useAuthToken();

  async function handleSignIn(signInData) {
    try {
      const response = await api.post('/users/login', signInData)
      console.log(response.data)
      setAuthToken(JSON.stringify(response.data));

      enqueueSnackbar('Usuário logado com sucesso', { variant: 'success' })
      navigate("/dashboard");
    } catch(error) {
      if(error.response.status === 401) {
        return enqueueSnackbar('E-mail ou senha incorretos', { variant: 'error' })
      }

      return enqueueSnackbar('Algo deu errado, por favor contate um administrador', { variant: 'error' })
    }
  }

  useEffect(() => {
    if (authToken) {
      navigate("/dashboard");
    }
  }, []);

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
