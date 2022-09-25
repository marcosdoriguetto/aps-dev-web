import { Link } from "../Link";

import { GITHUB_LINKS } from "../../constants/GithubLinks";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <p>Site em desenvolvimento pelos alunos:</p>
      <div className="links">
        <Link href={GITHUB_LINKS.MARCOS} target="_blank">
          Marcos
        </Link>
        <span>,</span>
        <Link href={GITHUB_LINKS.FILIPE} target="_blank">
          Filipe
        </Link>
        <span>,</span>
        <Link href={GITHUB_LINKS.MATEUS} target="_blank">
          Mateus
        </Link>
        <span>,</span>
        <Link href={GITHUB_LINKS.SAMUEL} target="_blank">
          Samuel
        </Link>
      </div>
      <span className="hearth">❤</span>
    </footer>
  );
}
