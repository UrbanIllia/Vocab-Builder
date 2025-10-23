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

export const validationSchemaAddWord = Yup.object({
  en: Yup.string()
    .required("⛔ English word is required")
    .min(2, "⛔ Must be at least 2 characters")
    .matches(/^[a-zA-Z\s-]+$/, "⛔ Must contain only Latin letters"),
  ua: Yup.string()
    .required("⛔ Ukrainian word is required")
    .min(2, "⛔ Must be at least 2 characters")
    .matches(/^[а-яА-Яїіґє\s-]+$/, "⛔ Only Cyrillic letters"),
  category: Yup.string().required("⛔ Category is required"),
  // .oneOf(["verb", "noun", "adjective"], "Invalid category"),
  isIrregular: Yup.string()
    .oneOf(["true", "false", ""], "⛔ Invalid option")
    .optional(),
});
