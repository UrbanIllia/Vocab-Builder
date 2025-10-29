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
    .matches(
      /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
      "⛔ Latin letters, spaces, hyphens, and apostrophes",
    ),

  ua: Yup.string()
    .required("⛔ Ukrainian word is required")
    .min(2, "⛔ Must be at least 2 characters")
    .matches(
      /^(?![A-Za-z])[ЄІЇҐєіїґА-Яа-яʼ\s-]+$/u,
      "⛔ Ukrainian letters, spaces, hyphens, and apostrophe",
    ),

  category: Yup.string()
    .required("⛔ Category is required")
    .oneOf(
      [
        "verb",
        "participle",
        "noun",
        "adjective",
        "pronoun",
        "numerals",
        "adverb",
        "preposition",
        "conjunction",
        "phrasal verb",
        "functional phrase",
      ],
      "⛔ Invalid category",
    ),

  isIrregular: Yup.boolean().optional().default(false),
});

export const editWordSchema = Yup.object().shape({
  en: Yup.string()
    .matches(
      /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
      "⛔ Only English letters, spaces are allowed",
    )
    .required("⛔ English word is required"),

  ua: Yup.string()
    .matches(
      /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u,
      "⛔ Only Ukrainian letters are allowed",
    )
    .required("⛔ Ukrainian word is required"),
});
