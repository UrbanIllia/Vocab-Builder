import * as Yup from "yup";

export const validationSchemaRegister = Yup.object({
  name: Yup.string().required("⛔ Name is required"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "⛔ Invalid email format")
    .required("⛔ Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "⛔ 7 characters, including at least 6 letters and 1 digit",
    )
    .required("⛔ Password is required"),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "⛔ Invalid email format")
    .required("⛔ Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "⛔ 7 characters, including at least 6 letters and 1 digit",
    )
    .required("⛔ Password is required"),
});
