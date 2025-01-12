import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="150"
        color="rgb(36, 63, 214);"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}

export default Loader;
