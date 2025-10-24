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
// const CATEGORIES = [
//   "verb",
//   "participle",
//   "noun",
//   "adjective",
//   "pronoun",
//   "numerals",
//   "adverb",
//   "preposition",
//   "conjunction",
//   "phrasal verb",
//   "functional phrase",
// ];

// export const validationSchemaAddWord = Yup.object({
//   en: Yup.string()
//     .required("English word is required")
//     .min(2, "Must be at least 2 characters")
//     .matches(
//       /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/,
//       "Only Latin letters, spaces, hyphens, apostrophes",
//     )
//     .when("category", {
//       is: (cat) => ["verb", "numerals"].includes(cat),
//       then: (schema) =>
//         schema.matches(
//           /^[A-Za-z'-]+-[A-Za-z'-]+-[A-Za-z'-]+$/,
//           "Must be in format: word-word-word (e.g., go-went-gone or one-first-once)",
//         ),
//     }),

//   ua: Yup.string()
//     .required("Ukrainian word is required")
//     .min(2, "Must be at least 2 characters")
//     .matches(
//       /^(?![A-Za-z])[ЄІЇҐєіїґА-Яа-яʼ\s-]+$/u,
//       "Only Ukrainian Cyrillic letters, spaces, hyphens, apostrophe (ʼ)",
//     ),

//   category: Yup.string()
//     .required("Category is required")
//     .oneOf(CATEGORIES, "Invalid category selected"),

//   isIrregular: Yup.boolean().optional().default(false),
// });
