import clsx from "clsx";
import RegisterForm from "../components/RegisterForm";
import ImgageRegisterAndLogin from "../components/ImgageRegisterAndLogin";
import TextUnderImage from "../components/TextUnderImage";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../redux/auth/operationsAuth";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Values", values);
    dispatch(registerUserThunk(values)).unwrap();
    toast.success("Register is success");
  };

  return (
    <div
      className={clsx(
        "grid grid-cols-1 pb-[57px]",
        "bg-[linear-gradient(to_bottom,_#f8f8f8_90%,_#85AA9F_100%)]",
        "md:px-[70px] md:pb-[80px] md:pt-6 xl:bg-[linear-gradient(to_bottom_right,_#f8f8f8_80%,_#85AA9F_100%)]",
        "xl:grid-cols-[627px_1fr] xl:gap-[80px] xl:px-[100px]",
      )}
    >
      <div
        className={clsx(
          "order-2 rounded-t-[25px] bg-lightGray/10 px-4 pb-[57px] pt-8",
          "md:order-1 md:rounded-[30px] md:px-[64px] md:py-[48px]",
          "xl:order-1",
        )}
      >
        <h2
          className={clsx(
            "mb-4 text-3xl font-semibold leading-onePointZeroSix tracking-[-0.02em] text-primaryBlack",
            "md:mb-5 md:text-[40px] md:leading-onePointTwo",
          )}
        >
          Register
        </h2>
        <p
          className={clsx(
            "mb-4 text-base font-normal leading-oneAndHalf text-lightSecondGray/80",
            "md:mb-8 md:text-xl md:leading-oneAndHalf",
          )}
        >
          To start using our services, please fill out the registration form
          below. All fields are mandatory:
        </p>
        <RegisterForm handleSubmit={handleSubmit} />
      </div>
      <div className="order-1 xl:order-2">
        <ImgageRegisterAndLogin />
        <TextUnderImage />
      </div>
    </div>
  );
};

export default Register;
