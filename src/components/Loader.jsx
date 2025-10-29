import { ClipLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <ClipLoader
        // loading={loading}
        // cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
