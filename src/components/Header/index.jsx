import { useState } from "react";
import { useAuthToken } from "../../contexts/UserAuth.contexts";

import { Modal } from "../Modal";

import "./Header.css";

export function Header() {
  const [openCreateProjectModal, setOpenCreateProjectModal] = useState(false)
  const { setAuthToken } = useAuthToken();

	function handleLogout() {
		localStorage.removeItem('auth')

		setAuthToken(null)
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

      <Modal title="Modal" onClose={handleCloseCreateProjectModal} show={openCreateProjectModal}>
        <p>This is modal body</p>
      </Modal>
    </>
  );
}
