import clsx from "clsx";
import { useState } from "react";
import { validationSchemaLogin } from "../validations/schemas";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PasswordEye from "./PasswordEye";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const inputStyle =
  "w-full rounded-[15px] border outline-none hover:border transition hover:border-primaryGreen border-lightSecondGray/10 px-[18px] py-4 text-base font-normal leading-oneAndHalf text-primaryBlack placeholder:text-base placeholder:font-normal placeholder:text-primaryBlack";

const LoginForm = ({ handleSubmitLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleToggleEye = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("LoginForm", values);
    handleSubmitLogin(values);
    resetForm();
  };
  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemaLogin}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
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
              className={clsx(
                "flex w-full items-center justify-center rounded-[30px] hover:bg-secondaryGreen",
                "mb-4 bg-primaryGreen py-4 text-base font-semibold leading-oneAndHalf text-primaryWhite transition",
                "md:text-[18px] md:leading-[1.55556]",
              )}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className={clsx(
                "text-base font-semibold leading-oneAndHalf text-lightSecondGray/50 underline transition hover:text-lightSecondGray",
              )}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
