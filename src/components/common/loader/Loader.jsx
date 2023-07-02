import { RingLoader } from "react-spinners";

const loader = {
  margin: "30vh auto",
};

export const Loader = () => {
  return <RingLoader cssOverride={loader} color="#36d7b7" size="100px" speedMultiplier="3" />;
};
