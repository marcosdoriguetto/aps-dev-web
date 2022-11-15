import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import { useAuth } from "../../contexts/UserAuth.contexts";

import { useSnackbar } from "notistack";

import { FiTrash } from "react-icons/fi";

import "./Dashboard.css";
import { useProject } from "../../contexts/Projects.contexts";

export function Dashboard() {
  const { enqueueSnackbar } = useSnackbar();
  const { projects, getProjects } = useProject();
  const { auth, authToken, setAuth } = useAuth();

  const navigate = useNavigate();

  if (!auth) {
    navigate("/");
  }

  async function handleToggleCompletedProject(project) {
    try {
      await api.put(
        "/projects",
        { ...project, is_completed: !project.is_completed },
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      const message = `O projeto ${project.name} foi ${
        project.is_completed ? "desmarcado" : "concluído"
      } com sucesso`;
      await getProjects();
      return enqueueSnackbar(message, { variant: "success" });
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

  async function handleDeleteProject(project) {
    const { name, id } = project;
    try {
      await api.delete(`/projects/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      await getProjects();
      return enqueueSnackbar(`O projeto ${name} foi excluído com sucesso`, {
        variant: "success",
      });
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

  useState(async () => {
    await getProjects();
  }, []);

  return (
    <main className="main-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th colSpan={1} />
              <th colSpan={1}>Nome</th>
              <th colSpan={1}>Data de inicio</th>
              <th colSpan={1}>Data final</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <tr key={project.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox"
                      readOnly
                      checked={project.is_completed}
                      onClick={() => handleToggleCompletedProject(project)}
                    />
                  </td>

                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.deadline}</td>

                  <td>
                    <button
                      type="button"
                      className="trash-button"
                      onClick={() => handleDeleteProject(project)}
                    >
                      <FiTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Nenhum projeto criado</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
