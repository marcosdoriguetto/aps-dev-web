import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validateSchema = yup.object().shape({
  name: yup.string().required("Por favor insira um nome"),
  email: yup
    .string()
    .required("Por favor insira um e-mail")
    .email("Por favor insira um e-mail válido"),
  password: yup.string().required("Por favor insira uma senha"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Senhas estão diferentes")
    .required("Por favor insira a confirmação da senha"),
});

export const resolver = yupResolver(validateSchema);
