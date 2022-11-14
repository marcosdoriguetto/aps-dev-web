import { forwardRef } from "react";
import "./Input.css";

function InputField({ label, type, error, ...rest }, ref) {
  return (
    <>
      <div className="input-container">
        <label className="label" htmlFor={type}>
          {label}
        </label>
        <input className="input" id={type} type={type} ref={ref} {...rest} />
      </div>

      {!!error && <p className="error-message">{error.message}</p>}
    </>
  );
}

export const Input = forwardRef(InputField)
