import { Input } from "../../Input";
import { resolver } from "./AddNewProjectForm.validation";
import { useAuth } from "../../../contexts/UserAuth.contexts";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import api from "../../../config/api";

import "./AddNewProjectForm.css";
import { useProject } from "../../../contexts/Projects.contexts";

export function AddNewProjectForm({ onClose }) {
  const { getProjects } = useProject();
  const { authToken, setAuth } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  async function handleSubmitForm(createProjectData) {
    const { name, startDate, finishedDate } = createProjectData;
    try {
      await api.post(
        "/projects",
        { name, startDate, deadline: finishedDate, is_completed: false },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      enqueueSnackbar("Projeto criado com sucesso", { variant: "success" });
      getProjects();
      onClose();
    } catch (error) {
      if (
        error.response.status === 401 ||
        error.response.data.message.includes("The Token has expired on")
      ) {
        enqueueSnackbar("Usuário não autorizado, favor logar novamente", {
          variant: "error",
        });
        return setAuth(null);
      }

      return enqueueSnackbar(
        "Algo deu errado, por favor contate um administrador",
        { variant: "error" }
      );
    }
  }

  return (
    <form
      className="addNewProjectForm__form-container"
      onSubmit={handleSubmit(handleSubmitForm)}
      autoComplete="off"
      noValidate
    >
      <div className="addNewProjectForm__inputs-container">
        <Input
          label="Nome do projeto"
          type="text"
          error={errors.name}
          {...register("name")}
        />
        <Input
          label="Data de início"
          type="text"
          mask="9999-99-99"
          placeholder="AAAA/MM/dd"
          error={errors.startDate}
          {...register("startDate")}
        />
        <Input
          label="Data de finalização"
          type="text"
          mask="9999-99-99"
          placeholder="AAAA/MM/dd"
          error={errors.finishedDate}
          {...register("finishedDate")}
        />
      </div>

      <div className="addNewProjectForm__buttons-container">
        <button
          className="addNewProjectForm__button addNewProjectForm__create-button"
          type="submit"
        >
          Criar projeto
        </button>

        <button
          className="addNewProjectForm__button addNewProjectForm__close-button"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </form>
  );
}
