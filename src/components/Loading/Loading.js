import { Spinner } from "reactstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="contain_Spinner">
      <Spinner className="Spinner" />
    </div>
  );
};

export default Loading;
