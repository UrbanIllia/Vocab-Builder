import clsx from "clsx";
import { NavLink } from "react-router-dom";

// const notActiveLink =
//   "rounded-[15px] px-3 py-5 border border-transparent hover:border hover:border-primaryGreen transition duration-300";
// const activeLink = "bg-primaryGreen";

// const notActiveLinkModal =
//   "rounded-[15px] transition hover:translate-x-6 transition duration-300";
// const activeLinkModal =
//   "bg-primaryWhite px-5 py-3 text-primaryBlack flex justify-center hover:none";

const activeNav = ({ isActive }) =>
  clsx(
    "rounded-[15px] px-3 py-5 border border-transparent transition duration-300",
    isActive ? "bg-primaryGreen" : "hover:border hover:border-primaryGreen",
  );

const activeNavModal = ({ isActive }) => {
  return clsx(
    "rounded-[15px] transition duration-300",
    isActive
      ? "bg-primaryWhite px-5 py-3 text-primaryBlack flex justify-center"
      : "hover:translate-x-6",
  );
};
const UserNav = ({ variant }) => {
  const isHeader = variant === "header";
  return (
    <nav
      className={clsx(
        !isHeader &&
          "mt-[166px] flex w-[110px] flex-col gap-7 text-sm font-medium text-primaryWhite md:mt-[170px] md:w-[130px]",
      )}
    >
      <NavLink
        to="/dictionary"
        className={isHeader ? activeNav : activeNavModal}
      >
        Dictionary
      </NavLink>
      <NavLink
        to="/recommend"
        className={isHeader ? activeNav : activeNavModal}
      >
        Recommend
      </NavLink>
      <NavLink to="/training" className={isHeader ? activeNav : activeNavModal}>
        Training
      </NavLink>
    </nav>
  );
};

export default UserNav;
