import { useSnackbar } from "notistack";
import { createContext, useContext, useState } from "react";
import api from "../config/api";
import { useAuth } from "./UserAuth.contexts";

const ProjectContext = createContext({});

export function ProjectProvider({ children }) {
  const { enqueueSnackbar } = useSnackbar();
  const { authToken, setAuth } = useAuth();
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    try {
      const response = await api.get("/projects", {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      return setProjects(response.data || []);
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
    <ProjectContext.Provider value={{ projects, setProjects, getProjects }}>
      {children}
    </ProjectContext.Provider>
  );
}

export const useProject = () => useContext(ProjectContext);
