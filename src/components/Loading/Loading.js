//import { Spinner } from "reactstrap";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loading.css";

const spinnerIcon = <FontAwesomeIcon icon={faSpinner} />;

const Loading = () => {
  return (
    <div className="contain_Spinner">
      <div className="Spinner">{spinnerIcon}</div>
    </div>
  );
};

export default Loading;
