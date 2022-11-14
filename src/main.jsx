import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserAuthProvider } from "./contexts/UserAuth.contexts";
import { SnackbarProvider } from "notistack"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <UserAuthProvider>
        <SnackbarProvider autoHideDuration={3000}>
          <App />
        </SnackbarProvider>
      </UserAuthProvider>
  </React.StrictMode>
);
