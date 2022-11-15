import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor insira seu e-mail")
    .email("Por favor insira um e-mail válido"),
  password: yup.string().required("Por favor insira sua senha"),
});

export const resolver = yupResolver(validateSchema);
