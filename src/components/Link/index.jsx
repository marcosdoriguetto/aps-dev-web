import { Link as RouterLink } from "react-router-dom";
import "./Link.css";

export function Link({ href, children, ...rest }) {
  return (
    <RouterLink className="link" to={href} {...rest}>
      {children}
    </RouterLink>
  );
}
