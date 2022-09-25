import "./Input.css";

export function Input({ label, type, error, ...rest }) {
  return (
    <>
      <div className="input-container">
        <label className="label" htmlFor={type}>
          {label}
        </label>
        <input className="input" id={type} type={type} {...rest} />
      </div>

      {!!error && <p>{error}</p>}
    </>
  );
}
