import MainNav from "../nav/MainNav";
import useResponse from "../globals/Resp";
import DroneNoOrder from "../assets/images/droneNoDeliver.png";
import DroneOrder from "../assets/images/droneDeliver.png";
import "./styles/PageStatus.scss";
import { useNavigate } from "react-router-dom";

const Status = () => {
  const navigate = useNavigate();
  const { resp } = useResponse();

  return (
    <div className="pageStatus">
      <p>
        {resp.orderInProgress && (
          <>
            Ordernummer
            <span className="pageStatus__ordernummer"> {resp.ordernummer}</span>
          </>
        )}
      </p>
      <figure>
        <img
          src={resp.orderInProgress ? DroneOrder : DroneNoOrder}
          alt="drone"
        />
      </figure>
      <p className="pageStatus__message">
        {resp.orderInProgress
          ? "Din beställning är på väg!"
          : "Din beställning är INTE på väg!"}
      </p>

      <p className="pageStatus__minutes">
        {resp.orderInProgress && `${resp.eta} minuter`}
      </p>

      <button
        className="pageStatus__button"
        onClick={resp.orderInProgress ? null : () => navigate("/menu")}
      >
        {resp.orderInProgress ? "Ok, cool" : "Gå till menyn!"}
      </button>
    </div>
  );
};
export default Status;
