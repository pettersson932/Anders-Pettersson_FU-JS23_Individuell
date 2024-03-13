import { useNavigate } from "react-router-dom";
import useResponse from "../globals/Resp";
import DroneNoOrder from "../assets/images/droneNoDeliver.png";
import DroneOrder from "../assets/images/droneDeliver.png";
import "./styles/Page.scss";
import "./styles/PageStatus.scss";

const Status = () => {
  const navigate = useNavigate();
  const { resp } = useResponse();

  return (
    <div className="page pageStatus">
      {resp.orderInProgress ? (
        <>
          <p>
            <>
              Ordernummer
              <span className="pageStatus__ordernummer">
                {resp.ordernummer}
              </span>
            </>
          </p>
          <figure>
            <img src={DroneOrder} alt="drone" />
          </figure>
          <p className="pageStatus__message">Din beställning är på väg!</p>

          <p className="pageStatus__minutes">{resp.eta} minuter</p>

          <button className="pageStatus__button">"Ok, cool"</button>
        </>
      ) : (
        <>
          <figure>
            <img src={DroneNoOrder} alt="drone" />
          </figure>
          <p className="pageStatus__message">Din beställning är INTE på väg!</p>
          <button
            className="pageStatus__button"
            onClick={() => navigate("/menu")}
          >
            Gå till menyn!
          </button>
        </>
      )}
    </div>
  );
};
export default Status;
