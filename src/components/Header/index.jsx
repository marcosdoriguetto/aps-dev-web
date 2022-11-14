import { useState } from "react";
import { useAuth } from "../../contexts/UserAuth.contexts";

import { AddNewProjectForm } from "./components/AddNewProjectForm";
import { Modal } from "../Modal";

import "./Header.css";

export function Header() {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false)
  const { setAuth } = useAuth();

	function handleLogout() {
		localStorage.removeItem('auth')

		setAuth(null)
	}

  function handleOpenCreateProjectModal() {
    setOpenCreateProjectModal(true)
  }

  function handleCloseCreateProjectModal() {
    setOpenCreateProjectModal(false)
  }

  return (
    <>
      <header className="header">
        <button className="create_project-button" onClick={handleOpenCreateProjectModal}>Criar projeto</button>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </header>

      <Modal title="Criar projeto" onClose={handleCloseCreateProjectModal} show={openCreateProjectModal}>
        <AddNewProjectForm onClose={handleCloseCreateProjectModal} />
      </Modal>
    </>
  );
}
