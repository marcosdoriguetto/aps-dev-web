import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/UserAuth.contexts";

import "./Dashboard.css";

export function Dashboard() {
  const { auth } = useAuth();

  const navigate = useNavigate();

  if (!auth) {
    navigate("/");
  }

  return (
    <main className="main-container">
      <iframe
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/wMfUznu3Nqw"
        title="Loading Circle - Progress Animation - Effect Loop | Free Download"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </main>
  );
}
