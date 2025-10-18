import clsx from "clsx";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-[375px]",
        "md:max-w-[768px]",
        "xl:max-w-[1400px]",
      )}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
