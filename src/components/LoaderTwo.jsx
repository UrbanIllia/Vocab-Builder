import { ClipLoader } from "react-spinners";
const LoaderTwo = () => {
  return (
    <div className="my-[80px] flex items-center justify-center">
      <ClipLoader
        // loading={loading}
        // cssOverride={override}
        color="#85aa9f"
        size={200}
        speedMultiplier={0.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoaderTwo;
