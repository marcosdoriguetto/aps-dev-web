import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserAuthProvider } from "./contexts/UserAuth.contexts";
import { ProjectProvider } from "./contexts/Projects.contexts";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserAuthProvider>
    <SnackbarProvider autoHideDuration={3000}>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </SnackbarProvider>
  </UserAuthProvider>
);
