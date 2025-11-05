import clsx from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaRegister } from "../validations/schemas";
import PasswordEye from "./PasswordEye";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const inputStyle =
  "w-full rounded-[15px] border outline-none focus:placeholder-transparent hover:border transition hover:border-primaryGreen border-lightSecondGray/10 px-[18px] py-4 text-base font-normal leading-oneAndHalf text-primaryBlack placeholder:text-base placeholder:font-normal placeholder:text-primaryBlack";

const RegisterForm = ({ handleSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleToggleEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmitForm = (values, { resetForm }) => {
    handleSubmit(values);
    resetForm();
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchemaRegister}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <label className="relative">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                className={clsx(
                  inputStyle,
                  "mb-[14px]",
                  errors.name && touched.name && "border border-red-700",
                )}
              ></Field>
              <ErrorMessage
                component="div"
                name="name"
                className="absolute bottom-1 left-0 z-50 bg-slate-100 text-red-700"
              />
            </label>

            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <label className="relative">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className={clsx(
                  inputStyle,
                  "mb-[14px]",
                  errors.email && touched.email && "border border-red-700",
                )}
              ></Field>
              <ErrorMessage
                component="div"
                name="email"
                className="absolute bottom-1 left-0 z-50 bg-slate-100 text-red-700"
              />
            </label>

            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <label className="relative">
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                autoComplete="new-password"
                className={clsx(
                  inputStyle,
                  "mb-8",
                  errors.password &&
                    touched.password &&
                    "border border-red-700",
                )}
              ></Field>
              <ErrorMessage
                component="div"
                name="password"
                className="absolute bottom-5 left-0 z-50 bg-slate-100 text-red-700"
              />
              <PasswordEye isOpen={showPassword} onToggle={handleToggleEye} />
            </label>

            {/* //////////////////////////////////////////////////////////////////////////////////////// */}

            <button
              type="submit"
              // onClick={handleSubmitForm}
              className={clsx(
                "flex w-full items-center justify-center rounded-[30px] hover:bg-secondaryGreen",
                "mb-4 bg-primaryGreen py-4 text-base font-semibold leading-oneAndHalf text-primaryWhite transition",
                "md:text-[18px] md:leading-[1.55556]",
              )}
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className={clsx(
                "text-base font-semibold leading-oneAndHalf text-lightSecondGray/50 underline transition hover:text-lightSecondGray",
              )}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
