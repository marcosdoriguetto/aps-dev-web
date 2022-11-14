import { forwardRef } from "react";
import InputMask from "react-input-mask";
import "./Input.css";

function InputField({ label, type, error, mask, ...rest }, ref) {
  return (
    <>
      <div className="input-container">
        <label className="label" htmlFor={type}>
          {label}
        </label>
        {mask ? (
          <InputMask className="input" mask={mask} id={type} type={type} ref={ref} {...rest} />
        ) : (
          <input className="input" id={type} type={type} ref={ref} {...rest} />
        )}

      </div>

      {!!error && <p className="error-message">{error.message}</p>}
    </>
  );
}

export const Input = forwardRef(InputField)
