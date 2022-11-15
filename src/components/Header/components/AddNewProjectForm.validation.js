import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function validateDate(date) {
  if (date.length === 10 && !date.includes("_")) {
    const [year, month, day] = date.split("-");

    const isValidDate = new Date(`${month}/${day}/${year}`);

    if (isValidDate.toString() === "Invalid Date") {
      return false;
    }

    return true;
  }

  return false;
}

const validateSchema = yup.object().shape({
  name: yup.string().required("Por favor insira um nome pro projeto"),
  startDate: yup
    .string()
    .required("Por favor insira a data de início")
    .test(
      "startDate",
      "Por favor insira uma data válida",
      (value) => value && validateDate(value)
    ),
  finishedDate: yup
    .string()
    .required("Por favor insira a data de finalização")
    .test(
      "finishedDate",
      "Por favor insira uma data válida",
      (value) => value && validateDate(value)
    ),
});

export const resolver = yupResolver(validateSchema);
