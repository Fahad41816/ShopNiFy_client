import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="max-w-7xl h-screen mx-auto flex items-center justify-center animate-pulse">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
