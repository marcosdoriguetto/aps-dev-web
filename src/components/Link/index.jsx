import "./Link.css";

export function Link({ href, children, ...rest }) {
  return (
    <a className="link" href={href} {...rest}>
      {children}
    </a>
  );
}
